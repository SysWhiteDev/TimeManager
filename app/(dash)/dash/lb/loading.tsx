"use server";
import Link from "next/link";
import React from "react";

export default async function Loading() {
  function LbSelector({ children, active }: any): React.JSX.Element {
    return (
      <div
        className={
          active
            ? "text-neutral-800 cursor-pointer text-center dark:text-neutral-300 dark:bg-neutral-900 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
            : "text-neutral-800 text-center cursor-pointer dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:hover:bg-opacity-35 hover:bg-opacity-50 transition-all rounded-md py-1.5"
        }
      >
        {children}
      </div>
    );
  }

  return (
    <div className="max-w-6xl lg:px-4 sm:px-0 mx-auto pt-[10dvh] pb-8">
      <p className="text-6xl font-semibold pt-2">Leaderboard</p>
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 grid grid-cols-1 lg:grid-cols-3 gap-1.5 border border-white p-2 rounded-xl mt-4">
        <LbSelector targetTimespan={"week"} active>
          This week
        </LbSelector>
        <LbSelector targetTimespan={"month"}>This month</LbSelector>
        <LbSelector targetTimespan={"all"}>Lifetime</LbSelector>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-white p-2 rounded-xl mt-4">
        <div className="flex text-sm  uppercase text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900 items-center justify-between p-2 px-3 bg-neutral-200 rounded-md font-semibold">
          <div className="flex items-center">
            <div className="min-w-[46px] flex-shrink-0 mr-4">#</div>
            <span>User</span>
          </div>
          <span>Completion Points</span>
        </div>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            style={{ animationDelay: `${(index * 80)}ms` }}
            className="flex items-center min-h-[40px] bg-neutral-200 rounded-md animate-pulse bg-neutral-700 bg-opacity-50 my-2 justify-between p-2.5 px-3"
          >
            <div className="flex items-center">
              <div className="min-w-[46px] flex-shrink-0 mr-4"></div>
              <span></span>
            </div>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
