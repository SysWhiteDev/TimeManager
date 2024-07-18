"use server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
export async function createTask(goalId: any, formData: FormData) {
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
    console.log("USER NOT OWNS");
    return null;
  }
  await prisma.task.create({
    data: {
      title: formData.get("task_name") as string,
      duration: 3600,
      goalId: goalWIthUser?.id as string,
    },
  });
}
