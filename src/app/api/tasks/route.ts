import { NextResponse } from "next/server";

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectDB();

    const tasks: TaskDocument[] = await TaskModel.find();

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json("タスクの取得に失敗しました", { status: 500 });
  }
};

// [Tips] 毎回最新のデータを取得するために、force-dynamicを指定する
export const dynamic = "force-dynamic";
