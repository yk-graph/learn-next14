import { NextResponse } from "next/server";

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";

export const GET = async () => {
  // [Tips] 現在の日付を取得してからフォーマットをyyyy-MM-ddに変換する
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  try {
    await connectDB();

    const tasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate }, // [Tips] 対象の値を比較する処理として、mongodbの$ltを使用する
    });

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json("タスクの取得に失敗しました", { status: 500 });
  }
};

// [Tips] 毎回最新のデータを取得するために、force-dynamicを指定する
export const dynamic = "force-dynamic";
