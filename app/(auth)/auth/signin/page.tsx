import { signIn } from "@/auth";
import { Button } from "@nextui-org/button";
import { SiGithub } from "react-icons/si";

export default async function SignInPage() {
  return (
    <div className="h-dvh grid-pattern w-dvw !bg-slate-300 flex justify-center items-center">
      <div className="bg-slate-200 border-2 shadow shadow-slate-500 border-slate-300 w-[350px] p-4 rounded-2xl">
        <div className="">
          <p className="text-2xl font-bold text-center">TimeManager</p>
          <p className="text-sm opacity-90 text-center">Welcome back!</p>
        </div>
        <div className="h-[2px] rounded-full my-5  bg-slate-300 " />
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
