"use server";
import Link from "next/link";
import React from "react";

export default async function Page({ searchParams }: any) {
  const timespan = searchParams.timespan || "week";

  function LbSelector({ children, targetTimespan }: any): React.JSX.Element {
    return (
      <Link
        href={`?timespan=${targetTimespan}`}
        className={
          timespan === targetTimespan
            ? "text-neutral-800 text-center dark:text-neutral-300 dark:bg-neutral-900 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
            : "text-neutral-800 text-center dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:hover:bg-opacity-35 hover:bg-opacity-50 transition-all rounded-md py-1.5"
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <div className="max-w-6xl lg:px-4 sm:px-0 mx-auto pt-[5dvh] lg:pt-[10dvh] pb-8">
      <p className="text-6xl font-semibold pt-2">Leaderboard</p>
      <div className="bg-neutral-100 dark:bg-neutral-800 grid-cols-1 lg:grid-cols-3 dark:border-neutral-700 grid grid-cols-3 gap-1.5 border border-white p-2 rounded-xl mt-4">
        <LbSelector targetTimespan={"week"}>This week</LbSelector>
        <LbSelector targetTimespan={"month"}>This month</LbSelector>
        <LbSelector targetTimespan={"all"}>Lifetime</LbSelector>
      </div>
      <div className="bg-neutral-100 overflow-x-scroll dark:bg-neutral-800 dark:border-neutral-700 border border-white p-2 rounded-xl mt-4 w-full">
        <div className="flex text-sm min-w-[400px] uppercase text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900 items-center justify-between p-2 px-3 bg-neutral-200 rounded-md font-semibold">
          <div className="flex items-center">
            <div className="min-w-[46px] flex-shrink-0 mr-4">#</div>
            <span>User</span>
          </div>
          <span>Completion Points</span>
        </div>
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center min-w-[400px] justify-between p-2.5 px-3"
          >
            <div className="flex items-center">
              <div className="min-w-[46px] flex-shrink-0 mr-4">{index + 1}</div>
              <span>SysWhite</span>
            </div>
            <span>{10000 - 100 * index}</span>
          </div>
        ))}
        <div className="flex font-bold min-w-[400px] text-sm text-neutral-700 dark:text-neutral-200 items-center justify-between border border-green-300 dark:border-green-700 dark:bg-green-800 p-2 px-3 bg-green-100 rounded-md">
          <div className="flex items-center">
            <div className="min-w-[46px] flex-shrink-0 mr-4">251</div>
            <span>User</span>
          </div>
          <span>1000</span>
        </div>
      </div>
    </div>
  );
}
