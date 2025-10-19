import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "零基础八字入门 - 轻松学八字",
  description: "八字学习并不复杂，掌握三个核心概念就能入门。专业的八字命理入门教程，包含天干地支、五行理论、十神关系等核心内容。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
