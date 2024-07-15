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
    await prisma.$disconnect();
    return Response.json(goals, { status: 200 })
})

export const POST = auth(async function POST(req) {
    if (!req.auth) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const body = await req.json();

    if (!body?.title || !body?.description) {
        return Response.json({ error: "Invalid body" }, { status: 400 })
    }

    const prisma = new PrismaClient();
    const goal = await prisma.goal.create({
        data: {
            userId: req.auth.user?.id as string,
            title: body?.title as string,
            description: body?.description as string,
        },
        select: {
            id: true,
            completed: true,
            title: true,
            description: true
        }
    })
    await prisma.$disconnect();
    return Response.json(goal, { status: 200 })
})