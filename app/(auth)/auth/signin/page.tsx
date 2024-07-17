import { signIn } from "@/auth";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

export default async function SignInPage() {
  return (
    <div className="h-dvh grid-pattern w-dvw !bg-slate-300 dark:!bg-neutral-900 flex justify-center items-center">
      <div className="bg-slate-200 flex justify-between flex-col md:block w-full h-full md:h-auto md:w-auto dark:bg-neutral-800 md:border-2 shadow dark:shadow-neutral-800 shadow-slate-500 dark:border-neutral-700 border-slate-300 md:min-w-[550px] p-6 pt-4 min-w-[30dvw] md:rounded-2xl">
        <div>
          <div className=" pt-[16dvh] md:pt-0 ">
            <Image
              alt="App Logo"
              className="mx-auto mb-2"
              src={"/logo-nobg.png"}
              height={100}
              width={100}
            />

            <p className="text-3xl font-bold text-center">TimeManager</p>
            <p className="text-md opacity-90 text-center">Welcome back!</p>
          </div>
          <div className="h-[2px] hidden md:block dark:bg-neutral-700 rounded-full my-5 bg-slate-300 " />
        </div>
        <div className="lg:mx-2">
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/dash" });
            }}
          >
            <Button type="submit" className="w-full" color="default">
              <SiGithub size={18} /> Continue with GitHub
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
