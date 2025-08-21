'use client';

import Image from 'next/image';

export default function HowItWorks() {
  return (
    <main className="bg-black text-white">
      <div className="mx-auto container md:max-w-5xl px-4 py-10 md:py-14">
        {/* Top intro block */}
        <section className="grid justify-center gap-5 items-start">
          {/* Avatar */}
          <div className="hidden justify-center">
            <div className="relative w-full h-full aspect-[1/1]">
              <Image
                src={'/assets/hire/howitwork.webp'} // put your image in public/person.jpg
                alt="Person"
                fill
                className="rounded-full object-container h-auto w-auto ring-4 ring-white/10"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className='flex flex-col justify-center text-center h-full gap-2'>
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-[#2F6FFF]"></span>
              <span className="text-lg tracking-widest md:text-2xl lg:text-4xl text-white font-bold">HOW IT WORKS</span>
            </div>
            <h2 className="mt-2 text-lg font-semibold">Delivering Value Through Our Services</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
              incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation.
            </p>
          </div>
        </section>

        {/* Big heading */}
        <h3 className="mt-12 md:mt-16 text-xl md:text-2xl text-center font-extrabold uppercase tracking-wide">
          How to hire a full stack developer through
          <br className="hidden md:block" />
          Optimal Virtual Employee
        </h3>

        {/* STEP 01 */}
        <section className="mt-10 md:mt-12 grid gap-8 md:grid-cols-2 items-center">
          {/* Graphic (left) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* main circle */}
              <div className="h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-neutral-700/70 ring-8 ring-[#2F6FFF]" />

              {/* small connector puck */}
              <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-neutral-600 ring-4 ring-[#2F6FFF]" />

              {/* step badge */}
              <div className="absolute right-[-22%] top-[30%] flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg">
                <div className="text-center leading-tight">
                  <div className="text-[10px] font-semibold tracking-widest text-neutral-500">STEP</div>
                  <div className="text-sm font-extrabold">01</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy (right) */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-[#2F6FFF]" />
              <span className="text-lg tracking-widest md:text-2xl text-white font-bold">HOW IT WORKS</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Lorem ipsum amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
              dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>
        </section>

        {/* STEP 02 (mirrored) */}
        <section className="mt-10 md:mt-12 grid gap-8 md:grid-cols-2 items-center">
          {/* Copy (left on desktop) */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-[#2F6FFF]" />
              <span className="text-lg tracking-widest md:text-2xl text-white font-bold">HOW IT WORKS</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Lorem ipsum amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
              dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>

          {/* Graphic (right on desktop) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-neutral-700/70 ring-8 ring-[#2F6FFF]" />
              <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-neutral-600 ring-4 ring-[#2F6FFF]" />
              <div className="absolute left-[-22%] top-[30%] flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg">
                <div className="text-center leading-tight">
                  <div className="text-[10px] font-semibold tracking-widest text-neutral-500">STEP</div>
                  <div className="text-sm font-extrabold">02</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 01 */}
        <section className="mt-10 md:mt-12 grid gap-8 md:grid-cols-2 items-center">
          {/* Graphic (left) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* main circle */}
              <div className="h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-neutral-700/70 ring-8 ring-[#2F6FFF]" />

              {/* small connector puck */}
              <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-neutral-600 ring-4 ring-[#2F6FFF]" />

              {/* step badge */}
              <div className="absolute right-[-22%] top-[30%] flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg">
                <div className="text-center leading-tight">
                  <div className="text-[10px] font-semibold tracking-widest text-neutral-500">STEP</div>
                  <div className="text-sm font-extrabold">03</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy (right) */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-[#2F6FFF]" />
              <span className="text-lg tracking-widest md:text-2xl text-white font-bold">HOW IT WORKS</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Lorem ipsum amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
              dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>
        </section>

        {/* STEP 02 (mirrored) */}
        <section className="mt-10 md:mt-12 grid gap-8 md:grid-cols-2 items-center">
          {/* Copy (left on desktop) */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-5 rounded-full bg-[#2F6FFF]" />
              <span className="text-lg tracking-widest md:text-2xl text-white font-bold">HOW IT WORKS</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Lorem ipsum amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
              dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>

          {/* Graphic (right on desktop) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-neutral-700/70 ring-8 ring-[#2F6FFF]" />
              <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-neutral-600 ring-4 ring-[#2F6FFF]" />
              <div className="absolute left-[-22%] top-[30%] flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg">
                <div className="text-center leading-tight">
                  <div className="text-[10px] font-semibold tracking-widest text-neutral-500">STEP</div>
                  <div className="text-sm font-extrabold">04</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
