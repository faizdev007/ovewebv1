// app/hire/[slug]/page.tsx
import ServicePageData from "@/components/ServicePageGraphQL";
import { generateMetadataFromSeo } from "@/app/utils/seo";
import type { Metadata } from "next";
import Hire from "@/components/Pages/ServicePage";
// import PageData from "@/app/utils/GraphQl/PageData";

// ✅ Await params first
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // <-- ✅ await before using
  const data = await ServicePageData({ slug });
  const seo = data?.service?.seo;

  return generateMetadataFromSeo(seo || {});
}

export default async function HirePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ same fix here
  return <Hire slug={slug} />;
}
