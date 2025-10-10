import { z, defineCollection } from "astro:content";

export const socialCollection = defineCollection({
    schema: z.object({
        platform: z.string(), // e.g., "LinkedIn"
        id: z.string(), // e.g., "linkedin"
        url: z.string().url(), // URL
        order: z.number(),
        icon: z.string().optional() // icon path
    }),
});
