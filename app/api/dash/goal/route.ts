import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
export const GET = auth(async function GET(req, { params }) {
    if (!req.auth) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const prisma = new PrismaClient();
    const goal = await prisma.goal.findUnique({
        where: {
            id: req.nextUrl.searchParams.get("goalid") as string
        },
        select: {
            id: true,
            title: true,
            description: true,
            createdAt: true,
        }
    });
    await prisma.$disconnect();
    return Response.json(goal, { status: 200 });
});