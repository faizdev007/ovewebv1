'use client';
import Image from "next/image";
import React ,{ useEffect, useState } from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from "../Rating";



function SampleNextArrow(props:any) {
  const { onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-2 end-0 flex justify-end items-center'>
      <div
        className={`bg-oveblue/40 w-12 h-12 rounded-full !flex !justify-center !items-center hover:bg-oveblue/90 border-3 border-white cursor-pointer font-bold`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div className='absolute z-20 h-full top-0 p-2 start-0 flex justify-end items-center'>
      <div
        className={`bg-oveblue/40 w-12 h-12 rounded-full opacity-90 !flex !justify-center !items-center hover:!bg-blue-600 border-3 border-white cursor-pointer font-bold`}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 text-white drop-shadow-lg">
          <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

const demodata = [
  {title: 'Emily Johnson', slug: 'emily-johnson', content: '<p>Working with OVE allowed us to accelerate our p…s blended seamlessly with our in-house team.</p>\n', clientRating: {rating: 5}},
  {title: 'Arjun Mehta', slug: 'arjun-mehta', content: '<p>Hiring through OVE was a game-changer. The cost…as the developers’ expertise and commitment.</p>\n', clientRating: {rating: 5}},
  {title: 'Sophia Martinez', slug: 'sophia-martinez', content: '<p>The OVE team quickly understood our requirement…d our engineering team in weeks, not months.</p>\n', clientRating: {rating: 5}},
  {title: 'James Carter', slug: 'james-carter', content: '<p><span data-teams="true"><i>Hiring remote talent…ms, without the hiring headaches.</i></span></p>\n', clientRating: {rating: 5}},
  {title: 'Michael Roberts', slug: 'michael-roberts', content: '<p><span data-teams="true"><i>The developers feel …llent project delivery timelines.</i></span></p>\n', clientRating: {rating: 5}},
  {title: 'David Lee', slug: 'david-lee', content: '<p><span data-teams="true"><i>We scaled our engine…municative, and extremely skilled</i></span></p>\n', clientRating: {rating: 5}},
];

export default function TestimonialArea(ClientTestimonials:any) {
  
  const [expended, setExpanded] = useState<number | null>(null);
  
  const testimonials = ClientTestimonials?.ClientTestimonials ?? demodata;

    const toggle = (index: number | null = null) => {
      setExpanded(index === expended ? null : index);
    };

    const [settings, setSettings] = useState({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,  // Default value for larger screens
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    });

    useEffect(() => {
       const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1080) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 4 }));
            } else if (width >= 769) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 3 }));
            } else if (width >= 500) {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 2, arrows: true, dots: false }));
            } else {
                setSettings(prevSettings => ({ ...prevSettings, slidesToShow: 1, arrows: false, dots: true }));
            }
       };
   
       window.addEventListener('resize', handleResize);
       handleResize(); // Initial resize to set correct state
   
       return () => window.removeEventListener('resize', handleResize);
    }, []);

  return ( 
    <>
        <div className="relative">
            {settings ? 
            <Slider {...settings}>
            {testimonials.map((item:any, index:number) => ( 
                <div key={index} className="p-2">
                    <div className="bg-white text-black w-full min-h-[240] p-4 rounded-2xl border-2 border-oveblue drop-shadow-sm shadow-white">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                              <div className="relative w-14 h-14 overflow-hidden">
                                  {!item?.featuredImage ? 
                                    <span className="rounded-full aspect-[1/1] flex justify-center items-center bg-oveblue text-white font-bold">{item?.title?.split(" ").map((word: string) => word.charAt(0).toUpperCase()).join("")}</span>
                                    :
                                    <img src={item?.featuredImage?.sourceUrl} className="aspect-[1/1] object-contain rounded-full" alt={item?.featuredImage?.title}/>
                                  }
                              </div>
                              <div className="flex flex-col">
                                  <h3 className="font-bold">{item?.title}</h3>
                                  <span className="text-xs">{item?.designation}</span>
                              </div>
                          </div>
                          <div className="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mb-4 mt-2">
                          <Rating sizeN={4} rating={item?.rating}/>
                        </div>
                        <span className={`text-sm ${expended  !== index ? 'line-clamp-4 transition-all' : 'scale-100'}`} dangerouslySetInnerHTML={{ __html: item?.content }}/>
                        {item?.content && item.content.length > 200 ? (
                          <span
                            onClick={() => toggle(index)}
                            className="text-xs text-gray-500 block mt-2 cursor-pointer"
                          >
                            {expended !== index ? 'Read More.' : 'Show Less.'}
                          </span>
                        ) : null}
                    </div>
                </div>
            ))}
            </Slider>
            : <p>Loading...</p>
            }
        </div>
    </>
  );
}