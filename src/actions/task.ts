"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: false,
  };

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    // [Tips] DBに接続する処理
    await connectDB();

    // [Tips] TaskModel.create() で新しいタスクを作成する処理
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "タスクの作成に失敗しました";
    return state;
  }

  // [Tips] next/navigation の redirectメソッド を使うことで、処理に成功した場合は指定したパスにリダイレクトさせることができる
  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    isCompleted: Boolean(formData.get("isCompleted")),
  };

  try {
    // [Tips] DBに接続する処理
    await connectDB();

    // [Tips] TaskModel.updateOne() で情報を更新する処理
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "タスクの更新に失敗しました";
    return state;
  }

  // [Tips] next/navigation の redirectメソッド を使うことで、処理に成功した場合は指定したパスにリダイレクトさせることができる
  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  try {
    // [Tips] DBに接続する処理
    await connectDB();

    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "タスクの削除に失敗しました";
    return state;
  }

  // [Tips] next/navigation の redirectメソッド を使うことで、処理に成功した場合は指定したパスにリダイレクトさせることができる
  redirect("/");
};
