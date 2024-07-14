"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavbarLinkProps = {
  children: React.ReactNode;
  className?: string;
  dest: string;
};

export default function NavbarLink({
  children,
  className,
  dest,
  ...props
}: NavbarLinkProps): React.JSX.Element {
  const path = usePathname();
  return (
    <Link
      href={dest}
      className={`w-full  text-sm ${path.includes(dest) ? "bg-neutral-200 font-semibold text-neutral-950 cursor-default" : "text-neutral-800 hover:bg-neutral-100 cursor-pointer"} transition-all text-md items-center justify-start gap-2.5  flex  py-1.5 px-1.5 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
