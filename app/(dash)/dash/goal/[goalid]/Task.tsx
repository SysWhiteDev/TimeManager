import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
const mono = JetBrains_Mono({ subsets: ["latin"] });

type TaskProps = {
    status?: "not_started" | "running" | "paused"
}
export default function Task({}: TaskProps): React.JSX.Element {
  let status = "not_started";


  return (
    <div className="flex justify-between py-2 items-center">
      <span className="font-semibold">Test task 1</span>
      <div className="flex items-center gap-2.5">
        <span className={`${mono.className} mr-1`}>17:20</span>
        {status === "not_started" && (
          <div className="flex items-center gap-1.5 cursor-pointer transition-all hover:bg-green-300 bg-green-400 text-green-900 px-2.5 py-0.5 rounded-md ">
            <FaPlay />
            Start task
          </div>
        )}
        {status === "running" && (
          <div className="flex items-center gap-1.5 hover:bg-yellow-300 transition-all cursor-pointer bg-yellow-400 text-yellow-900 px-2.5 py-0.5 rounded-md ">
            <FaPause />
            Pause task
          </div>
        )}
        {status === "paused" && (
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-yellow-300 transition-all bg-yellow-400 text-yellow-900 px-2.5 py-0.5 rounded-md ">
            <FaPlay />
            Resume task
          </div>
        )}
      </div>
    </div>
  );
}
