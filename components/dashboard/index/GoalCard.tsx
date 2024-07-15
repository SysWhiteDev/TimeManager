import React from "react";
import { Lora } from "next/font/google";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";
const font = Lora({ subsets: ["latin"] });

type GoalCard = {
  key?: any;
  title?: string;
  description?: string;
  loading?: boolean;
};
export default function GoalCard({
  title,
  description,
  key,
  loading,
}: GoalCard): React.JSX.Element {
  return (
    <Link href={"/dash/"} key={key} className={`${!loading ? "cursor-pointer" : "cursor-default"}`}>
      <div
        className={`w-[350px] h-[150px] shadow  hover:bg-white rounded-md border-white border-2 transition-all bg-neutral-100 `}
      >
        <Skeleton isLoaded={!loading} className="h-full rounded-md">
          <div className="w-[350px] flex h-full items-end p-2 ">
            <div className="w-full">
              {!loading && (
                <>
                  {" "}
                  <p
                    className={`text-xl font-bold text-neutral-700 ${font.className}`}
                  >
                    Goal title
                  </p>
                  <p className="truncate w-[80%] text-sm opacity-75">
                    Descriptioooooooooooooooooooooooooooooooooooooooooooooooooon
                  </p>
                </>
              )}
            </div>
          </div>
        </Skeleton>
      </div>
    </Link>
  );
}
