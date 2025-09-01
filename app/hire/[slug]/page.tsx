'use client';

import FaqSection from "@/components/Homepage/faq";
import Image from "next/image";
import { useEffect, useState } from 'react';
import HireBy from "@/components/Homepage/hireby";
import DevelopersSlider from "@/components/Homepage/developer";
import { useParams } from 'next/navigation';
import HeroSection from "@/components/Hire/Hero";
import HireThroughOVE from "@/components/Hire/HireThroughOVE";
import Expertise from "@/components/Hire/Expertise";
import CTA from "@/components/Hire/CTA";
import WSF from "@/components/Hire/WhySearchFor";
import CTable from "@/components/Hire/CompairTable";
import Client from "@/components/Hire/Client";
import { fetchGraphQL } from "@/lib/graphqlClient";

type HireItem = {
  id: number;
  slug: string;
  title: { rendered: string };
  thumbnail: any;
  content?: { rendered: string };
  expertise?: any;
};


export default function Hire() {

    const params = useParams();
    const slug = params?.slug as string;

    const [Hire, setHire] = useState<HireItem | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        // Fetch GraphQL on the client
        (async () => {

          const QUERY = `
          {
            service(idType:SLUG,id:"${slug}"){
              title
              slug
              content
              featuredImage{
                node{
                  uri
                  sourceUrl
                  title
                }
              }
              expertise{
                title
                shortInformation
                qna{
                  question
                  answer
                }
              } 
            }
          }
        `;

        try {
          const data = await fetchGraphQL(QUERY);
          setHire(data.service);
        } catch (e) {
          console.error('GraphQL fetch failed', e);
        }
        })();
    }, [slug]);


    // return;

  // --- 404 FIRST: render not-found view when error indicates missing Hire
  if (error === "NOT_FOUND") {
    return (
      <section className="flex items-center justify-center min-h-[60vh] bg-gray-100 text-white px-4">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-red-500 tracking-widest">404</h1>
          <p className="mt-4 text-xl text-black">Page not found</p>
          <a
            href="/"
            className="mt-8 inline-block bg-oveblue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  // --- LOADING SKELETON while fetching (only when no error)
  if (loading && !Hire) {
    return (
      <section className="bg-gray-100 xl:h-max lg:flex gap-6 dark:bg-gray-800 text-white relative px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex lg:w-[60%] flex-col h-full lg:mt-6 justify-between gap-8 items-center md:items-start py-6">
          <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse" />
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-700 rounded animate-pulse w-full" />
            <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3" />
          </div>
          <div className="h-12 w-48 bg-gray-700 rounded-lg animate-pulse" />
          <div className="grid md:grid-cols-3 gap-2 w-full">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-700 p-4 rounded-xl border border-gray-600 drop-shadow-sm shadow-white animate-pulse">
                <div className="h-6 w-16 bg-gray-600 rounded mb-2" />
                <div className="h-3 w-28 bg-gray-600 rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[40%] lg:flex hidden relative mb-5 justify-center">
          <div className="z-30 flex flex-col justify-end">
            <div className="absolute border border-gray-600 z-40 bg-gray-700 bottom-0 end-0 p-4 rounded-xl shadow-sm drop-shadow animate-pulse w-56">
              <div className="h-5 w-24 bg-gray-600 rounded mb-2" />
              <div className="h-4 w-32 bg-gray-600 rounded mb-2" />
              <div className="h-3 w-20 bg-gray-600 rounded" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- GENERIC ERROR (not 404)
  if (error && error !== "NOT_FOUND") {
    return <p className="text-red-500 px-4 py-8">Error: {error}</p>;
  }

  // --- SUCCESS
  if (!Hire) return null; // safety

  // your existing page (unchanged, just add a couple of safe-optional-chains)
  return (
    <>
        <div className="relative 2xl:top-0">
            <HeroSection hire={Hire}/>
            <DevelopersSlider hire={Hire}/>
            <HireThroughOVE hire={Hire}/>
            <div className="relative">
                <div className="bg-lightblack">
                    <Image src="/assets/white.png" alt="bg" width={1000} height={1000} className="w-full" />
                </div>
                <Expertise hire={Hire?.expertise}/>
            </div>
            <div className="relative h-full bg-oveblue w-full">
                <div className="bg-white">
                    <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <CTA hire={Hire}/>
            </div>
            <div className="relative">
                <div className="bg-oveblue">
                    <Image src={'/assets/white.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                {/* why search for section */}
                <WSF hire={Hire}/>
            </div>
            <div className="relative blackgradiant">
                <div className="bg-white">
                    <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <CTable hire={Hire}/>
            </div>
            <div className="relative">
                <div className="bg-lightblack">
                    <Image src={'/assets/black.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <Client/>
            </div>
            <div className="py-12 bg-black">
                <HireBy/>
            </div>
            <div className="relative h-full bg-oveblue w-full">
                <div className="bg-black">
                    <Image src={'/assets/oveblue.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <CTA hire={Hire}/>
            </div>
            <div className="relative">
                <div className="bg-oveblue">
                    <Image src={'/assets/offWhite.png'} alt="compare" width={1000} height={1000} className="w-full"/>
                </div>
                <div className="relative">
                    <FaqSection/>
                </div>
            </div>
        </div>
    </>
  );
}
