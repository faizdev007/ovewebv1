// app/hire/[slug]/page.tsx
import { generateMetadataFromSeo } from "@/app/utils/seo";
import ServicePageData from "@/components/ServicePageGraphQL";
import type { Metadata } from "next";
import Hire from "@/components/Pages/ServicePage";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await ServicePageData({ slug: params.slug });
  const seo = data?.service?.seo;

  return generateMetadataFromSeo(seo || {});
}

export default async function HirePage({ params }: { params: { slug: string } }) {
  return <Hire slug={params.slug} />;
}

