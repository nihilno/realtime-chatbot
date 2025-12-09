"use client";

import { Home, StepBack } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { back } = useRouter();

  return (
    <div className="w-full max-w-lg border border-red-900 bg-red-950/50 p-4 text-center">
      <h1 className="mono mb-4 text-3xl">404</h1>
      <p className="text-lg font-bold text-red-500 uppercase">Page not found</p>
      <p className="mt-1 text-sm text-zinc-500">You shouldn&apos;t be there.</p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => back()}
          className="flex w-[120px] cursor-pointer items-center gap-2 border border-red-900 bg-red-950/50 px-4 py-2 transition-colors hover:bg-red-950"
        >
          <StepBack className="h-5 w-5" />
          <span className="uppercase">Back</span>
        </button>
        <Link href="/">
          <button className="flex w-[120px] cursor-pointer items-center gap-2 border border-red-900 bg-red-950/50 px-4 py-2 transition-colors hover:bg-red-950">
            <Home className="h-5 w-5" />
            <span className="uppercase">Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
