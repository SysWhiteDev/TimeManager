"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Goal = {
  title: string;
  description: string;
  id: string;
};

export default function Page() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);

  const getGoalList = async () => {
    const response = await fetch(`/api/dash`);
    const data = await response.json();
    console.log(data);
    setGoalsList(data);
  };

  useEffect(() => {
    getGoalList();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="bg-neutral-100 shadow rounded-md p-4">Hiiiii</div>
        <div className="bg-neutral-100 shadow rounded-md">Hiiiii</div>
      </div>

      <div className="mb-6 mt-4">
        <p className="font-semibold">In progress</p>
        {goalsList.length !== 0 &&
          goalsList.map((goal) => (
            <div key={goal.id}>
              <h1>{goal.title}</h1>
              <p>{goal.description}</p>
            </div>
          ))}
      </div>
      <div className="mb-6">
        <p className="font-semibold">Completed</p>
        {goalsList.length !== 0 &&
          goalsList.map((goal) => (
            <div key={goal.id}>
              <h1>{goal.title}</h1>
              <p>{goal.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
