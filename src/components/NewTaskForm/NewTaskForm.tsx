"use client";

import { createTask, FormState } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

const NewTaskForm = () => {
  const initialState: FormState = {
    error: "",
  };

  // [Tips] useFormState() を使って ServerActionde でフォームの状態を管理と送信の処理を実行する処理
  const [state, formAction] = useFormState(createTask, initialState);

  // [Tips] serverActionを使って送信処理を実行している時は Buttonを非活性にしたい -> useFormStatus を使ってpendingの状態を取得する *useFormStatusフックを使う場合はコンポーネントを別に切り出さないとダメらしい*
  const SubmitButton: React.FC = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        disabled={pending}
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create
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
            min="2020-01-01"
            max="2100-12-31"
            required
            className="block mt-2 p-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>

        {/* <button
          type="submit"
          disabled={pending}
          className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm"
        >
          Create
        </button> */}
        <SubmitButton />

        {state.error && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default NewTaskForm;
