"use server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createGoal(formData: FormData) {
  const session = await auth();
  if (!session?.user) return null;
  if (!formData.get("title") || !formData.get("description")) {
    return null;
  }
  const prisma = new PrismaClient();
  const goal = await prisma.goal.create({
    data: {
      userId: session?.user.id as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    },
    select: {
      id: true,
      completed: true,
      title: true,
      description: true,
    },
  });
  await prisma.$disconnect();
  revalidatePath("/dash");
  return goal;
}
