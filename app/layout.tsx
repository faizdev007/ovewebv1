import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import CookieBanner from "@/components/CookieConsentBanner";
import Analytics from "@/components/CookieConcentcheck";
import { generateMetadataFromSeo } from "./(main)/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default SEO data (fallback if a page doesn’t override)
const defaultSeo = {
  title: "Find and Hire Developers for Startups — Optimal Virtual Employee — Top 3% Remote Talent",
  metaDesc:
    "Find and hire pre-vetted remote developers from the top 3% global talent pool. Optimal Virtual Employee helps startups build reliable tech teams fast — affordable, flexible & scalable.",
  metaKeywords: "remote developers, hire developers, optimal virtual employee",
  opengraphUrl: "https://optimalvirtualemployee.com/",
  opengraphImage: {
    sourceUrl: "https://optimalvirtualemployee.com/og-image.jpg",
  },
  indexable: true,
};

export const metadata: Metadata = generateMetadataFromSeo(defaultSeo);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script for the head */}
        <>
          <Analytics />
        </>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} opensans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5K42N2M2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <CookieBanner/>
      </body>
    </html>
  );
}
