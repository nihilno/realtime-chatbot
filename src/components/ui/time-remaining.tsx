"use client";

import { client } from "@/lib/client";
import { formatTimeRemaining } from "@/lib/utils";
import { cn } from "@sglara/cn";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function TimeRemaining({ roomId }: { roomId: string }) {
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const { data: ttlData } = useQuery({
    queryKey: ["ttl", roomId],
    queryFn: async () => {
      const response = await client.room.ttl.get({ query: { roomId } });
      return response.data;
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (ttlData?.ttl !== undefined) setTimeRemaining(ttlData.ttl);
  }, [ttlData]);

  useEffect(() => {
    if (timeRemaining === null || timeRemaining < 0) return;
    if (timeRemaining === 0) router.push("/?destroyed=true");

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, router]);

  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm font-bold",
        timeRemaining !== null && timeRemaining < 60
          ? "text-red-500"
          : "text-amber-500",
      )}
    >
      {timeRemaining !== null ? formatTimeRemaining(timeRemaining) : "--:--"}
    </span>
  );
}

export default TimeRemaining;
