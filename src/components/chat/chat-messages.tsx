"use client";

import { useUsername } from "@/hooks/use-username";
import { client } from "@/lib/client";
import { PADDING } from "@/lib/consts";
import { useRealtime } from "@/lib/realtime-dash";
import { cn } from "@sglara/cn";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

function ChatMessages({ roomId }: { roomId: string }) {
  const username = useUsername();
  const { push } = useRouter();

  const { data: messages, refetch } = useQuery({
    queryKey: ["messages", roomId],
    queryFn: async () => {
      const response = await client.messages.get({ query: { roomId } });
      return response.data;
    },
  });

  useRealtime({
    channels: [roomId],
    events: ["chat.message", "chat.destroy"],
    onData: ({ event }) => {
      if (event === "chat.message") {
        refetch();
      }
      if (event === "chat.destroy") {
        push("/?destroyed=true");
      }
    },
  });

  return (
    <div
      className={cn(
        "overflox-y-auto scrollbar-thin flex-1 space-y-4 py-6",
        PADDING,
      )}
    >
      {messages?.messages.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <p className="text-center font-mono text-sm text-zinc-600">
            No messages yet, start the conversation.
          </p>
        </div>
      )}

      {messages?.messages.map((m) => (
        <div key={m.id} className="flex flex-col items-start">
          <div className="group max-w-4/5">
            <div className="mb-1 flex items-baseline gap-3">
              <span
                className={cn(
                  "text-xs font-bold",
                  m.sender === username ? "text-green-500" : "text-blue-500",
                )}
              >
                {m.sender === username ? "YOU" : m.sender}
              </span>
              <span className="text-[10px] text-zinc-600">
                {format(m.timestamp, "HH:mm")}
              </span>
            </div>
            <p className="text-sm leading-relaxed break-all text-zinc-300">
              {m.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
