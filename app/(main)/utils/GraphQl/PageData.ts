import { fetchGraphQL } from "@/lib/graphqlClient";

const PageData = async ({ slug }: { slug: string }) => {
  const QUERY = `
    query GetPage($slug: ID!) {
      page(id: $slug, idType: URI) {
        seo {
          title
          opengraphTitle
          opengraphSiteName
          opengraphDescription
          metaKeywords
          metaDesc
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
            step1 {
              stepTitle
              stepDescribtion
              stepImage {
                node {
                  title
                  sourceUrl
                }
              }
            }
            step2 {
              stepTitle
              stepDescribtion
              stepImage {
                node {
                  title
                  sourceUrl
                }
              }
            }
            step3 {
              stepTitle
              stepDescribtion
              stepImage {
                node {
                  title
                  sourceUrl
                }
              }
            }
            step4 {
              stepTitle
              stepDescribtion
              stepImage {
                node {
                  title
                  sourceUrl
                }
              }
            }
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

  const data = await fetchGraphQL(QUERY, { slug }); // ✅ pass slug as a variable
  return data;
};

export default PageData;
