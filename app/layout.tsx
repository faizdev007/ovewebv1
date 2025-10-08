
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMetadataFromSeo } from "./(main)/utils/seo";
import Script from "next/script";

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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optimal Virtual Employee",
    "alternateName": "OVE",
    "url": "https://www.optimalvirtualemployee.com/",
    "logo": "https://www.optimalvirtualemployee.com/logo.png",
    "description": "Optimal Virtual Employee helps businesses scale with expert remote talent across AI, Machine Learning, Python, React, Node.js, Laravel, PHP, cloud technologies, and more. We connect companies with top developers to build innovative and future-ready solutions.",
    "foundingDate": "2012",
    "founder": [
      {
        "@type": "Person",
        "name": "Dharmesh Shah",
        "jobTitle": "Joint Managing Director",
        "url": "https://www.linkedin.com/in/dharmesh-shah-linkedin-profile/",
        "image": "https://www.optimalvirtualemployee.com/images/Dharmesh-shah.jpg"
      },
      {
        "@type": "Person",
        "name": "Shantnu Dublish",
        "jobTitle": "Joint Managing Director",
        "url": "https://www.linkedin.com/in/shantanu-linkedin-profile/",
        "image": "https://www.optimalvirtualemployee.com/images/Shantnu-Dublish.jpg"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61489921411",
      "contactType": "customer service",
      "areaServed": [
        "ua","bg","pl","ro","cz","tr","es","it","gr","pt","lt","lv","cr","ba","ee","md","al","mk","si","sk","hu","me","cy","ad","mt","br","ag","pe","cl","gt","ec","bo","ht","do","hn","py","sv","cr","pa","uy",
        "US","AU","GB","CA","SG","DE","AE"
      ],
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://www.facebook.com/Optimal-virtual-Employee-2093585584194627/",
      "https://www.linkedin.com/company/optimal-virtual-employee-ove/",
      "https://twitter.com/OptimalVE"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ GTM script */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K42N2M2');
          `}
        </Script>
        {/* ✅ Global Google Tag (gtag.js) */}
        <Script
          id="google-ads-global"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-5K42N2M2"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-5K42N2M2');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} opensans antialiased scroll-smooth`}
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
      </body>
    </html>
  );
}
