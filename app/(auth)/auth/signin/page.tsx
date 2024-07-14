import { signIn } from "@/auth";
import { Button } from "@nextui-org/button";
import { SiGithub } from "react-icons/si";

export default async function SignInPage() {
  return (
    <div className="h-dvh grid-pattern w-dvw !bg-slate-400 flex justify-center items-center">
      <div className="bg-slate-200 border-2 shadow shadow-slate-500 border-slate-300 w-[350px] p-4 rounded-2xl">
        <div className="mb-10">
          <p className="text-3xl font-bold">Hello!</p>
          <p className="text-md opacity-90">Please authenticate</p>
        </div>
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dash" });
          }}
        >
          <Button type="submit" className="w-full" color="primary">
            <SiGithub size={18} /> Sign In with GitHub
          </Button>
        </form>
      </div>
    </div>
  );
}
