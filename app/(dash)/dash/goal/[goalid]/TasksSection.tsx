"use client";
import React, { Suspense, useEffect, useState } from "react";
import Task from "./Task";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/modal";
import { Button, Input, Skeleton } from "@nextui-org/react";
import { createTask, deleteGoal } from "./actions";
import { BsThreeDots } from "react-icons/bs";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type TasksSectionProps = {
  goalId: string;
};

type Task = {
  id: string;
  title: string;
  duration: number;
};

export default function TasksSection({
  goalId,
}: TasksSectionProps): React.JSX.Element {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(true);

  const tryDeleteGoal = async () => {
    await deleteGoal(goalId);
    router.push("/dash");
  };

  const tryGetTasks = async () => {
    const tasks: any = await fetch(
      `${window.location.origin}/api/dash/goal/tasks?goalid=${goalId}`,
      { next: { tags: ["tasks-list"] } }
    );
    setTasks(await tasks.json());
    setLoading(false);
  };

  useEffect(() => {
    tryGetTasks();
  }, []);
  let status = "running";
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form
                action={async (formData: FormData) => {
                  await createTask(goalId, formData);
                  await tryGetTasks();
                }}
              >
                <ModalHeader className="flex flex-col gap-1">
                  Add a new task
                </ModalHeader>
                <ModalBody>
                  <Input
                    type="text"
                    name="task_name"
                    label="Task content"
                    placeholder="Be quick and coincise!"
                  />
                  <span className="text-xs text-left opacity-75">
                    Note: The task will be added at the bottom of the list
                  </span>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="bg-white flex flex-col gap-2.5 shadow p-4 pb-2 rounded-xl mt-12">
        <div className="flex justify-between border-b pb-4 items-center">
          <span className="opacity-65">
            {!loading && (
              <>
                {tasks?.length} total tasks, 0 completed
                {tasks?.length !== 0 && (
                  <span> ({tasks && (0 / tasks?.length) * 100}%)</span>
                )}
              </>
            )}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="flat"
              onClick={onOpen}
              color="primary"
              className="flex items-center gap-1.5 cursor-pointer transition-all !px-2.5 1py-0.5  "
            >
              <FaPlus />
              Add a task
            </Button>
            <Popover>
              <PopoverTrigger>
                <Button className="w-[40px] h-[40px] !p-0 !min-w-0">
                  <BsThreeDots />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <button
                  onClick={() => tryDeleteGoal()}
                  className="w-full gap-2.5 text-red-500 text-md flex min-h-[35px] px-2 hover:underline hover:opacity-60 transition-all items-center justify-between"
                >
                  Delete Goal
                  <FaRegTrashCan size={18} />
                </button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="">
          {loading ? (
            <div className="">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="rounded-md mb-1.5">
                  <Task title="" duration={0} />
                </Skeleton>
              ))}
            </div>
          ) : (
            <div>
              {tasks?.map((task: Task, index: number) => (
                <Task title={task.title} duration={task.duration} key={index} />
              ))}
              {tasks?.length === 0 && (
                <div className="bg-neutral-100 dark:bg-neutral-800 my-2 flex-col text-center flex justify-center items-center border-2 p-2 border-white dark:border-neutral-700 min-h-[150px] rounded-md w-full">
                  <p className="font-semibold">
                    There is no task to complete yet.
                  </p>
                  <p className="opacity-75 text-sm">
                    Add one by clicking the "Add a task" button
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
