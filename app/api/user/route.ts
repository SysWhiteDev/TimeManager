import "server-only";
import { PrismaClient } from "@prisma/client"
import { headers } from 'next/headers'
import { auth } from "@/auth"

export const GET = auth(async function GET(req) {
    const headersList = headers()
    const session: any = JSON.parse(headersList.get("session") as any)
    if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const prisma = new PrismaClient();
    const data = await prisma.user.findUnique({ where: { email: session?.user?.email, name: session?.user?.name }, select: { id: true } })
    await prisma.$disconnect()
    return Response.json(data);
})