import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
// import { Chatbot } from "@/components/chatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Kurghinyan - React & Next.js Developer",
  description:
    "Full-stack developer specializing in React, Next.js, and modern web technologies",
  generator: "Arthur Kurghinyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={null}>{children}</Suspense>
          {/* <Chatbot /> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
