import { signIn } from "@/auth";
import { Button } from "@nextui-org/button";

export default async function SignInPage() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="submit">Signin with GitHub</Button>
      </form>
    </div>
  );
}
