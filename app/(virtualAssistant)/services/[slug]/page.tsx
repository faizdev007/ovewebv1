// app/hire/[slug]/page.tsx
import { generateMetadataFromSeo } from "@/app/(main)/utils/seo";
import ServicePage from "@/components/Pages/ServicePage";
import ServciePageData from "@/components/ServicePageGraphQL";
import { notFound } from "next/navigation";

// ✅ Metadata only
export async function generateMetadata({ params }: any) {
  const awaitedParams = await params;
  
  const { slug } = awaitedParams;
  
  const data = await ServciePageData({ slug });

  const seo = data?.seo;

  return generateMetadataFromSeo(seo || {});
}

// ✅ Page component fetches its own data
export default async function ServicesPage({ params }: any) {
  const awaitedParams = await params;
  
  const { slug } = awaitedParams;

  const data = await ServciePageData({ slug });

  return <ServicePage pageData={data}/>
}
