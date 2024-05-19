import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl font-medium">Page Not Found</p>
      <Link href="/" className="mt-4 text-lg text-blue-900 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
