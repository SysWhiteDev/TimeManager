"use client";
import React, { useState } from "react";
import { BiSolidFileImport } from "react-icons/bi";
import { FaCrown, FaPaintBrush } from "react-icons/fa";
import CreateGoalButton from "./CreateGoalButton";

export default function MainActionButtons(): React.JSX.Element {
  const closeModal = () => {};
  return (
    <>
      <div className="grid grid-cols-2 gap-2.5">
        <CreateGoalButton />
        {/* <div className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-2xl p-4">
          <div className="h-[42px] w-[42px] bg-green-600  flex rounded-full justify-center items-center">
            <BiSolidFileImport size={18} className="text-blue-100" />
          </div>
          <div>
            <p>Import a goal</p>
            <span className="text-sm opacity-75">Import the JSON file</span>
          </div>
        </div> */}
        <div className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-2xl p-4">
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
    </>
  );
}
