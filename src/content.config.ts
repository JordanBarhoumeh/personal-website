import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    kind: z.string(),
    status: z.string().optional(),
    association: z.string().optional(),
    tags: z.array(z.string()),
    highlights: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
