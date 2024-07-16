/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
export default function Page({
  params,
}: {
  params: { goalid: string };
}): React.JSX.Element {
  const router = useRouter();
  const [goalData, setGoalData] = useState<any>(null);

  const getGoalData = async () => {
    await fetch(`/api/dash/goal?goalid=${params.goalid}`).then(
      async (data: any) => {
        const res = await data.json();
        setGoalData(res);
      }
    );
  };
  useEffect(() => {
    getGoalData();
  }, []);
  return (
    <div className="max-w-6xl px-4 sm:px-0 mx-auto pt-[18dvh]">
      <span
        onClick={() => router.back()}
        className="flex items-center gap-0.5 hover:underline opacity-75 cursor-pointer"
      >
        <FiChevronLeft />
        Go back
      </span>
      <p className="text-6xl font-semibold pt-2">
        {goalData?.title || "loading..."}
      </p>
      <p className="text-lg opacity-75 pt-1.5 whitespace-pre-line">
        {goalData?.description || "loading..."}
      </p>
    </div>
  );
}
