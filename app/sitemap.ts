import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://shree-win-game.net/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]; }
