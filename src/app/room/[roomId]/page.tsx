import ChatInput from "@/components/chat/chat-input";
import ChatMessages from "@/components/chat/chat-messages";
import Header from "@/components/chat/header";

export default async function RoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  const { roomId } = await params;

  return (
    <section className="flex h-screen max-h-screen w-full flex-col overflow-hidden">
      <Header roomId={roomId} />
      <ChatMessages roomId={roomId} />
      <ChatInput roomId={roomId} />
    </section>
  );
}
