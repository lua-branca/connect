import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUA BLANCA CONNECT | 小規模事業者のAI活用実践パートナー",
  description: "小規模事業者のAI導入から運用定着まで継続的にサポート。課題の見える化から最適解提案、成果創出まで実践的に伴走します。",
  keywords: ["AI", "コンサルティング", "小規模事業者", "ビジネス", "効率化", "DX", "自動化", "課題解決"],
  authors: [{ name: "LUA BLANCA CONNECT" }],
  openGraph: {
    title: "LUA BLANCA CONNECT | 小規模事業者のAI活用実践パートナー",
    description: "小規模事業者のAI導入から運用定着まで継続的にサポート。課題の見える化から最適解提案、成果創出まで実践的に伴走します。",
    url: "https://lua-branca.jp",
    siteName: "LUA BLANCA CONNECT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LUA BLANCA CONNECT - 小規模事業者のAI活用実践パートナー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUA BLANCA CONNECT | 小規模事業者のAI活用実践パートナー",
    description: "小規模事業者のAI導入から運用定着まで継続的にサポート。課題の見える化から最適解提案、成果創出まで実践的に伴走します。",
    creator: "@lua_branca",
    images: ["/og-image.png"],
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ja">
      <body className={`${inter.className} antialiased`}>
        {gaId && <GoogleAnalytics ga_id={gaId} />}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
