"use client";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import { Bomb } from "lucide-react";

function DestroyButton({ roomId }: { roomId: string }) {
  const { mutate: destroyRoom } = useMutation({
    mutationFn: async () => {
      await client.room.delete(null, { query: { roomId } });
    },
  });

  return (
    <button
      onClick={() => destroyRoom()}
      className="group flex cursor-pointer items-center gap-2 rounded bg-zinc-800 px-3 py-1.5 text-xs font-bold text-zinc-400 uppercase transition-all hover:bg-red-600 hover:text-white disabled:opacity-50"
    >
      <span className="group-hover:animate-pulse">
        <Bomb className="h-5 w-5" />
      </span>
      <span className="hidden-small">Destroy now</span>
    </button>
  );
}

export default DestroyButton;
