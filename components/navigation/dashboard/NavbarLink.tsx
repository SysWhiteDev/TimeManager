import React from "react";

type NavbarLinkProps = {
  children: React.ReactNode;
};

export default function NavbarLink({
  children
}: NavbarLinkProps): React.JSX.Element {
  return (
    <div className="w-full transition-all cursor-pointer flex hover:bg-neutral-200 py-1.5 px-3 rounded-lg">
      {children}
    </div>
  );
}
