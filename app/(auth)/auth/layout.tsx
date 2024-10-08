import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "../../globals.css";
import { Suspense } from "react";
import { FiAlertOctagon } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeManager",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="en">
      <body className={`${inter.className} grid-pattern min-h-dvh`}>
        <NextUIProvider>
          <Suspense>
            <div className="bg-red-400 dark:bg-red-700 shadow text-sm text-white py-1.5 fixed top-0 right-0 left-0 z-50 font-semibold text-left flex items-start gap-1 px-4 justify-center">
              <FiAlertOctagon size={16} className="flex-shrink-0 mt-0.5" />
              Attention: The application is nowhere near to being completed,
              expect missing features and bugs
            </div>
            {children}
          </Suspense>
        </NextUIProvider>
      </body>
    </html>
  );
}
