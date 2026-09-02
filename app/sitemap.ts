import type { MetadataRoute } from 'next';
import { siteConfig } from './site-config';

export const dynamic = 'force-static';

const routes = [
  ['',1,'weekly'],['/shree-win-apk',.95,'weekly'],['/shree-win-download',.9,'weekly'],['/shree-win-login',.85,'monthly'],
  ['/shree-win-register',.85,'monthly'],['/shree-win-games',.9,'weekly'],['/shree-win-lottery',.85,'weekly'],['/trx-wingo',.85,'weekly'],
  ['/motorace',.85,'weekly'],['/shree-win-promotion',.75,'weekly'],['/blog',.8,'weekly'],['/about',.55,'yearly'],
  ['/shree-win-withdrawal',.82,'weekly'],['/shree-win-agent',.78,'weekly'],['/shree-win-grand-referral-event',.8,'weekly'],
  ['/shree-win-deposit',.86,'weekly'],['/shree-win-gift-code',.8,'weekly'],['/shree-win-account-recovery',.78,'monthly'],
  ['/shree-win-login-problems',.8,'monthly'],['/shree-win-apk-safety',.82,'monthly'],['/shree-win-phishing-warning',.72,'monthly'],
  ['/shree-win-account-settings',.76,'monthly'],['/shree-win-faq',.78,'weekly'],
  ['/contact',.45,'yearly'],['/privacy-policy',.35,'yearly'],['/terms',.35,'yearly'],['/disclaimer',.45,'yearly'],['/responsible-gaming',.65,'yearly'],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteConfig.lastUpdated}T00:00:00+05:30`);
  return routes.map(([path, priority, changeFrequency]) => ({
    url: path ? `${siteConfig.domain}${path}/` : `${siteConfig.domain}/`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
