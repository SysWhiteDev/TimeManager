import { auth } from "@/auth";
import Image from "next/image";

export default async function AccountSection() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex items-center gap-1.5">
      <Image
        width={32}
        height={32}
        src={session.user.image as string}
        alt="User Avatar"
        className="rounded-full"
      />
      <p className="text-sm">
        {session.user.name}
        <span className="text-xs bg-neutral-300 text-neutral-700 px-1 rounded-md ml-1.5 py-0.5">Free</span>
      </p>
    </div>
  );
}
