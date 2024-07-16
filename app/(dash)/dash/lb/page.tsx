import React from "react";

export default function Page(): React.JSX.Element {
  return (
    <div className="max-w-6xl px-4 sm:px-0 mx-auto pt-[15dvh]">
      <p className="text-6xl font-semibold pt-2">Leaderboard</p>
      <div className="bg-neutral-100 flex items-center grid grid-cols-3 gap-1.5 border border-white p-2 rounded-xl mt-4">
        <button
          className={
            true
              ? "text-neutral-800 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
              : "text-neutral-800 hover:bg-neutral-200 hover:bg-opacity-50 transition-all rounded-md py-1.5"
          }
        >
          This week
        </button>
        <button
          className={
            false
              ? "text-neutral-800 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
              : "text-neutral-800 hover:bg-neutral-200 hover:bg-opacity-50 transition-all rounded-md py-1.5"
          }
        >
          This month
        </button>
        <button
          className={
            false
              ? "text-neutral-800 bg-neutral-200 transition-all font-semibold rounded-md py-1.5"
              : "text-neutral-800 hover:bg-neutral-200 hover:bg-opacity-50 transition-all rounded-md py-1.5"
          }
        >
          Lifetime
        </button>
      </div>
      <div className="bg-neutral-100 border border-white p-2 rounded-xl mt-4">
        <div className="flex text-sm  uppercase text-neutral-700 items-center justify-between p-2 px-3 bg-neutral-200 rounded-md font-semibold">
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
              <div className="min-w-[46px] flex-shrink-0">{index+1}</div>
              <span>SysWhite</span>
            </div>
            <span>1920</span>
          </div>
        ))}
        <div className="flex font-bold text-sm text-neutral-700 items-center justify-between border border-green-300 p-2 px-3 bg-green-100 rounded-md">
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
