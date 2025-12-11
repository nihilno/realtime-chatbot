import Providers from "@/components/providers";
import { cn } from "@sglara/cn";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realtime Chat",
  description:
    "Anonymous, realtime chat with possiblity to destroy data anytime you wish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn("flex flex-col antialiased", jetbrainsMono.className)}
      >
        <main className="grid min-h-dvh place-items-center px-4">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
