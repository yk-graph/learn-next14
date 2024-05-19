"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-xl font-medium">Unexpected error occurred</p>
      <Link href="/" className="mt-4 text-lg text-blue-900 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
