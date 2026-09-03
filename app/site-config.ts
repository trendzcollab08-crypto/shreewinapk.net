import { currentPlatformScreens } from './media-config';

const siteDomain = (process.env.NEXT_PUBLIC_SITE_URL || 'https://shreewinapk.net').replace(/\/+$/, '');
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || 'https://shreewin1.com';
const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL || 'https://shreewin1.com';

export const siteConfig = {
  brand: 'ShreeWin',
  siteName: 'ShreeWinAPK.net',
  domain: siteDomain,
  loginUrl,
  registerUrl,
  logo: '/shreewin-logo.webp',
  apkUrl: null as string | null,
  apkVersion: null as string | null,
  apkSize: null as string | null,
  publishedDate: '2026-08-27',
  lastUpdated: '2026-09-03',
  dailyGiftCode: {
    value: null as string | null,
    checkedOn: '2026-09-03',
  },
  games: ['WinGo', 'K3', '5D', 'Aviator', 'TRX WinGo', 'MotoRace'],
  categories: ['Lobby', 'Lottery', 'Popular', 'Mini Game', 'Slots', 'Casino'],
  withdrawals: {
    upiMinimumInr: 100,
    bankMinimumInr: 100,
    usdtMinimumInr: 1000,
  },
  agencyLevels: 6,
  grandReferralEvent: {
    name: 'ShreeWin Grand Referral Event 2026',
    activeInviteDepositInr: 500,
    qualifyingGames: ['WinGo', 'TRX lotteries'],
    wageringRequirement: '1.0x',
    rewards: [
      { rank: '1st Place (Champion)', milestone: '5,000+ active invites', reward: 'Mercedes-Benz A-Class Limousine or ₹45,00,000 cash' },
      { rank: '2nd Place (Runner-Up)', milestone: '2,500+ active invites', reward: '100 g 999.9 fine gold bar or ₹7,50,000 cash' },
      { rank: '3rd Place', milestone: '1,200+ active invites', reward: 'Rolex Submariner Date watch or ₹3,50,000 cash' },
      { rank: '4th–10th Place', milestone: '500+ active invites', reward: 'Apple iPhone 16 Pro Max 1 TB or ₹1,50,000 cash' },
      { rank: '11th–50th Place', milestone: '200+ active invites', reward: 'Apple iPad Pro 12.9-inch or ₹75,000 cash' },
      { rank: '51st–200th Place', milestone: '50+ active invites', reward: '₹10,000 wallet cash bonus' },
    ],
  },
  firstDepositTiers: [
    { depositInr: 300, bonusInr: 48 },
    { depositInr: 500, bonusInr: 108 },
    { depositInr: 1000, bonusInr: 188 },
    { depositInr: 5000, bonusInr: 488 },
  ],
  screenshots: [
    { src: '/preview-home.webp', title: 'Homepage', alt: 'Shree Win game homepage showing lottery and gaming categories', width: 720, height: 1732 },
    { src: '/preview-login.webp', title: 'Login', alt: 'Shree Win login screen with phone and email access options', width: 720, height: 1240 },
    { src: '/preview-register-phone.webp', title: 'Phone registration', alt: 'Shree Win phone registration screen and account fields', width: 720, height: 1378 },
    { src: '/preview-register-email.webp', title: 'Email registration', alt: 'Shree Win email registration screen and account fields', width: 720, height: 1589 },
    { src: '/preview-lottery.webp', title: 'Lottery', alt: 'Shree Win lottery section showing available game cards', width: 720, height: 1760 },
    { src: '/preview-password-reset.webp', title: 'Password reset', alt: 'Shree Win password reset screen with verification step', width: 720, height: 1487 },
    { src: '/preview-event-rewards.webp', title: 'Activity prompt', alt: 'Shree Win activity prompt displayed over the mobile lobby', width: 720, height: 1732 },
    ...currentPlatformScreens,
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'ShreeWin APK', href: '/shree-win-apk/' },
    { label: 'Download', href: '/shree-win-download/' },
    { label: 'Games', href: '/shree-win-games/' },
    { label: 'Withdraw', href: '/shree-win-withdrawal/' },
    { label: 'Agent Guide', href: '/shree-win-agent/' },
    { label: 'TRX WinGo', href: '/trx-wingo/' },
    { label: 'MotoRace', href: '/motorace/' },
    { label: 'Login Guide', href: '/shree-win-login/' },
    { label: 'Register Guide', href: '/shree-win-register/' },
    { label: 'Blog', href: '/blog/' },
  ],
} as const;
