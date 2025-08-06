import EmailForm from "@/components/EmailForm";
import FaqSection from "@/components/Homepage/faq";
import Image from "next/image";
import React from 'react';

async function getPosts() {
  const res = await fetch('https://staging.optimalvirtualemployee.com.au/wp-json/wp/v2/posts');
  return res.json();
}

export default async function Contact()
{
    const posts = await getPosts();
    return(
        <>
            <div>
                <ul>
                    {posts.map((post: any) => (
                        <li key={post.id}>
                            {console.log(post.slug)}
                            {
                                post.jetpack_featured_media_url &&
                                <Image src={post.jetpack_featured_media_url} width={300} height={300} alt="image" className="h-auto w-auto object-cover"/>
                            }
                            <a href={`/blog/${post.slug}`}>
                                <h2>{post.title.rendered}</h2>
                                <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}