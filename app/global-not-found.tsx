// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Image from 'next/image'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-100 text-neutral-900 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-400/10"></div>
            <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-400/10"></div>
          </div>

          <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="inline-block h-2 w-2 rounded-full bg-oveblue"></span>
                404 — Page not found
              </span>

              <h1 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl dark:text-white">
                We can’t find that page.
              </h1>
              <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
                The link may be outdated or the page was moved. Try searching, or jump to one of our most requested B2B pages below.
              </p>

              <form action="/search" method="GET" role="search" aria-label="Site search"
                    className="mt-6 hidden w-full items-center gap-2">
                <input
                  type="search"
                  name="q"
                  placeholder="Search developers, services, case studies…"
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-800" />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 active:scale-[0.99] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                  Search
                </button>
              </form>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/" className="inline-flex items-center justify-center rounded-xl border-3 border-oveblue px-4 py-3 text-sm font-medium text-oveblue hover:bg-blue-700 hover:text-white">
                  Back to Home
                </a>
                <a href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-oveblue px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 active:scale-[0.99]">
                  Talk to Sales
                </a>
                <a href="/about-us" className="inline-flex items-center justify-center rounded-xl border-3 border-oveblue px-4 py-3 text-sm font-medium text-oveblue hover:bg-blue-700 hover:text-white">
                  About Us
                </a>
              </div>

              <ul className="mt-6 grid gap-2 text-sm text-neutral-600 dark:text-neutral-400 sm:grid-cols-2">
                <li><a href="/about-us" className="underline hidden hover:no-underline">About our team</a></li>
                <li><a href="/case-studies" className="underline hidden hover:no-underline">Customer success &amp; case studies</a></li>
                <li><a href="/pricing" className="underline hidden hover:no-underline">Pricing &amp; engagement models</a></li>
                <li><a href="mailto:sales@yourdomain.com" className="underline hidden hover:no-underline">Report a broken link</a></li>
              </ul>
            </div>

            <div className="relative hidden select-none lg:block">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-100 via-white to-transparent blur-2xl dark:from-amber-500/10 dark:via-transparent"></div>
              <div className="mx-auto flex flex-col gap-10 aspect-[4/3] w-full max-w-xl items-center justify-center rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                {/* <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" className="h-40 w-56" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="16" className="text-neutral-200 dark:text-neutral-700">
                    <path d="M55 140V85h-30l60-65v40h30l-60 80z"></path>
                    <circle cx="200" cy="80" r="40"></circle>
                    <path d="M345 140V85h-30l60-65v40h30l-60 80z"></path>
                  </g>
                  <text x="200" y="150" textAnchor="middle" className="fill-current text-neutral-400 dark:text-neutral-500" fontSize="18">
                    404 — Not Found
                  </text>
                </svg> */}
                <Image src={"/assets/logo.webp"} width={500} height={500} className='h-20 w-auto' alt="OVE" />
                <text x="200" y="150" textAnchor="middle" className="fill-current text-neutral-400 dark:text-neutral-500 font-bold" fontSize="18">
                  404 — Not Found
                </text>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}