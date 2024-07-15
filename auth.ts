import NextAuth from "next-auth"
import github from "next-auth/providers/github"
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    process.env.AIRTABLE_BASE
);

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [github],
    callbacks: {
        async signIn(user: any) {
            await base("Users").create([
                {
                    fields: {
                        Name: user.profile.name,
                        Email: user.profile.email,
                    }
                }
            ])
            return true;
        },
        async session({ session }: any) {
            await base("Users").find(session.user.name, (err: any, res: any) => {
                if (err) {
                    console.error(err)
                    return false;
                }
                session.user.id = res.id
                console.log("HIII")
                return session
            })
            return session
        }
    }
})