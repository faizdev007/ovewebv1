import { fetchGraphQL } from "@/lib/graphqlClient";

export type HirePageDataType = {
  seo?: {
    title?: string;
    metaDesc?: string;
    opengraphTitle?: string;
    opengraphDescription?: string;
  };
  title?: string;
  slug?: string;
  content?: string;
  featuredImage?: {
    uri?: string;
    sourceUrl?: string;
    title?: string;
  };
  categories?: string[];

  cta?: {
    one?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
    };
    two?: {
      title?: string;
      subtitle?: string;
      buttonText?: string;
    };
  };

  hiringProcess?: {
    title?: string;
    steps?: {
      title?: string;
      description?: string;
      image?: {
        title?: string;
        sourceUrl?: string;
      };
    }[];
  };

  expertise?: {
    title?: string;
    description?: string;
    qna?: {
      question: string;
      answer: string;
    }[];
  };

  whyHire?: {
    title?: string;
    description?: string;
    image?: {
      sourceUrl?: string;
      title?: string;
    };
    qna?: {
      question: string;
      answer: string;
    }[];
  };

  faq?: {
    question: string;
    answer: string;
  }[];

  priceTable?: {
    title?: string;
    subtitle?: string;
    heading: string[];
    rows: string[][];
  };

  testimonial?: {
    title?: string;
    clients?: {
      title?: string;
      slug?: string;
      content?: string;
      rating?: number | string | null;
      featuredImage?: {
        sourceUrl?: string;
        title?: string;
      };
    }[];
  };
};


const HirePageData = async ({ slug }: { slug: string }) => {
  const QUERY = `
    query GetHirePage($slug: ID!) {
      hire(id: $slug, idType: SLUG) {
        categories {
          nodes {
            name
          }
        }
        seo {
          title
          metaDesc
          opengraphTitle
          opengraphDescription
        }
        title
        slug
        content
        featuredImage {
          node {
            uri
            sourceUrl
            title
          }
        }
        cta {
          ctaOneContent {
            ctaTitle
            ctaSubtitle
            ctaButtonText
          }
          ctaTwoContent {
            ctaTitle
            ctaSubtitle
            ctaButtonText
          }
        }
        hiringProcess {
          hiring_process_title
          hiringProcessSteps {
            step1 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step2 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step3 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
            step4 { stepTitle stepDescribtion stepImage { node { title sourceUrl } } }
          }
        }
        expertise {
          expertiseTitle
          expertiseDescription
          expertiseQna {
            question
            answer
          }
        }
        whyHireFormOve {
          whyHireTitle
          whyHireDiscription
          whyHireImage {
            node {
              sourceUrl
              title
            }
          }
          whyHireQna {
            question
            answer
          }
        }
        serviceFaq {
          faqList {
            faqQuestion
            faqAnswer
          }
        }
        priceTable {
          tableTitle
          tableSubtitle
          tableHeading {
            heading1
            heading2
            heading3
            heading4
            heading5
            heading6
          }
          tableRow {
            tableData {
              data1
              data2
              data3
              data4
              data5
              data6
            }
          }
        }
        testimonial {
          testimonialTitle
        }
      }
      clients {
        nodes {
          title
          slug
          content
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
  `;

  const raw = await fetchGraphQL(QUERY, { slug });
  const hire = raw?.hire;
  const clients = raw?.clients?.nodes || [];

  const structured:HirePageDataType = {
    seo: hire?.seo,
    title: hire?.title,
    slug: hire?.slug,
    content: hire?.content,
    featuredImage: hire?.featuredImage?.node,
    categories: hire?.categories?.nodes?.map((c: any) => c.name),

    cta: {
      one: {
        title: hire?.cta?.ctaOneContent?.ctaTitle,
        subtitle: hire?.cta?.ctaOneContent?.ctaSubtitle,
        buttonText: hire?.cta?.ctaOneContent?.ctaButtonText,
      },
      two: {
        title: hire?.cta?.ctaTwoContent?.ctaTitle,
        subtitle: hire?.cta?.ctaTwoContent?.ctaSubtitle,
        buttonText: hire?.cta?.ctaTwoContent?.ctaButtonText,
      },
    },

    hiringProcess: {
      title: hire?.hiringProcess?.hiring_process_title,
      steps: Object.values(hire?.hiringProcess?.hiringProcessSteps || {}).map(
        (step: any) => ({
          title: step?.stepTitle,
          description: step?.stepDescribtion,
          image: step?.stepImage?.node,
        })
      ),
    },

    expertise: {
      title: hire?.expertise?.expertiseTitle,
      description: hire?.expertise?.expertiseDescription,
      qna: hire?.expertise?.expertiseQna || [],
    },

    whyHire: {
      title: hire?.whyHireFormOve?.whyHireTitle,
      description: hire?.whyHireFormOve?.whyHireDiscription,
      image: hire?.whyHireFormOve?.whyHireImage?.node,
      qna: hire?.whyHireFormOve?.whyHireQna || [],
    },

    faq: hire?.hireFaq?.faqList?.map((f: any) => ({
      question: f.faqQuestion,
      answer: f.faqAnswer,
    })),

    priceTable: {
      title: hire?.priceTable?.tableTitle,
      subtitle: hire?.priceTable?.tableSubtitle,
      heading: Object.values(hire?.priceTable?.tableHeading || {}),
      rows:
        hire?.priceTable?.tableRow?.map((r: any) =>
          Object.values(r?.tableData || {})
        ) || [],
    },

    testimonial: {
      title: hire?.testimonial?.testimonialTitle,
      clients: clients.map((c: any) => ({
        title: c.title,
        slug: c.slug,
        content: c.content,
        rating: c.clientRating?.rating,
        featuredImage: c.featuredImage?.node,
      })),
    },
  };
  return structured;
};

export default HirePageData;
