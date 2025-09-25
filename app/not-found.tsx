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
            </div>

            <div className="relative hidden select-none lg:block">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-100 via-white to-transparent blur-2xl dark:from-amber-500/10 dark:via-transparent"></div>
              <div className="mx-auto flex flex-col gap-10 aspect-[4/3] w-full max-w-xl items-center justify-center rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
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