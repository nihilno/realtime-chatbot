"use client";

import { useUsername } from "@/hooks/use-username";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

function Welcome() {
  const searchParams = useSearchParams();
  const isDestroyed = searchParams.get("destroyed") === "true";
  const error = searchParams.get("error");

  const { push } = useRouter();
  const { mutate: createRoom } = useMutation({
    mutationFn: async () => {
      const response = await client.room.create.post();

      if (response.status === 200) {
        push(`/room/${response.data?.roomId}`);
      }
    },
  });

  const username = useUsername();

  return (
    <section className="w-full max-w-md space-y-8 text-zinc-500!">
      {isDestroyed && (
        <div className="border border-red-900 bg-red-950/50 p-4 text-center">
          <p className="text-sm font-bold text-red-500 uppercase">
            Room destroyed
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            All messages were permanently deleted.
          </p>
        </div>
      )}
      {error === "room-not-found" && (
        <div className="border border-red-900 bg-red-950/50 p-4 text-center">
          <p className="text-sm font-bold text-red-500 uppercase">
            Room not found
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            This room may have expired or never existed.
          </p>
        </div>
      )}
      {error === "room-full" && (
        <div className="border border-red-900 bg-red-950/50 p-4 text-center">
          <p className="text-sm font-bold text-red-500 uppercase">Room full</p>
          <p className="mt-1 text-xs text-zinc-500">
            This room is at maximum capacity.
          </p>
        </div>
      )}

      <div className="mb-12 space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-green-500">
          {">"}private_chat
        </h1>
        <p>A private, self-destructing chat room.</p>
      </div>

      <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="flex items-center">Your Identity</label>
            <div className="flex items-center gap-3">
              <div className="flex-1 border border-zinc-800 bg-zinc-950 p-3 font-mono text-sm text-zinc-400">
                {username}
              </div>
            </div>
          </div>
          <button
            onClick={() => createRoom()}
            className="mt-2 w-full cursor-pointer bg-zinc-100 p-3 text-sm font-bold tracking-wider text-black uppercase transition-colors hover:bg-zinc-50 disabled:opacity-50"
          >
            Create secure room
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
