import NewTaskForm from "@/components/NewTaskForm/NewTaskForm";

export default function NewTaskPage() {
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-xl font-bold">Create New Task</h2>
      <NewTaskForm />
    </div>
  );
}
