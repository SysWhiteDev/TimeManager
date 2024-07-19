import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import TasksSection from "./TasksSection";
import Link from "next/link";
import { Skeleton } from "@nextui-org/react";

export default async function Page() {
  return (
    <div className="max-w-6xl px-0 lg:px-4 mx-auto pt-[10dvh] lg:pt-[18dvh]">
      <div>
        <Link
          href={"/dash"}
          className="flex items-center gap-0.5 hover:underline opacity-75 cursor-pointer"
        >
          <FiChevronLeft />
          Go back
        </Link>
        <Skeleton className="rounded-full mt-2 max-w-[40%]">
          <p className="text-4xl font-semibold">.</p>
        </Skeleton>
        <Skeleton className="rounded-full mt-2 max-w-[65%]">
          <p className="text-xs font-semibold">.</p>
        </Skeleton>
        <Skeleton className="rounded-full mt-2 max-w-[75%]">
          <p className="text-xs font-semibold">.</p>
        </Skeleton>
        <Skeleton className="rounded-full mt-2 max-w-[60%]">
          <p className="text-xs font-semibold">.</p>
        </Skeleton>
      </div>
      <TasksSection goalId={""} fakeLoading />
    </div>
  );
}
