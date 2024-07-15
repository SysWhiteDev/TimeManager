import React from "react";
import { Lora } from "next/font/google";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";
const font = Lora({ subsets: ["latin"] });

type GoalCard = {
  title?: string;
  description?: string;
  loading?: boolean;
};
export default function GoalCard({
  title,
  description,
  loading,
}: GoalCard): React.JSX.Element {
  return (
    <Link
      href={"/dash/"}
      className={`${!loading ? "cursor-pointer" : "cursor-default"}`}
    >
      <div
        className={`${
          loading ? "animate-pulse bg-white" : "hover:bg-white bg-neutral-100"
        } flex items-end min-h-[150px] shadow transition-all border-2 rounded-md p-2 border-white`}
      >
        <div className="w-full">
          {!loading && (
            <>
              {" "}
              <p
                className={`text-xl font-bold text-neutral-700 ${font.className}`}
              >
                Goal title
              </p>
              <p className="truncate w-[80%] text-sm opacity-75">
                Descriptioooooooooooooooooooooooooooooooooooooooooooooooooon
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
