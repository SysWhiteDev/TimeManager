import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Spinner,
} from "@nextui-org/react";
import { Lora, JetBrains_Mono } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { useRouter } from "next/navigation";
const font = Lora({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function CreateGoalButton(): React.JSX.Element {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const tryCreateNewGoal = async () => {
    setLoading(true);
    await fetch("/api/dash", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
    }).then(async (data: any) => {
      const res = await data.json();
      if (res.id) {
        router.push(`/dash/goal/${res?.id}`);
      } else {
        if (!res.id) {
          setError("Please input a title and description of the goal");
          setLoading(false);
          setTimeout(() => {
            setError("");
          }, 2500);
        } else {
          setError("Uh oh! it seems something unexpected has happened :/");
          setLoading(false);
          setTimeout(() => {
            setError("");
          }, 2500);
        }
      }
    });
  };

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === "c" && !isOpen) {
        onOpen();
      }
    };
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a new goal
              </ModalHeader>
              <ModalBody>
                <div className="my-12 mt-2">
                  <p className="font-semibold">Preview</p>
                  <div
                    className={` dark:bg-neutral-800 bg-neutral-100 flex items-end min-h-[150px] shadow transition-all border-2 rounded-md p-2 dark:border-neutral-700 border-white`}
                  >
                    <div className="w-full">
                      <p
                        className={`truncate text-xl font-bold dark:text-neutral-100 text-neutral-700 ${font.className}`}
                      >
                        {title || "Title"}
                      </p>
                      <p className="truncate w-[80%] text-sm dark:opacity-50 opacity-75">
                        {description || "Description"}
                      </p>
                    </div>
                  </div>
                </div>
                <Input
                  type="text"
                  label="Goal Name"
                  size="sm"
                  placeholder="Enter the name"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                  label="Goal Description"
                  placeholder="Enter the description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                {error && (
                  <span className="text-red-500 -translate-y-1.5 text-sm dark:text-red-600">
                    {error}
                  </span>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={() => tryCreateNewGoal()}>
                  {loading ? <Spinner color="white" size="sm" /> : "Create"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div
        onClick={onOpen}
        className="bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-opacity-65 relative hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-2xl p-4"
      >
        <div
          className={`rounded-md w-[24px] h-[24px] flex items-center justify-center absolute top-3 text-sm text-neutral-600 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 bg-neutral-200 shadow right-3 ${mono.className}`}
        >
          C
        </div>
        <div className="h-[42px] w-[42px] bg-blue-500  flex rounded-full justify-center items-center">
          <FaPaintBrush size={18} className="text-blue-100" />
        </div>
        <div>
          <p>Create a new goal</p>
          <span className="text-sm opacity-75">You got this!</span>
        </div>
      </div>
    </>
  );
}
