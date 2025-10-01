// app/hire/[slug]/page.tsx
import { generateMetadataFromSeo } from "@/app/(main)/utils/seo";
import GlobalNotFound from "@/app/global-not-found";
import ServicePage from "@/components/Pages/ServicePage";
import ServciePageData from "@/components/ServicePageGraphQL";
import { notFound } from "next/navigation";

// ✅ Metadata only
export async function generateMetadata({ params }: any) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  
  const data = await ServciePageData({ slug });
  if (!data) {
    notFound(); // 👈 ensures 404 metadata too
  }
  const seo = data?.seo;
  return generateMetadataFromSeo(seo || {});
}

// ✅ Page component fetches its own data
export default async function ServicesPage({ params }: any) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const data = await ServciePageData({ slug });

  const category = data?.categories || "";

  return <ServicePage pageData={data}/>
  
}
