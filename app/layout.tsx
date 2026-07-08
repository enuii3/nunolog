import type { Metadata } from "next";

import { InitialLoader } from "@/components/initial-loader";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ぬのろぐ",
  description: "フリーランスエンジニアのポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja">
        <body>
          <InitialLoader />
          <SiteHeader />
          <main id="top">{children}</main>
          <SiteFooter />
        </body>
      </html>
      <Analytics />
    </>
  );
}
