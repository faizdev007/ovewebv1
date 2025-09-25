'use client';
import React, { useEffect, useState } from "react";
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

const DefaultData = [
    {
        "videoUrl": "https://hire-ove.s3.ap-south-1.amazonaws.com/Jenny+Junkeer.mp4",
        "description": "<p>Jenny partnered with <em data-start=\"196\" data-end=\"222\">Optimal Virtual Employee</em> to streamline operations and scale her business with efficiency. With the support of our skilled virtual team, Intent was able to save valuable time, focus on growth strategies, and achieve smoother project execution. Jenny’s story is a testament to how the right virtual support can drive business success.</p>\n",
        "rating": 4.5,
        "clientName": "Jenny Junkeer",
        "clientDesignation": "CEO of Intent"
    },
    {
        "videoUrl": "https://hire-ove.s3.ap-south-1.amazonaws.com/Mark+Reisinger.mp4",
        "description": "<p>Mark partnered with <em data-start=\"198\" data-end=\"224\">Optimal Virtual Employee</em> to streamline Web Zulu’s operations and improve efficiency. With our dedicated support, his team was able to save valuable time, focus on client needs, and deliver projects with greater consistency and speed.</p>\n",
        "rating": 5,
        "clientName": "Mark Reisinger",
        "clientDesignation": "MD, Web Zulu"
    },
    {
        "videoUrl": "https://hire-ove.s3.ap-south-1.amazonaws.com/Matt+Lonergan.mp4",
        "description": "<p>For Matt, finding the right balance between strategy and execution was key. By working with our virtual experts, PMO PRO gained reliable operational support, allowing him to dedicate more time to growth strategies and client success.</p>\n",
        "rating": 5,
        "clientName": "Matt Lonergan",
        "clientDesignation": "CEO, PMO PRO"
    },
    {
        "videoUrl": "https://hire-ove.s3.ap-south-1.amazonaws.com/Matthew+Clews.mp4",
        "description": "<p>Matthew leveraged our virtual assistance to strengthen Sea Side Media’s workflow and scale operations without the overhead of a full in-house team. This partnership helped his business achieve smoother processes, better productivity, and consistent results.</p>\n",
        "rating": 3.5,
        "clientName": "Matthew Clews",
        "clientDesignation": "MD, Sea Side Media"
    }
]


const ClientSuccessStories = (ClientStories:any) => {

    const ClientsStories = ClientStories?.ClientStories?.clients ?? DefaultData;

    const [settings, setSettings] = useState({
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,  // Default value for larger screens
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
            if (width >= 500) {
                setSettings(prevSettings => ({ ...prevSettings, arrows: true, dots: false }));
            } else {
                setSettings(prevSettings => ({ ...prevSettings, arrows: false, dots: true }));
            }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial resize to set correct state
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <section className="pt-12 flex flex-col gap-6 relative px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Main Header */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-oveblue/70">
                        { ClientStories?.ClientStories?.title ?? "Industries We've Served"}
                    </h2>
                    <div>
                        <span dangerouslySetInnerHTML={{__html:ClientStories?.ClientStories?.subtitle ?? "In today's fast-paced business environment, efficiency and cost-effectiveness are paramount. Many businesses, from startups to established enterprises, are turning to virtual assistants (VAs) to streamline operations, reduce overhead, and free up valuable time for core business activities. However, the quality and reliability of VA services can vary significantly."}}/>
                    </div>
                </div>
                {settings ? 
                <Slider {...settings}>
                {ClientsStories.map((item:any, index:number) => ( 
                    <div className="py-6 px-2">
                        <div key={index} className="flex border md:divide-x divide-y md:divide-y-0 flex-col md:flex-row mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Left: Video Section */}
                            <div className="lg:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4">
                                <video
                                className="aspect-video w-full h-full rounded-lg object-cover"
                                autoPlay
                                controls
                                muted
                                playsInline
                                loop
                                // poster="/video-poster.jpg"
                                >
                                <source
                                    src={item?.videoUrl}
                                    title={item?.clientName}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                                </video>
                            </div>
                            {/* Right: Information Section */}
                            <div className="lg:w-1/2 w-full justify-between flex flex-col p-3">
                                <div className="text-gray-600 text-lg mb-4 max-h-58 overflow-auto">
                                    <span dangerouslySetInnerHTML={{__html:item?.description ?? "Discover how our virtual assistance services have transformed businesses. Watch real stories from our satisfied clients and learn how we can help you achieve your goals."}}/>    
                                </div>
                                <div className="">
                                  <Rating rating={item?.rating}/>
                                  <h2 className="my-2 font-bold text-lg">{item?.clientName}</h2>
                                  <h3 className="text-gray-600 font-bold">{item?.clientDesignation}</h3>
                                </div>
                                {/* <ul className="list-disc hidden list-inside text-gray-700 space-y-2">
                                    <li>Improved productivity and efficiency</li>
                                    <li>Cost-effective solutions</li>
                                    <li>Personalized support for every client</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
                : <p>Loading...</p>
                }
        </section>
    );
};

export default ClientSuccessStories;