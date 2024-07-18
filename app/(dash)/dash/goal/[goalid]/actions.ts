"use server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
export async function createTask(goalId: string, formData: FormData) {
  const session = await auth();
  if (!session?.user) return null;
  const prisma = new PrismaClient();
  const goalWIthUser = await prisma.goal.findUnique({
    where: {
      id: goalId,
    },
    include: {
      user: true,
    },
  });
  if (goalWIthUser?.user.id !== session?.user.id) {
    return null;
  }
  await prisma.task.create({
    data: {
      title: formData.get("task_name") as string,
      duration: 3600,
      goalId: goalWIthUser?.id as string,
    },
  });
  await prisma.$disconnect();
}

export async function getTasks(goalId: string) {
  const session = await auth();
  if (!session?.user) return null;
  const prisma = new PrismaClient();
  const goalWIthUser = await prisma.goal.findUnique({
    where: {
      id: goalId,
    },
    include: {
      user: true,
    },
  });
  if (goalWIthUser?.user.id !== session?.user.id) {
    return null;
  }

  const tasks = await prisma.task.findMany({
    where: {
      goalId: goalId,
    },
    select: {
      id: true,
      duration: true,
      title: true,
    },
  });

  await prisma.$disconnect();
  return tasks;
}

export async function deleteGoal(goalId: string) {
  const session = await auth();
  if (!session?.user) return null;
  const prisma = new PrismaClient();

  const goalWithUser = await prisma.goal.findUnique({
    where: {
      id: goalId,
    },
    include: {
      user: true,
    },
  });

  if (goalWithUser?.user.id !== session?.user.id) {
    return null;
  }

  await prisma.task.deleteMany({
    where: {
      goalId: goalWithUser?.id as string,
    },
  });

  await prisma.goal.delete({
    where: {
      id: goalWithUser?.id as string,
    },
  });

  await prisma.$disconnect();
}
