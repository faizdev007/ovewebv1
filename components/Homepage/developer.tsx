'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Slider, { type Settings, type CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchGraphQL } from "@/lib/graphqlClient";

type GqlDeveloperNode = {
  id: string;
  title: string;
  slug: string;
  skills?: {nodes?: { name?:string | null; slug?: string | null }[] | null} | null;
  featuredImage?: { node?: { sourceUrl?: string | null } | null } | null;
  carddetails?: {
    skill?: string | null;
    previouslyAt?: {
      node?: {
        sourceUrl?: string | null;
      } | null;
      altText?: string | null;
      mediaDetails?: { width?: number | null; height?: number | null  } | null;
    } | null;
    shortDetail?: string | null;
  } | null;
  roles?: { nodes?: { name?: string | null; slug?: string | null }[] | null } | null;
};

type CardDev = {
  name: string;
  skills?: string[];
  image?: string;
  previous?: string;
  color?: string;
  roles?: string[];
  short?: string;
};

function SampleNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 h-full top-0 p-3 end-0 flex justify-end items-center"
      style={{ background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)' }}
    >
      <button
        type="button"
        aria-label="Next"
        className="bg-oveblue/40 w-12 h-12 rounded-full flex justify-center items-center hover:bg-oveblue/90 border border-white cursor-pointer font-bold"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="absolute z-20 h-full top-0 p-3 start-0 flex justify-start items-center"
      style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 100%)' }}
    >
      <button
        type="button"
        aria-label="Previous"
        className="bg-oveblue/40 w-12 h-12 rounded-full opacity-90 flex justify-center items-center hover:bg-blue-600 border border-white cursor-pointer font-bold"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default function DevelopersSlider({hire}:any) {

  const [developerList,setDeveloperList] = useState<CardDev[] | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  
  const baseSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    className: 'center',
    centerPadding: '60px',
    centerMode: true,
    pauseOnHover: true,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  useEffect(() => {
    // Fetch GraphQL on the client
    (async () => {
        const QUERY = `
        {
          developers(first: 12) {
            nodes {
              skills{
                nodes{
                  name
                  slug
                }
              }
              id
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
              carddetails {
                previouslyAt {
                  node {
                    altText
                    sourceUrl
                    title
                  }
                }
                shortDetail
              }
              roles(first: 3) {
                nodes { name slug }
              }
            }
          }
        }
      `;
      try {
        const data = await fetchGraphQL(QUERY);
        const nodes: GqlDeveloperNode[] = data?.developers?.nodes ?? [];

        // Map GraphQL → card shape your UI expects
        const mapped: CardDev[] = nodes.map((n) => ({
          name: n.title,
          skills: (n.skills?.nodes ?? []).map((s:any) => s?.name || '').filter(Boolean) as string[],
          image: n.featuredImage?.node?.sourceUrl ?? '',           // profile image
          previous: n.carddetails?.previouslyAt?.node?.sourceUrl ?? '',  // company logo
          roles: (n.roles?.nodes ?? []).map((t:any) => t?.name || '').filter(Boolean) as string[],
          color: '#3AA0FF',
          short: n.carddetails?.shortDetail ?? '',
        }));

        setDeveloperList(mapped.length ? mapped : []);
        setLoading(false);
      } catch (e) {
        console.error('GraphQL fetch failed', e);
        setDeveloperList([]); // avoid null crash
      }
    })();
  }, [hire?.service?.slug]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 2080) {
        setSettings({ ...baseSettings, slidesToShow: 9, slidesToScroll: 1 });
      } else if (width >= 1680) {
        setSettings({ ...baseSettings, slidesToShow: 7, slidesToScroll: 1 });
      } else if (width >= 1590) {
        setSettings({ ...baseSettings, slidesToShow: 6, slidesToScroll: 1 });
      } else if (width >= 1280) {
        setSettings({ ...baseSettings, slidesToShow: 5, slidesToScroll: 1 });
      } else if (width >= 1080) {
        setSettings({ ...baseSettings, slidesToShow: 4, slidesToScroll: 1 });
      } else if (width >= 769) {
        setSettings({ ...baseSettings, slidesToShow: 3, slidesToScroll: 1 });
      } else if (width >= 426) {
        setSettings({ ...baseSettings, slidesToShow: 2, slidesToScroll: 1 });
      } else if (width >= 350) {
        setSettings({ ...baseSettings, slidesToShow: 1, slidesToScroll: 1 });
      } else {
        setSettings({ ...baseSettings, slidesToShow: 1, slidesToScroll: 1, centerMode: false });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if(loading){
    return (
      <section className="bg-black dark:bg-gray-800 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      <Image
        loading="lazy"
        width={100}
        height={100}
        className="absolute hidden object-cover bottom-0 w-full start-0 end-0"
        src="/assets/cloudbg.webp"
        alt="cloudbg"
      />
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center text-white mb-12">
        Meet Our Developers
      </h2>

      <div className="relative rounded overflow-hidden mx-auto">
        <div className="slider-container relative z-10">
            <Slider {...settings}>
              {[...Array(10)].map((_, i) => (
                <div className="px-1 py-2" key={i}>
                  <div
                    className="bg-oveblue animate-pulse px-1 gap-4 flex flex-col justify-around mt-25 aspect-[1/1.2] text-white relative rounded-xl shadow-md"
                  >
                    {/* Avatar placeholder */}
                    <div className="relative w-2/3 mb-5 flex items-center justify-center aspect-[3/1] mx-auto">
                      <div className="overflow-hidden absolute -top-20 border border-gray-800 z-20 rounded-full aspect-[1/1]">
                        <div className="w-38 h-38 bg-gray-700 mx-auto rounded-full" />
                      </div>
                    </div>

                    {/* Content placeholders */}
                    <div className="p-2 flex flex-col gap-3">
                      <div className="space-y-2 text-center">
                        <div className="h-5 w-24 bg-gray-600 mx-auto rounded"></div>
                        <div className="h-4 w-32 bg-gray-700 mx-auto rounded"></div>
                      </div>

                      {/* Skills placeholder */}
                      <div className="flex flex-wrap w-full gap-1 h-[60px] items-center justify-center">
                        {[...Array(3)].map((_, j) => (
                          <span
                            key={j}
                            className="h-6 w-14 bg-gray-700 rounded-full"
                          ></span>
                        ))}
                      </div>

                      {/* Short description placeholder */}
                      <div className="h-16 bg-gray-700 rounded mx-4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
      </div>
    </section>
    );
  }

  return (
    <section className="bg-black dark:bg-gray-800 relative px-4 py-12 sm:px-6 lg:px-8 mx-auto">
      <Image loading="lazy" width={100} height={100}
             className="absolute hidden object-cover bottom-0 w-full start-0 end-0"
             src="/assets/cloudbg.webp" alt="cloudbg" />
      <h2 className="xl:text-6xl md:text-4xl text-3xl font-bold text-center text-white mb-12">
        Meet Our Developers
      </h2>

      <div className="relative rounded overflow-hidden mx-auto">
        <div className="slider-container relative z-10">
          {settings && developerList ? (
            <Slider {...settings}>
              {developerList.map((dev, index) => (
                <div key={index} className="px-1 py-2">
                  <div
                    className="bg-oveblue gap-4 flex flex-col justify-around mt-25 aspect-[1/1.2] text-white relative rounded-xl shadow-md hover:shadow-lg"
                    style={{ border: `3px solid ${dev.color || '#3AA0FF'}` }}
                  >
                    <div className="relative w-2/3 flex items-center justify-center aspect-[3/1] mx-auto">
                      <div className="overflow-hidden absolute -top-20 border border-gray-800 z-20 rounded-full aspect-[1/1]">
                        {/* Profile Image */}
                        {dev.image ? (
                          <img
                            loading="eager"
                            src={dev.image}
                            alt={dev.name}
                            width={300}
                            height={300}
                            decoding="async"
                            className="w-38 h-38 mx-auto object-cover transition-transform duration-300 hover:scale-105"
                          />
                        ) : (
                          <div className="w-38 h-38 mx-auto bg-gray-800" />
                        )}
                      </div>
                    </div>

                    <div className="p-2 flex flex-col gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-col text-center gap-0">
                          <h3 className="font-semibold text-xl truncate">{dev.name}</h3>
                          {dev?.roles && dev?.roles.map((items:any, index:number)=>(
                           <p key={index} className="text-sm text-white/80 truncate">{items}</p>
                          ))}
                        </div>
                        <div className='overflow-hidden'>
                          <div className="flex flex-wrap w-full gap-1 h-[60px] text-xs items-center justify-center">
                          {dev?.skills && dev?.skills.map((items:any, index:number)=>(
                            <span key={index} className='border border-gray-100 rounded-full px-2 py-1'>{items}</span>
                          ))}
                          </div>
                        </div>
                        <div className="hidden flex-col text-center">
                          <p className="text-white/60 mb-1 font-bold text-sm">PREVIOUSLY AT</p>
                          <div className="flex justify-center items-center h-12">
                            {dev.previous ? (
                              <img
                                loading="eager"
                                width={300}
                                height={48}
                                className="h-12 w-auto mb-2 object-contain"
                                src={dev.previous}
                                alt="Previous company logo"
                              />
                            ) : (
                              <div className="h-12 w-24 bg-white/10 mb-2" />
                            )}
                          </div>
                        </div>
                        <p className='h-16 line-clamp-3 flex text-sm text-center' title={dev?.short}>{dev?.short}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-white">
              <div>Loading...</div>
              <div className="loading-spinner" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
