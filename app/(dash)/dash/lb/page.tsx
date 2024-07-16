import React from "react";

function LbSelector({ children, active }: any): React.JSX.Element {
  return (
    <button
      className={
        active || false
          ? "text-neutral-800 dark:text-neutral-300 dark:bg-neutral-900 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
          : "text-neutral-800 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:hover:bg-opacity-35 hover:bg-opacity-50 transition-all rounded-md py-1.5"
      }
    >
      {children}
    </button>
  );
}

export default function Page(): React.JSX.Element {
  return (
    <div className="max-w-6xl px-4 sm:px-0 mx-auto pt-[10dvh] pb-8">
      <p className="text-6xl font-semibold pt-2">Leaderboard</p>
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 grid grid-cols-3 gap-1.5 border border-white p-2 rounded-xl mt-4">
        <LbSelector active>This week</LbSelector>
        <LbSelector>This month</LbSelector>
        <LbSelector>Lifetime</LbSelector>
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-white p-2 rounded-xl mt-4">
        <div className="flex text-sm  uppercase text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900 items-center justify-between p-2 px-3 bg-neutral-200 rounded-md font-semibold">
          <div className="flex items-center">
            <div className="min-w-[46px] flex-shrink-0">#</div>
            <span>User</span>
          </div>
          <span>Completion Points</span>
        </div>
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 px-3"
          >
            <div className="flex items-center">
              <div className="min-w-[46px] flex-shrink-0">{index + 1}</div>
              <span>SysWhite</span>
            </div>
            <span>1920</span>
          </div>
        ))}
        <div className="flex font-bold text-sm text-neutral-700 dark:text-neutral-200 items-center justify-between border border-green-300 dark:border-green-700 dark:bg-green-800 p-2 px-3 bg-green-100 rounded-md">
          <div className="flex items-center">
            <div className="min-w-[46px] flex-shrink-0">51</div>
            <span>User</span>
          </div>
          <span>918239128390128390120931290</span>
        </div>
      </div>
    </div>
  );
}
