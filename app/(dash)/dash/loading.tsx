import GoalCard from "@/components/dashboard/index/GoalCard";
import MainActionButtons from "@/components/dashboard/index/MainActionButtons";

export default function Loading() {
  return (
    <div className="">
      <div className="flex mb-4  justify-between rounded-lg overflow-hidden border-2 dark:border-neutral-600 border-white shadow">
        <div className="flex-1 p-4 bg-yellow-100">
          <p className="text-4xl text-yellow-800 animate-pulse">-</p>
          <p className="text-lg opacity-75 text-yellow-800">In progress</p>
        </div>
        <div className="flex-1 p-4 bg-blue-200">
          <p className="text-4xl text-blue-800 animate-pulse">-</p>
          <p className="text-lg opacity-75 text-blue-800">Completion Points</p>
        </div>
        <div className="flex-1 p-4 bg-green-200">
          <p className="text-4xl text-green-800 animate-pulse">-</p>
          <p className="text-lg opacity-75 text-green-800">Completed</p>
        </div>
      </div>
      <MainActionButtons />
      <div className="mb-6 mt-8">
        <p className="font-semibold pb-1.5">In progress</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <GoalCard loading key={index} />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <p className="font-semibold pb-1.5">Completed</p>
        <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <GoalCard loading key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
