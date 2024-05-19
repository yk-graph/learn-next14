"use client";

import { useState } from "react";

import { TaskDocument } from "@/models/task";
import { FormState, updateTask } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

interface EditTaskFormProps {
  task: TaskDocument;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  // [Tips] ServerAction内で定義した関数に対してbindメソッドを使うことでformのinputにはない値を送信時に追加することができる
  const updateTaskWithId = updateTask.bind(null, task._id as string);
  const initailState: FormState = { error: "" };

  const [state, formAction] = useFormState(updateTaskWithId, initailState);

  const SubmitButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Edit
      </button>
    );
  };

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block mt-2 p-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block mt-2 p-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min="2020-01-01"
            max="2100-12-31"
            required
            className="block mt-2 p-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="isCompleted" className="text-sm">
            タスクを完了にする
          </label>
        </div>

        <SubmitButton />

        {state.error && (
          <div className="mt-4 p-2 text-sm text-red-500 bg-red-100 rounded-md">
            {state.error}
          </div>
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
