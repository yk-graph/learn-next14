/*
  ModelはDBのスキーマ（DBのテーブル構造を定義するもので、どのようなデータを格納するか、どのようなデータ型を持つか、どのような制約を持つかなどを定義するもの）を定義して
  DBとの操作を行うためのメソッドを提供することが主な役割となる
*/

import mongoose, { Document } from "mongoose";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

// [Tips] extendsを使ってTask型とDocument型を定義することで、Task と Document の両方の型を持つプロパティが定義される
export interface TaskDocument extends Task, Document {
  createdAt: Date;
  updatedAt: Date;
}

// [Tips] Schemaを使ってデータベースのスキーマを定義する
const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  // [Tips] 第二引数にtimestamps: true を指定することで、createdAt と updatedAt が自動的に追加される
  {
    timestamps: true,
  }
);

// [Tips] TaskSchema から TaskModel を作成する
// [Tips] すでにTaskModelが作成されている場合は mongoose.models.Task で取得して、存在しない場合は新たに TaskModel を作成する処理
export const TaskModel =
  mongoose.models.Task || mongoose.model<TaskDocument>("Task", taskSchema);
