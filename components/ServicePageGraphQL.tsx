import GlobalNotFound from "@/app/global-not-found";
import { fetchGraphQL } from "@/lib/graphqlClient";
import { notFound } from "next/navigation";

export type ServicePageDataType = {
  seo?: {
    title?: string;
    metaDesc?: string;
    opengraphTitle?: string;
    opengraphDescription?: string;
  };
  HeroSection?: {
    title?:string;
    description?:string;
    formContext?:{
      formTitle?:string;
      formSubtitle?:string;
      formButtonText?:string;
    }
  };
  title?: string;
  slug?: string;
  featuredImage?: {
    uri?: string;
    sourceUrl?: string;
    title?: string;
  };
  categories?: string[];

  // Step cards
  stepCard?: {
    title?: string;
    subtitle?: string;
    cards?: {
      title?: string;
      info?: string;
      image?: string;
      svg?:string;
    }[];
  };

  // CTA
  cta?: {
    one?: {
      title?: string;
      buttonText?: string;
    };
    two?: {
      title?: string;
      buttonText?: string;
    };
    three?: {
      title?: string;
      buttonText?: string;
    };
  };

  // Hover card groups
  hoverCards?: {
    group1?: {
      title?: string;
      description?: string;
      cardText?: {
        title?:string;
        description?:string;
        bgImage?:string;
        pagelink?:string;
      }[];
    };
    group2?: {
      title?: string;
      description?: string;
      cardText?: string[];
    };
  };

  // Why choose us block
  whyChoose?: {
    sideImage?: string;
    title?: string;
    description?: string;
    title2?:string;
    description2?: string;
    features?: {
      qna?: {
        question?: string;
        answer?: string;
      }[];
    }[];
  };

  // Info cards
  infoCards?: {
    title?: string;
    description?: string;
    cards?: {
      title?: string;
      description?: string;
      svgicon?: string;
    }[];
  };

  // Cursor block
  cursorBlock?: {
    title?: string;
    subtitle?: string;
    icons?: {
      logo?: {
        cursor?: string[];
      };
    }[];
  };

  // Story block
  storyBlock?: {
    title?: string;
    description?: string;
    stories?: {
      image?: {
        cursor?: string;
      };
      title?: string;
      description?: string;
    }[];
  };

  // Client stories
  clientStories?: {
    title?: string;
    subtitle?: string;
    clients?: {
      videoUrl?: string;
      description?: string;
      rating?: number | string | null;
      clientName?: string;
      clientDesignation?: string;
    }[];
  };

  // FAQ
  faq?: {
    question: string;
    answer: string;
  }[];

  // Testimonials from clients
  testimonial?: {
    clients?: {
      title?: string;
      content?: string;
      designation?:string;
      rating?: number | string | null;
      featuredImage?: {
        sourceUrl?: string;
        title?: string;
      };
    }[];
  };
};

