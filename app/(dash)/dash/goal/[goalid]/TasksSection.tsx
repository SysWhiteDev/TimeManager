import React from "react";
import Task from "./Task";
import { FaPlus } from "react-icons/fa";
export default function TasksSection(): React.JSX.Element {
  let status = "running";
  return (
    <div className="bg-white flex flex-col gap-2.5 shadow p-4 rounded-xl mt-12 lg:mt-16">
      <div className="flex justify-between border-b pb-4 items-center">
        <span className="opacity-65">172 total tasks, 62 completed (0%)</span>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 hover:bg-blue-200 transition-all cursor-pointer bg-blue-300 text-blue-900 px-2.5 py-0.5 rounded-md ">
            <FaPlus />
            Add a task
          </div>
        </div>
      </div>
      <div className="">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
