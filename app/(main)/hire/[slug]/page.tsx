// app/hire/[slug]/page.tsx
import HirePageData from "@/components/HirePageGraphQL";
import { generateMetadataFromSeo } from "@/app/(main)/utils/seo";
import type { Metadata } from "next";
import RolePage from "@/components/Pages/RolePage";
import SkillPage from "@/components/Pages/SkillPage";
import { notFound } from "next/navigation";

// ✅ Metadata only
export async function generateMetadata({ params }: any) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  
  const data = await HirePageData({ slug });
  const seo = data?.seo;
  return generateMetadataFromSeo(seo || {});
}

// ✅ Page component fetches its own data
export default async function HirePage({ params }: any) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const data = await HirePageData({ slug });

  const category = data?.categories || "";

  if (category[0].toLowerCase() === "role") {
    return <RolePage PageData={data} />;
  } else if (category[0].toLowerCase() === "skill") {
    return <SkillPage PageData={data} />;
  }
}
