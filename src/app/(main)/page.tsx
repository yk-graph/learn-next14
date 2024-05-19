import { TaskCard } from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store", // [Tips] キャッシュを無効化するための記述
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const tasks = await response.json();
  return tasks;
};

export default async function MainPage() {
  const tasks = await getAllTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center">All Tasks</h1>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id as string} task={task} />
        ))}
      </div>
    </div>
  );
}
