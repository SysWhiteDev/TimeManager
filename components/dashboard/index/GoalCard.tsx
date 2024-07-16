import React from "react";
import { Lora } from "next/font/google";
import Link from "next/link";
const font = Lora({ subsets: ["latin"] });

type GoalCard = {
  title?: string;
  description?: string;
  id?: string;
  loading?: boolean;
};
export default function GoalCard({
  title,
  description,
  loading,
  id,
}: GoalCard): React.JSX.Element {
  return (
    <Link
      href={`${id ? `/dash/goal/${id}` : ""}`}
      className={`${!loading ? "cursor-pointer" : "cursor-default"}`}
    >
      <div
        className={`${
          loading ? "animate-pulse dark:bg-neutral-700 bg-white" : "hover:bg-white dark:hover:bg-neutral-700 dark:bg-neutral-800 bg-neutral-100"
        } flex items-end min-h-[150px] shadow transition-all border-2 rounded-md p-2 dark:border-neutral-700 border-white`}
      >
        <div className="w-full">
          {!loading && (
            <>
              {" "}
              <p
                className={`truncate text-xl font-bold dark:text-neutral-100 text-neutral-700 ${font.className}`}
              >
                {title || "Title"}
              </p>
              <p className="truncate w-[80%] text-sm dark:opacity-50 opacity-75">
                {description || "Description"}
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
