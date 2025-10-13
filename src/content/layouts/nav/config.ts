import { z, defineCollection } from 'astro:content';

export const navCollection = defineCollection({
   schema: z.object({
      order: z.number(),
      label: z.string(), // e.g., "Home"
      id: z.string(), // e.g., "home"
      href: z.string(), // URL
   }),
});
