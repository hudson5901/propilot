import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ProPilot - AIが最適な専門家チームを自動編成",
    template: "%s | ProPilot",
  },
  description:
    "AIがあなたの課題に最適な専門家チームを自動編成。税理士・司法書士・弁護士・社労士・行政書士をワンストップで。完全無料・最短30秒マッチング。",
  keywords: [
    "専門家マッチング",
    "税理士",
    "司法書士",
    "弁護士",
    "社労士",
    "行政書士",
    "AI",
    "ワンストップ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "ProPilot - AIが最適な専門家チームを自動編成",
    description:
      "税理士・司法書士・弁護士・社労士・行政書士をワンストップで。完全無料マッチング。",
    siteName: "ProPilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProPilot - AIが最適な専門家チームを自動編成",
    description: "税理士・司法書士・弁護士・社労士をワンストップで",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
