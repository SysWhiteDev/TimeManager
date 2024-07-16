import React, { useState } from "react";
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
import { Lora } from "next/font/google";
import { FaPaintBrush } from "react-icons/fa";
import { useRouter } from "next/navigation";
const font = Lora({ subsets: ["latin"] });

export default function CreateGoalButton(): React.JSX.Element {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(false);
      router.push(`/dash/goal/${res?.id}`);
    });
  };

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
                    className={`flex items-end min-h-[150px] bg-neutral-100 shadow transition-all border-2 rounded-md p-2 border-white`}
                  >
                    <div className="w-full">
                      <p
                        className={`text-xl truncate font-bold text-neutral-700 ${font.className}`}
                      >
                        {title || "Title"}
                      </p>
                      <p className="truncate w-[80%] text-sm opacity-75">
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
        className="bg-neutral-100 hover:bg-opacity-65 hover:cursor-pointer gap-3 flex items-center shadow rounded-md p-4"
      >
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
