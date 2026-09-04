import type { MetadataRoute } from 'next';
import { siteConfig } from './site-config';

export const dynamic = 'force-static';

const routes = [
  ['',1,'weekly'],['/shree-win-apk',.95,'weekly'],['/shree-win-download',.9,'weekly'],['/shree-win-login',.85,'monthly'],
  ['/shree-win-register',.85,'monthly'],['/shree-win-games',.9,'weekly'],['/shree-win-lottery',.85,'weekly'],['/trx-wingo',.85,'weekly'],
  ['/shree-win-wingo',.88,'weekly'],['/motorace',.85,'weekly'],['/shree-win-promotion',.75,'weekly'],['/shree-win-activity',.8,'weekly'],
  ['/blog',.8,'weekly'],['/about',.55,'yearly'],['/shree-win-wallet',.84,'weekly'],['/shree-win-withdrawal',.82,'weekly'],
  ['/shree-win-agent',.78,'weekly'],['/shree-win-referral',.82,'weekly'],['/shree-win-grand-referral-event',.8,'weekly'],
  ['/shree-win-deposit',.86,'weekly'],['/shree-win-gift-code',.8,'weekly'],['/shree-win-account-recovery',.78,'monthly'],
  ['/shree-win-login-problems',.8,'monthly'],['/shree-win-apk-safety',.82,'monthly'],['/shree-win-phishing-warning',.72,'monthly'],
  ['/shree-win-account-settings',.76,'monthly'],['/shree-win-faq',.78,'weekly'],
  ['/contact',.45,'yearly'],['/privacy-policy',.35,'yearly'],['/terms',.35,'yearly'],['/disclaimer',.45,'yearly'],['/responsible-gaming',.65,'yearly'],
] as const;

const routeImages: Record<string, string[]> = {
  '': ['/preview-home.webp', '/shreewin-homepage-lottery-games.webp', '/shreewin-activity-center.webp', '/shreewin-account-wallet.webp'],
  '/shree-win-apk': ['/shreewin-homepage-lottery-games.webp', '/shreewin-account-wallet.webp'],
  '/shree-win-games': ['/shreewin-homepage-lottery-games.webp'],
  '/shree-win-lottery': ['/shreewin-homepage-lottery-games.webp'],
  '/shree-win-wingo': ['/shreewin-homepage-lottery-games.webp'],
  '/shree-win-wallet': ['/shreewin-account-wallet.webp', '/shreewin-deposit-screen.webp', '/shreewin-withdrawal-methods.webp'],
  '/shree-win-withdrawal': ['/shreewin-withdrawal-methods.webp', '/shreewin-usdt-withdrawal-rules.webp'],
  '/shree-win-deposit': ['/shreewin-deposit-screen.webp', '/shreewin-first-deposit-bonus.webp'],
  '/shree-win-activity': ['/shreewin-activity-center.webp', '/shreewin-activity-award.webp', '/shreewin-first-gift.webp'],
  '/shree-win-promotion': ['/shreewin-first-deposit-bonus.webp', '/shreewin-welcome-offer.webp'],
  '/shree-win-gift-code': ['/shreewin-gift-code-entry.webp'],
  '/shree-win-agent': ['/shreewin-agency-dashboard.webp', '/shreewin-agency-rules.webp'],
  '/shree-win-referral': ['/shreewin-referral-milestone-bonus.webp', '/shreewin-agent-referral-bonus.webp'],
  '/shree-win-grand-referral-event': ['/preview-event-rewards.webp', '/shreewin-referral-milestone-bonus.webp'],
  '/shree-win-account-settings': ['/shreewin-account-service-center.webp', '/shreewin-account-wallet.webp'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${siteConfig.lastUpdated}T12:00:00+05:30`);
  return routes.map(([path, priority, changeFrequency]) => ({
    url: path ? `${siteConfig.domain}${path}/` : `${siteConfig.domain}/`,
    lastModified,
    changeFrequency,
    priority,
    ...(routeImages[path]?.length ? { images: routeImages[path].map(image => `${siteConfig.domain}${image}`) } : {}),
  }));
}
