export const CATEGORY_SLUGS: Record<string, string> = {
  "Beginner Projects": "beginner-projects",
  "Tools & Materials": "tools-materials",
  "Techniques & Skills": "techniques-skills",
  "Furniture & Storage": "furniture-storage",
  "General Guides": "general-guides",
};

export function categorySlug(category: string): string {
  return CATEGORY_SLUGS[category] ?? category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
