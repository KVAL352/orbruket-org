import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.string(),
    image: z.string().optional(),
    client: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const aktuelt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuelt' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { portfolio, aktuelt };
