// app/page.tsx
import { fetchGraphQL } from "@/lib/graphqlClient";

export default async function HomePage() {
  const data = await fetchGraphQL(`
    {
      developers(first: 10) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          carddetails {
            designation
            previouslyAt {
              node {
                altText
                sourceUrl
                title
              }
            }
          }
          roles {
            nodes {
              name
              id
            }
          }
        }
      }
    }
  `);

  const devs = data?.developers?.nodes ?? [];

  console.log(devs);

  return (
    <div>
      <h1>Developers</h1>
      <ul>
        {devs.map((d: any) => (
          <li key={d.id}>
            <h2>{d.title}</h2>

            {/* Guard against null */}
            {d.carddetails?.designation && (
              <p><b>Designation:</b> {d.carddetails.designation}</p>
            )}

            {d.carddetails?.previouslyAt?.sourceUrl && (
              <img
                src={d.carddetails.previouslyAt.sourceUrl}
                alt={d.carddetails.previouslyAt.altText || d.title}
                width={320}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
