import EditTaskForm from "@/components/EditTaskForm/EditTaskForm";
import { TaskDocument } from "@/models/task";

interface Params {
  params: { id: string };
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const task = await response.json();
  return task;
};

export default async function EditTaskPage({ params }: Params) {
  const task = await getTask(params.id);

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
}
