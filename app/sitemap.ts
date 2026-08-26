import type { MetadataRoute } from 'next';
const base='https://shree-win-game.net';
const updated=new Date('2026-08-27T00:00:00+05:30');
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ['',1,'weekly'],['/games',.95,'weekly'],['/wingo',.9,'weekly'],['/login',.9,'monthly'],
    ['/register',.9,'monthly'],['/download',.9,'weekly'],['/activity',.85,'weekly'],
    ['/promotion',.85,'weekly'],['/wallet',.8,'monthly'],['/support',.75,'monthly'],
    ['/responsible-play',.65,'yearly'],['/terms',.4,'yearly'],['/privacy',.4,'yearly'],
  ].map(([path,priority,changeFrequency])=>({
    url:`${base}${path}`,lastModified:updated,
    changeFrequency:changeFrequency as MetadataRoute.Sitemap[number]['changeFrequency'],priority:priority as number,
  }));
}
