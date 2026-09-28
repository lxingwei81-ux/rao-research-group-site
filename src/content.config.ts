import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    image: z.string().optional(),
    question: z.string(),
    approach: z.string(),
    materials_devices: z.string(),
    application: z.string(),
    representative_publications: z.array(z.string()).default([]),
    published: z.boolean().default(false),
    order: z.number().default(999)
  })
});

const people = defineCollection({
  loader: glob({ base: './src/content/people', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['Principal Investigator', 'Postdoctoral Fellows', 'PhD Students', 'Research Staff', 'Visiting Researchers', 'Alumni']),
    photo: z.string().optional(),
    bio: z.string().optional(),
    education: z.array(z.string()).default([]),
    research_interest: z.string().optional(),
    email: z.string().email().optional(),
    personal_url: z.string().url().optional(),
    order: z.number().default(999),
    published: z.boolean().default(false)
  })
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    image: z.string().optional(),
    external_url: z.string().url().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(false)
  })
});

export const collections = { research, people, news };
