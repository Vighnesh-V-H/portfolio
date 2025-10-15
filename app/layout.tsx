import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vighnesh Hegde",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark antialiased'>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading</div>}>
          <div className=' overflow-x-hidden flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1 mt-10'>{children}</div>
            <SiteFooter />
          </div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
