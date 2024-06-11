import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExLenses",
  description: "Project for CSC 484!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "w-full h-screen bg-[#f3f3f3] flex items-center justify-center")}>
        {children}
      </body>
    </html>
  );
}
