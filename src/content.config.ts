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
    cardImage: z.string().optional(), // Background image path for the card
    music: z.string().optional(),     // Ambient audio file path
    comingSoon: z.boolean().optional(), // If true, card is non-clickable placeholder
    startHere: z.string().optional(),    // Book slug for "Start Here" featured card
    latestRelease: z.string().optional(), // Book slug for "Latest Release" featured card
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
    freeWithNewsletter: z.boolean().optional(), // If true, shows "Free with newsletter sign-up!" badge
  }),
});

export const collections = { universes, books };
