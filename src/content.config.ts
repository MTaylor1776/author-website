import { defineCollection, z } from 'astro:content';

const universes = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    genre: z.string(),
    tagline: z.string(),
    accent: z.string(),        // CSS color for theming
    accentGlow: z.string(),    // Glow color for hover effects
    theme: z.enum(['scifi', 'fantasy']), // CSS theme class
    order: z.number(),
    cardGradient: z.string(),  // CSS gradient for placeholder card
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string(),
    universe: z.string(),      // matches universe folder name
    order: z.number(),
    cover: z.string().optional(),
    blurb: z.string(),
    kindle: z.string().optional(),
    barnesNoble: z.string().optional(),
    kobo: z.string().optional(),
    apple: z.string().optional(),
    paperback: z.string().optional(),
    published: z.string().optional(),
  }),
});

export const collections = { universes, books };
