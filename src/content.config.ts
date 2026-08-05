import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const CATEGORIES = [
  "Beginner Projects",
  "Tools & Materials",
  "Techniques & Skills",
  "Furniture & Storage",
  "General Guides",
] as const;

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    keywords: z.array(z.string()),
    offerKey: z.string(),
    category: z.enum(CATEGORIES),
  }),
});

export const collections = { articles };
