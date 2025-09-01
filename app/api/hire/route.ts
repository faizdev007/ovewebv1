// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

const WP = 'https://staging.optimalvirtualemployee.com.au'; // e.g. https://example.com

type hire = {
  id: number;
  slug: string;
  type: string;
  title: { rendered: string };
  content?: { rendered: string };
  featured_media: number;   // ✅ correct spelling
  roles: number[];          // usually array of term IDs
  _links?: any;
  acf?: any;
};

// optional: small helper
async function wp(path: string, init?: RequestInit) {
    // console.log(WP);
  const res = await fetch(`${WP}${path}`, {
    // cache: 'force-cache', // or 'no-store' for admin
    next: { revalidate: 300 }, // 5 min ISR-like caching
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
    //const page = url.searchParams.get('page') ?? '1';
  const developers = await wp(`/wp-json/wp/v2/developers?&_embed&_fields=id,slug,type,title,featured_media,roles,_links,acf`);
  return NextResponse.json(developers);
}
