import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
export const GET = auth(async function GET(req) {
  if (!req.auth)
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  const params = req.nextUrl.searchParams;
  if (!params.get("goalid") || typeof params.get("goalid") !== "string") {
    return Response.json({ error: "Bad request" }, { status: 403 });
  }
  const prisma = new PrismaClient();
  const goalWIthUser = await prisma.goal.findUnique({
    where: {
      id: params.get("goalid") as string,
    },
    include: {
      user: true,
    },
  });
  if (goalWIthUser?.user.id !== req?.auth?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tasks = await prisma.task.findMany({
    where: {
      goalId: goalWIthUser?.id,
    },
    select: {
      id: true,
      duration: true,
      title: true,
    },
  });

  await prisma.$disconnect();
  return Response.json(tasks, { status: 200 });
});
