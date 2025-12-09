"use client";

import { useUsername } from "@/hooks/use-username";
import { client } from "@/lib/client";
import { PADDING } from "@/lib/consts";
import { cn } from "@sglara/cn";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";

function ChatInput({ roomId }: { roomId: string }) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const username = useUsername();

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async ({ text }: { text: string }) => {
      await client.messages.post(
        { sender: username, text },
        { query: { roomId } },
      );
      setInput("");
    },
  });

  return (
    <div
      className={cn("border-t border-zinc-800 bg-zinc-900/30 py-6", PADDING)}
    >
      <div className="flex gap-4">
        <div className="group relative flex-1">
          <span className="absolute top-1/2 left-4 -translate-y-1/2 animate-pulse text-2xl text-green-500">
            {">"}
          </span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && input.trim()) {
                inputRef.current?.focus();
                sendMessage({ text: input });
              }
            }}
            placeholder="Type message..."
            type="text"
            className="trnasition-colors w-full border border-zinc-800 bg-black py-3 pr-4 pl-9 text-sm text-zinc-100 placeholder:text-zinc-700 focus:border-zinc-700 focus:outline-none"
          />
        </div>
        <button
          onClick={() => {
            sendMessage({ text: input });
            inputRef.current?.focus();
          }}
          disabled={!input.trim() || isPending}
          type="submit"
          className="cursor-pointer bg-zinc-800 px-6 text-sm font-bold text-zinc-400 transition-all hover:text-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
