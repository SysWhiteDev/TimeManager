import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "../../globals.css";
import { Suspense } from "react";
import Navbar from "@/components/navigation/dashboard/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh`}>
        <NextUIProvider>
          <Suspense>
            <div className="flex h-dvh">
              <Navbar />
              <div className="overflow-y-auto w-full pt-4">{children}</div>
            </div>
          </Suspense>
        </NextUIProvider>
      </body>
    </html>
  );
}
