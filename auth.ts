import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import { PrismaClient } from '@prisma/client'
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github],
    events: {
        signIn: async (message: any) => {
            const prisma = new PrismaClient();
            prisma.user.upsert({
                where: { email: message.user.email },
                update: {},
                create: { email: message.user.email, name: message.user.name, }
            }).then(async () => {
            }).catch((e: any) => {
                console.log(e)
                console.error("Sum wrong with db gang")
            })
            await prisma.$disconnect()
        },
    },
    callbacks: {
        jwt({ token, trigger, session, account }) {
            if (account?.provider === "github") {
                return { ...token, accessToken: account?.access_token }
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            const data = await fetch(`${process.env.API_BASE}/api/user`, {
                headers: {
                    "user-email": session.user.email,
                }
            });
            const user = await data.json();
            session.user.id = user.id;
            session.accessToken = token.accessToken
            return session;
        },
    }
})