import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
import { Button } from "@nextui-org/react";
const mono = JetBrains_Mono({ subsets: ["latin"] });

type TaskProps = {
  status?: "not_started" | "running" | "paused";
  title: string;
  duration: number;
};
export default function Task({title, duration}: TaskProps): React.JSX.Element {
  let status = "not_started";

  return (
    <div className="flex justify-between py-2 items-center">
      <span className="font-semibold">{title}</span>
      <div className="flex items-center gap-2.5">
        <span className={`${mono.className} mr-1`}>{duration}</span>
        {/* {status === "not_started" && (
          <Button
            variant="flat"
            className="flex items-center gap-1.5 cursor-pointer transition-all hover:bg-green-300 bg-green-400 text-green-900 !px-2.5 1py-0.5  "
          >
            <FaPlay />
            Start task
          </Button>
        )}
        {status === "running" && (
          <Button
            variant="flat"
            className="flex items-center gap-1.5 hover:bg-yellow-300 transition-all cursor-pointer bg-yellow-400 text-yellow-900 !px-2.5 !py-0.5  "
          >
            <FaPause />
            Pause task
          </Button>
        )}
        {status === "paused" && (
          <Button
            variant="flat"
            className="flex items-center gap-1.5 cursor-pointer hover:bg-yellow-300 transition-all bg-yellow-400 text-yellow-900 !px-2.5 !py-0.5  "
          >
            <FaPlay />
            Resume task
          </Button>
        )} */}
      </div>
    </div>
  );
}
