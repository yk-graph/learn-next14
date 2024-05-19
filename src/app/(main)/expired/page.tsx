import { TaskCard } from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/expired`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const tasks = await response.json();
  return tasks;
};

export default async function ExpiredTaskPage() {
  const tasks = await getExpiredTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center">Expired Tasks</h1>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id as string} task={task} />
        ))}
      </div>
    </div>
  );
}