const ServciePageData = async ({ slug }: { slug: string }) => {
  const QUERY = `
    query GetServicePage($slug: ID!) {
      service(id: $slug, idType: SLUG) {
        categories {
          nodes {
            name
            slug
            clients {
              nodes {
                title
                content
                clientDesignation {
                  designation
                }
                clientRating {
                  rating
                }
                featuredImage {
                  node {
                    sourceUrl
                    title
                  }
                }
              }
            }
          }
        }
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
        }
        vaherosection {
          herotitle
          herodescription
          heroformsection {
            formtitle
            formsubtitle
            formbuttontext
          }
        }
        title
        slug
        featuredImage {
          node {
            uri
            sourceUrl
            title
          }
        }
        vastepcard {
          vasctitle
          vascsubtitle
          vasccard {
            cardtitle
            cardinfo
            cardimage {
              node {
                sourceUrl
                title
              }
            }
            cardsvg
          }
        }
        vacta {
          vacta1 {
            vactatitle
            vactabutton
          }
          vacta2 {
            vactatitle
            vactabutton
          }
          vacta3 {
            vactatitle
            vactabutton
          }
        }
        vahovercard {
          group1 {
            title
            description
            cardtext {
              title
              bgimage {
                node {
                  sourceUrl
                }
              }
              pagelink {
                title
                url
                target
              }
              description
            }
          }
          group2 {
            title
            description
            cardtext {
              title
            }
          }
        }
        vawcblock {
          vawcsideimage {
            node {
              sourceUrl
            }
          }
          vawctitle
          vawcdescription
          vawcfeatureblock {
            title
            description
            features {
              question
              answer
            }
          }
        }
        vainfocard {
          vaictitle
          vaicdescription
          vaiccards {
            title
            description
            svgicon
          }
        }
        vacursorblock {
          vacbtitle
          vacbsubtitle
          vacbicons {
            logo {
              node {
                sourceUrl
              }
            }
          }
        }
        vastoryblock {
          vasbtitle
          vasbdescription
          vasbstorycard {
            storyimage {
              node {
                sourceUrl
                altText
              }
            }
            title
            description
          }
        }
        vaclientstory {
          vacstitle
          vacssubtitle
          vacsclientcard {
            videourl
            description
            rating
            clientname
            clientdesignation
          }
        }
        serviceFaq {
          faqList {
            faqQuestion
            faqAnswer
          }
        }
      }
    }
  `;

  const raw = await fetchGraphQL(QUERY, { slug });

  if (!raw?.service) return notFound();

  const service = raw?.service;
  const clients = raw?.clients?.nodes || [];

  const firstCategory = service?.categories?.nodes?.[0];

  const structured: ServicePageDataType = {
    seo: service?.seo,
    title: service?.title,
    slug: service?.slug,
    featuredImage: service?.featuredImage?.node,
    categories: service?.categories?.nodes?.map((c: any) => c.name),
    HeroSection: service?.vaherosection,
    stepCard: {
      title: service?.vastepcard?.vasctitle,
      subtitle: service?.vastepcard?.vascsubtitle,
      cards: service?.vastepcard?.vasccard?.map((c: any) => ({
        title: c.cardtitle,
        info: c.cardinfo,
        image: c?.cardimage?.node?.sourceUrl,
        svg:c?.cardsvg,
      })),
    },

    cta: {
      one: {
        title: service?.vacta?.vacta1?.vactatitle,
        buttonText: service?.vacta?.vacta1?.vactabutton,
      },
      two: {
        title: service?.vacta?.vacta2?.vactatitle,
        buttonText: service?.vacta?.vacta2?.vactabutton,
      },
      three: {
        title: service?.vacta?.vacta3?.vactatitle,
        buttonText: service?.vacta?.vacta3?.vactabutton,
      },
    },

    hoverCards: {
      group1: {
        title: service?.vahovercard?.group1?.title,
        description: service?.vahovercard?.group1?.description,
        cardText: service?.vahovercard?.group1?.cardtext?.map((t: any) => (
          {
            title:t.title,
            description:t?.description,
            bgImage:t?.bgimage?.node?.sourceUrl,
            pagelink:t?.url,
          }
        )),
      },
      group2: {
        title: service?.vahovercard?.group2?.title,
        description: service?.vahovercard?.group2?.description,
        cardText: service?.vahovercard?.group2?.cardtext?.map((t: any) => t.title),
      },
    },

    whyChoose: {
      sideImage: service?.vawcblock?.vawcsideimage?.node?.sourceUrl,
      title: service?.vawcblock?.vawctitle,
      description: service?.vawcblock?.vawcdescription,
      title2: service?.vawcblock?.vawcfeatureblock?.title,
      description2: service?.vawcblock?.vawcfeatureblock?.description,
      features: service?.vawcblock?.vawcfeatureblock?.features?.map((f: any) => ({
        question: f.question,
        answer: f.answer,
      })),
    },

    infoCards: {
      title: service?.vainfocard?.vaictitle,
      description: service?.vainfocard?.vaicdescription,
      cards: service?.vainfocard?.vaiccards?.map((c: any) => ({
        title: c.title,
        description: c.description,
        svgicon: c.svgicon,
      })),
    },

    cursorBlock: {
      title: service?.vacursorblock?.vacbtitle,
      subtitle: service?.vacursorblock?.vacbsubtitle,
      icons: service?.vacursorblock?.vacbicons.map((t:any)=>( t?.logo?.node?.sourceUrl)),
    },

    storyBlock: {
      title: service?.vastoryblock?.vasbtitle,
      description: service?.vastoryblock?.vasbdescription,
      stories: service?.vastoryblock?.vasbstorycard?.map((s: any) => ({
        image: s.storyimage?.node?.sourceUrl,
        title: s.title,
        description: s.description,
      })),
    },

    clientStories: {
      title: service?.vaclientstory?.vacstitle,
      subtitle: service?.vaclientstory?.vacssubtitle,
      clients: service?.vaclientstory?.vacsclientcard?.map((c: any) => ({
        videoUrl: c.videourl,
        description: c.description,
        rating: c.rating,
        clientName: c.clientname,
        clientDesignation: c.clientdesignation,
      })),
    },

    faq: service?.serviceFaq?.faqList?.map((f: any) => ({
      question: f.faqQuestion,
      answer: f.faqAnswer,
    })),

    testimonial: {
      clients: firstCategory?.clients?.nodes?.map((c: any) => ({
        title: c.title,
        content: c.content,
        designation: c.clientDesignation?.designation,
        rating: c.clientRating?.rating,
        featuredImage: c.featuredImage?.node,
      })) || [],
    },
  };

  return structured;
};

export default ServciePageData;
