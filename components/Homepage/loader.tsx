'use client';

export default function Loader()
{
    return (
    <div className="bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex w-full items-center md:pt-8">
            <div className="w-full mx-auto h-full lg:grid grid-cols-2 items-center">
            
            {/* Left Side (text loader simulation) */}
            <div className="p-4 flex flex-col h-full justify-center gap-3 text-center md:text-start">
                <div className="flex flex-col gap-6">
                <div
                    className="h-8 bg-gray-200 rounded animate-pulse mx-auto md:mx-0"
                />
                <div
                    className="h-4 bg-gray-200 rounded animate-pulse"
                />
                <div
                    className="h-4 bg-gray-200 rounded animate-pulse"
                />
                </div>

                {/* CTA buttons placeholder */}
                <div className="flex gap-3 mt-6 md:flex-row flex-col items-center">
                <div className="h-10 w-32 bg-gray-300 rounded-lg animate-pulse" />
                <div className="h-10 w-32 bg-gray-300 rounded-lg animate-pulse" />
                </div>
            </div>

            {/* Right Side (video/image placeholder) */}
            <div className="p-4 flex items-start h-full">
                <div className="w-full aspect-video bg-gray-200 rounded-lg animate-pulse" />
            </div>

            </div>
        </div>

        {/* Trusted by logos */}
        <section className="pt-4 w-full text-center">
            <div className="mx-auto flex items-center overflow-hidden">
                
                {/* Left Static Text (skeleton for title + subtitle) */}
                <div className="min-w-[150px]">
                    <div className="h-6 w-24 bg-gray-300 rounded mx-auto animate-pulse mb-2" />
                    <div className="h-4 w-20 bg-gray-200 rounded mx-auto animate-pulse" />
                </div>

                {/* Logos skeleton row */}
                <div className="flex-1 pe-4 border-s-2 border-gray-700 overflow-hidden relative">
                <div className="relative flex-1 gap-4 overflow-hidden px-4 sm:px-6 lg:px-8 mx-auto">
                    <div className="flex w-max md:space-x-8 space-x-4">
                    {[...Array(12)].map((_, i) => (
                        <div
                        key={i}
                        className="h-16 w-32 bg-gray-200 border border-gray-300 rounded animate-pulse"
                        />
                    ))}
                    </div>
                </div>
                </div>

            </div>
        </section>
    </div>
  );
}