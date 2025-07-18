import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUA BLANCA CONNECT | AI活用コンサルティング",
  description: "ビジネスの困りごとをAIでスピーディに解決。自社でAI運用できる体制を構築するコンサルティングサービス",
  keywords: ["AI", "コンサルティング", "ビジネス", "効率化", "DX", "自動化", "課題解決"],
  authors: [{ name: "LUA BLANCA CONNECT" }],
  openGraph: {
    title: "LUA BLANCA CONNECT | AI活用コンサルティング",
    description: "ビジネスの困りごとをAIでスピーディに解決。自社でAI運用できる体制を構築するコンサルティングサービス",
    url: "https://lua-branca.jp",
    siteName: "LUA BLANCA CONNECT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUA BLANCA CONNECT | AI活用コンサルティング",
    description: "ビジネスの困りごとをAIでスピーディに解決。自社でAI運用できる体制を構築するコンサルティングサービス",
    creator: "@lua_branca",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
