import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Works with a full URL (https://...) OR a repo path (/images/photo.jpg from public/images)
    heroImage: z.string(),
    category: z.string(),
  }),
});

export const collections = { posts };
