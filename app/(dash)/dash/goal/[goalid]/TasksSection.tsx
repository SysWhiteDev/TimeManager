"use client";
import React from "react";
import Task from "./Task";
import { FaPlus } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/modal";
import { Button, Input } from "@nextui-org/react";
import { createTask } from "./actions";

type TasksSectionProps = {
  goalId: string;
}

export default function TasksSection({goalId}: TasksSectionProps): React.JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let status = "running";
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form action={(formData: FormData) => createTask(goalId, formData)}>
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
          <span className="opacity-65">172 total tasks, 62 completed (0%)</span>
          <div className="flex items-center gap-2.5">
            <Button
              variant="flat"
              onClick={onOpen}
              color="primary"
              className="flex items-center gap-1.5 cursor-pointer transition-all !px-2.5 1py-0.5  "
            >
              <FaPlus />
              Add a task
            </Button>
          </div>
        </div>
        <div className="">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </>
  );
}
