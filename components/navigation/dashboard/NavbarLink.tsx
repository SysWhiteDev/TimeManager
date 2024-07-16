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
      className={`w-full  text-sm ${path === dest ? "bg-neutral-100 font-semibold dark:bg-neutral-600 dark:text-neutral-200 text-neutral-950" : "text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"} transition-all text-md items-center justify-start gap-2.5  flex  py-1.5 px-1.5 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
