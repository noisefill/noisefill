import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Noisefill",
  description: "Listen to soundscapes and lo-fi music!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
        <audio id="audio" />
      </body>
    </html>
  );
}
