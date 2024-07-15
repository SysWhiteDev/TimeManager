import { auth } from "@/auth"
import { PrismaClient } from "@prisma/client"
export const GET = auth(async function GET(req) {
    if (!req.auth) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const prisma = new PrismaClient();
    const goals = await prisma.goal.findMany({
        where: {
            userId: req.auth.user?.id
        },
        select: {
            title: true,
            description: true,
            id: true,
            completed: true
        }
    })
    return Response.json(goals, { status: 200 })
}) 