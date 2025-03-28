import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageLayout from "@/components/layout/PageLayout";

const lufga = localFont({
  src: [
    {
      path: "./fonts/LufgaLight.ttf",
      weight: "300",
    },
    {
      path: "./fonts/LufgaRegular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/LufgaMedium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/LufgaSemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/LufgaBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-lufga",
});

export const metadata: Metadata = {
  title: "Edify App",
  description: "Edify - Stream Inspiring Sermons Anytime, Anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lufga.variable}  antialiased`}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
