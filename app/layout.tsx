import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "晨煦的学习小屋 - 零基础八字入门",
  description: "欢迎来到晨煦的学习小屋，一起探索八字文化的奥秘。专业的八字命理入门教程，包含天干地支、五行理论、十神关系等核心内容。",
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
