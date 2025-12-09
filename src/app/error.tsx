"use client";

import { Home, RotateCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full max-w-lg border border-red-900 bg-red-950/50 p-4 text-center">
      <h1 className="mono mb-4 text-2xl uppercase">Something went wrong</h1>
      <p className="text-lg font-bold text-red-500 uppercase">
        {error.message ||
          "An error occured, but don't worry — we'll get you back."}
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={reset}
          className="flex w-[120px] cursor-pointer items-center gap-2 border border-red-900 bg-red-950/50 px-4 py-2 transition-colors hover:bg-red-950"
        >
          <RotateCw className="h-5 w-5" />
          <span className="uppercase">Reload</span>
        </button>

        <Link href="/">
          <button className="flex w-[120px] cursor-pointer items-center gap-2 border border-red-900 bg-red-950/50 px-4 py-2 transition-colors hover:bg-red-950">
            <Home className="h-5 w-5" />
            <span className="uppercase">Home</span>
          </button>
        </Link>
      </div>

      <p className="mt-8 text-xs opacity-75">
        Error ID: {error.digest || "local"}
      </p>
    </div>
  );
}
