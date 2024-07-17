"use server";
import React from "react";
import { FaCrown, FaPaintBrush } from "react-icons/fa";
import CreateGoalButton from "./CreateGoalButton";
import Link from "next/link";

export default async function MainActionButtons() {
  const closeModal = () => {};
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
        <CreateGoalButton />
        <Link
          href={"/dash/lb"}
          className="bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-opacity-65 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-2xl p-4"
        >
          <div className="h-[42px] w-[42px] flex-shrink-0  bg-yellow-700  flex rounded-full justify-center items-center">
            <FaCrown size={18} className="text-blue-100" />
          </div>
          <div>
            <p>Leaderboards</p>
            <span className="text-sm opacity-75">
              Get more productive than everybody!
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
