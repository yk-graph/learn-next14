import { NextRequest, NextResponse } from "next/server";

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";

interface Params {
  params: { id: string };
}

export const GET = async (_: NextRequest, { params }: Params) => {
  try {
    await connectDB();

    const task: TaskDocument | null = await TaskModel.findById(params.id);

    if (!task) {
      return NextResponse.json("タスクが見つかりません", { status: 404 });
    }

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json("タスクの取得に失敗しました", { status: 500 });
  }
};

export const dynamic = "force-dynamic";
