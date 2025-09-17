import { fetchGraphQL } from "@/lib/graphqlClient";

type CategorySlug = {
  category: {
    hires: { nodes: { title: string; slug: string ; cardicon:{ icon: { node:{ sourceUrl:string; } } }}[] };
  } | null;
} | null;

// role base slugs
export async function RoleBaseSlug(number=7): Promise<CategorySlug> {
    const ROLE_BASE_SLUG_QUERY = `
        query RoleBaseSlug {
            category(id: "role", idType: SLUG) {
                hires(first:${number}) {
                    nodes {
                        title
                        slug
                        cardicon {
                            icon {
                                node {
                                sourceUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    const data = await fetchGraphQL(ROLE_BASE_SLUG_QUERY); // ✅ pass slug as a variable
    return data;
}


// skill base slugs
export async function SkillBaseSlug(number=7): Promise<CategorySlug> {
    const SKILL_BASE_SLUG_QUERY = `
        query SkillBaseSlug {
            category(id: "skill", idType: SLUG) {
                hires(first:${number}) {
                    nodes {
                        title
                        slug
                        cardicon {
                            icon {
                                node {
                                sourceUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    `;
    const data = await fetchGraphQL(SKILL_BASE_SLUG_QUERY);
    return data;
}