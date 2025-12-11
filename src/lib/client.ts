import { App } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";

export const client = treaty<App>(
  "https://realtime-chatbot-seven.vercel.app",
).api;
