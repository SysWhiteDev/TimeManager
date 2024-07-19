import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import TasksSection from "./TasksSection";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Page({ params }: { params: { goalid: string } }) {
  const session = await auth();
  if (!session) return null;
  let goalData: any;

  const prisma = new PrismaClient();
  goalData = await prisma.goal.findUnique({
    where: {
      id: params.goalid,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
  });
  await prisma.$disconnect();


  return (
    <div className="max-w-6xl px-0 lg:px-4 mx-auto pt-[10dvh] lg:pt-[18dvh]">
      <div>
        <Link
          href={"/dash"}
          className="flex items-center gap-0.5 hover:underline opacity-75 cursor-pointer"
        >
          <FiChevronLeft />
          Go back
        </Link>
        <p className="text-6xl font-semibold pt-2">{goalData?.title}</p>
        <p className="text-lg opacity-75 pt-1.5 whitespace-pre-line">
          {goalData?.description}
        </p>
      </div>
      <TasksSection goalId={params.goalid} />
    </div>
  );
}
