"use client";
import GoalCard from "@/components/dashboard/index/GoalCard";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { BiSolidFileImport } from "react-icons/bi";
import { CiImport } from "react-icons/ci";
import { FaCrown, FaPaintBrush } from "react-icons/fa";

type Goal = {
  title: string;
  description: string;
  id: string;
  completed: boolean;
};

export default function Page() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getGoalList = async () => {
    const response = await fetch(`/api/dash`);
    const data = await response.json();
    console.log(data);
    setGoalsList(data);
    setLoading(false);
  };

  useEffect(() => {
    getGoalList();
  }, []);

  return (
    <div className="">
      <div className="flex mb-4  justify-between rounded-lg overflow-hidden border-2 border-white shadow">
        <div className="flex-1 p-4 border-r border-white bg-yellow-100">
          <p className="text-4xl text-yellow-800">{!loading ? goalsList.filter((goal) => !goal.completed).length : "-"}</p>
          <p className="text-lg opacity-75 text-yellow-800">In progress</p>
        </div>
        <div className="flex-1 p-4 border-l border-white bg-green-200">
          <p className="text-4xl text-green-800">{!loading ? goalsList.filter((goal) => goal.completed).length : "-"}</p>
          <p className="text-lg opacity-75 text-green-800">Completed</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <div className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-md p-4">
          <div className="h-[42px] w-[42px] bg-blue-500  flex rounded-full justify-center items-center">
            <FaPaintBrush size={18} className="text-blue-100" />
          </div>
          <div>
            <p>Create a new goal</p>
            <span className="text-sm opacity-75">You got this!</span>
          </div>
        </div>
        <div className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-md p-4">
          <div className="h-[42px] w-[42px] bg-green-600  flex rounded-full justify-center items-center">
            <BiSolidFileImport size={18} className="text-blue-100" />
          </div>
          <div>
            <p>Import a goal</p>
            <span className="text-sm opacity-75">Import the JSON file</span>
          </div>
        </div>
        <div className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-md p-4">
          <div className="h-[42px] w-[42px] bg-yellow-700  flex rounded-full justify-center items-center">
            <FaCrown size={18} className="text-blue-100" />
          </div>
          <div>
            <p>Leaderboards</p>
            <span className="text-sm opacity-75">
              Get more productive than everybody!
            </span>
          </div>
        </div>
      </div>
      <div className="mb-6 mt-8">
        <p className="font-semibold pb-1.5">In progress</p>
        <div className="grid grid-cols-4 gap-2">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <GoalCard loading key={index} />
              ))
            : goalsList
                .filter((goal) => !goal.completed)
                .map((goal, index) => <GoalCard key={index} />)}
        </div>
        {!loading && goalsList.filter((goal) => goal.completed).length == 0 && (
          <div className="bg-neutral-100 flex-col text-center flex justify-center items-center border-2 p-2 border-white  min-h-[150px] rounded-md w-full">
            <p className="font-semibold">
              {goalsList.filter((goal) => goal.completed).length == 0
                ? "There isn't any goal yet."
                : "Every goal has been completed."}
            </p>
            <p className="opacity-75 text-sm">
              {goalsList.filter((goal) => goal.completed).length == 0
                ? "Get started by creating one with the button on top"
                : "Good job! You're all done!"}
            </p>
          </div>
        )}
      </div>
      <div className="mb-6">
        <p className="font-semibold pb-1.5">Completed</p>
        <div className={`grid grid-cols-4 gap-2`}>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <GoalCard loading key={index} />
              ))
            : goalsList
                .filter((goal) => goal.completed)
                .map((goal, index) => <GoalCard key={index} />)}
        </div>
        {!loading && goalsList.filter((goal) => goal.completed).length == 0 && (
          <div className="bg-neutral-100 flex-col text-center flex justify-center items-center border-2 p-2 border-white  min-h-[150px] rounded-md w-full">
            <p className="font-semibold">There is no completed goal yet.</p>
            <p className="opacity-75 text-sm">
              {goalsList.filter((goal) => !goal.completed).length != 0 &&
                "Come on! get some work done."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
