import React from "react";
import NavbarLink from "./NavbarLink";
import AccountSection from "./AccountSection";
import { signOut } from "@/auth";
import { HiDotsHorizontal } from "react-icons/hi";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { FaDoorOpen } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoPodium, IoPodiumOutline } from "react-icons/io5";
import Image from "next/image";
import { HiSquares2X2 } from "react-icons/hi2";

export default function Navbar({ session }: any): React.JSX.Element {
  return (
    <div className="h-full flex items-center shadow dark:bg-neutral-800 justify-between flex-col bg-white overflow-hidden md:p-3 w-0  md:min-w-[250px]">
      <div className="w-full gap-0.5 flex flex-col">
        <Image
          src={"/logo.png"}
          alt="App logo"
          className="w-[250px] dark:hidden block mb-2.5 object-cover select-none pointer-events-none"
          width={390}
          height={208}
        />
        <Image
          src={"/logo-dark.png"}
          alt="App logo"
          className="w-[250px] hidden dark:block mb-2.5 object-cover select-none pointer-events-none"
          width={390}
          height={208}
        />
        <NavbarLink dest="/dash">
          <HiSquares2X2 size={16} />
          <p>Your goals</p>
        </NavbarLink>
        <NavbarLink dest="/dash/lb">
          <IoPodium size={16} />
          <p>Leaderboards</p>
        </NavbarLink>
      </div>
      <div className="w-full">
        <div
          className={
            "w-full bg-neutral-100 dark:bg-neutral-700 transition-all text-md items-center justify-between cursor-pointer flex py-1.5 px-1.5 rounded-lg"
          }
        >
          <AccountSection />
          <Popover>
            <PopoverTrigger>
              <div className=" flex-1 justify-end flex ">
                <HiDotsHorizontal size={20} className="text-neutral-400" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] ">
              <div className="w-full ">
                <form
                  action={async ({}) => {
                    "use server";

                    await signOut({}).then(() => {
                      redirect("/auth/signin");
                    });
                  }}
                  className="w-full"
                >
                  <button
                    type="submit"
                    className="w-full text-red-500 text-md flex min-h-[35px] px-2 hover:underline hover:opacity-85 transition-all items-center justify-between"
                  >
                    Sign Out
                    <FaDoorOpen size={18} />
                  </button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
