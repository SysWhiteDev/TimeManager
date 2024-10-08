import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [github],
  events: {
    signIn: async (message: any) => {
      const prisma = new PrismaClient();
      await prisma.user
        .upsert({
          where: { email: message.user.email },
          update: {},
          create: { email: message.user.email, name: message.user.name },
        })
        .then(async () => {})
        .catch((e: any) => {
          console.error("Sum wrong with db gang");
        });
      await prisma.$disconnect();
    },
  },
  callbacks: {
    session: async ({ session, token }: any) => {
      const data = await fetch(`${process.env.API_BASE}/api/user`, {
        headers: {
          session: JSON.stringify(session),
        },
      });
      const user = await data.json();
      if (user.id) {
        session.user.id = user.id;
        session.accessToken = token.accessToken;
        return session;
      } else {
        return false;
      }
    },
    jwt({ token, trigger, session, account }) {
      if (account?.provider === "github") {
        return { ...token, accessToken: account?.access_token };
      }
      return token;
    },
  },
});
