import React from "react";
import NavbarLink from "./NavbarLink";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Navbar(): React.JSX.Element {
  const session = useSession();

  return (
    <div className="h-full flex items-center justify-between flex-col bg-white p-3 min-w-[250px]">
      <div className="w-full">
        <p>test</p>
      </div>
      <div className="w-full">
        <NavbarLink>
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p>{JSON.stringify(session)}</p>
        </NavbarLink>
      </div>
    </div>
  );
}
