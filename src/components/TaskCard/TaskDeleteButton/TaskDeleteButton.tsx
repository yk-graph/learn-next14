"use client";

import { useFormState, useFormStatus } from "react-dom";

import { FormState, deleteTask } from "@/actions/task";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect } from "react";

interface TaskDeleteButtonProps {
  id: string;
}

export const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  // [Tips] ServerAction内で定義した関数に対してbindメソッドを使うことでformのinputにはない値を送信時に追加することができる
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };

  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  const SubmitButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <button type="submit" disabled={pending}>
        <FaTrashAlt className="text-gray-700 hover:text-gray-600 text-lg cursor-pointer" />
      </button>
    );
  };

  useEffect(() => {
    if (state && state.error) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};
