import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import { PrismaClient } from '@prisma/client'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github],
    events: {
        signIn: async (message: any) => {
            const prisma = new PrismaClient()
            prisma.user.upsert({
                where: { email: message.user.email },
                update: {},
                create: { email: message.user.email, name: message.user.name, }
            }).then(async () => {
                console.log("User created")
            }).catch((e: any) => {
                console.log(e)
                console.error("Sum wrong with db gang")
            })
        }
    },
    callbacks: {
        async session({ session }: any) {
            return session
        }
    }
})