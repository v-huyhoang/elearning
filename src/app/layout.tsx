import { ThemeProvider } from "@/components/common/ThemeProvider";
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học lập trình trực tuyến siêu cấp vip pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer autoClose={2000} className="text-sm font-medium" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
