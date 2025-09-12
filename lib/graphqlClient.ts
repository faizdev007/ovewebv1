// lib/graphqlClient.ts
export async function fetchGraphQL(query: string, variables: any = {}) {
  const res = await fetch("https://admin.optimalvirtualemployee.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // (optional) ISR cache in Next.js
  });

  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.statusText}`);
  }

  const json = await res.json();
  return json.data;
}
