import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fast, AI-powered PDF Summarizer",
  description: "Summarize your PDF easily with ClarityAI!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        {children}
        <Toaster
          richColors
          position="top-center"
          theme="light"
          toastOptions={{}}
        />
      </body>
    </html>
  );
}
