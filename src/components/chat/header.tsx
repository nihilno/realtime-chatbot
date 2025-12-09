import { PADDING } from "@/lib/consts";
import { cn } from "@sglara/cn";
import CopyButton from "../ui/copy-button";
import TimeRemaining from "../ui/time-remaining";
import DestroyButton from "./destroy-button";

function Header({ roomId }: { roomId: string }) {
  return (
    <header
      className={cn(
        "flex items-center justify-between border-b border-zinc-800 bg-zinc-900/30 py-6",
        PADDING,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="line-clamp-1 flex flex-col">
          <span className="text-xs text-zinc-500 uppercase">Room ID</span>
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <span className="line-clamp-1 hidden font-bold text-green-500 sm:block">
              {roomId}
            </span>
            <div>
              <CopyButton />
            </div>
          </div>
        </div>

        <div className="h-8 w-px bg-zinc-800" />

        <div className="flex flex-col">
          <span className="text-xs text-zinc-500 uppercase">Self-Destruct</span>
          <TimeRemaining roomId={roomId} />
        </div>
      </div>
      <DestroyButton roomId={roomId} />
    </header>
  );
}

export default Header;
