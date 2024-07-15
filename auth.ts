import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import prisma from "@/utils/db"
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github],
    events: {
        signIn: async (message: any) => {
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
            await prisma.$disconnect()
        },
    },
    callbacks: {
        async session({ session }: any) {
            
            await prisma.user.findUnique({
                where: { email: session.user.email }
            }).then((user) => {
                session.user.id = user?.id
            }).catch((e) => {
                console.log(e)
                console.error("Sum wrong with db gang")
            })
            session.user.id = 0
            console.log(session.user)
            return session
        }
    }
})