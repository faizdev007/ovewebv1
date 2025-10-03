// app/utils/seo.ts

import type { Metadata } from "next";

interface SeoProps {
  title?: string;
  metaDesc?: string;
  metaKeywords?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphUrl?: string;
  opengraphImage?: {
    sourceUrl: string;
  };
  robots?: {
      index: boolean;
      follow: boolean;
  };
}

export function generateMetadataFromSeo(seoData: SeoProps): Metadata {
    let title = seoData.title ?? seoData.opengraphTitle ?? "Find and Hire Developers for Startups — Optimal Virtual Employee — Top 3% Remote Talent";
    let description = seoData.metaDesc ?? seoData.opengraphDescription ?? "Find and hire pre-vetted remote developers from the top 3% global talent pool. Optimal Virtual Employee helps startups build reliable tech teams fast — affordable, flexible & scalable.";
    return {
        title:title,
        description:description,
        openGraph: {
        title: seoData.opengraphTitle ?? title,
        description: seoData.opengraphDescription ?? description,
        },
        robots: {
            index: seoData?.robots?.index ?? true,
            follow: seoData?.robots?.follow ?? true,
        },
        other: {
            "google-site-verification" : "xqpfQdsNQE8sN0vLhE3D-UOWjlDCbyl36rzarrerKZ8",
        },
    };
}
