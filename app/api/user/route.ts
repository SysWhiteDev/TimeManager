import "server-only";
import { PrismaClient } from "@prisma/client"
import { headers } from 'next/headers'
import { auth } from "@/auth"
export const GET = auth(async function GET(req) {
    const headersList = headers()
    const prisma = new PrismaClient();
    const data = await prisma.user.findUnique({ where: { email: headersList.get("user-email") as string }, select: { id: true } })
    await prisma.$disconnect()
    return Response.json(data);
})