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
  lastUpdated: '2026-08-27',
  games: ['WinGo', 'K3', '5D', 'Aviator', 'TRX WinGo', 'MotoRace'],
  categories: ['Lobby', 'Lottery', 'Popular', 'Mini Game', 'Casino'],
  withdrawals: {
    upiMinimumInr: 100,
    bankMinimumInr: 100,
    usdtMinimumInr: 1000,
  },
  agencyLevels: 6,
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
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'ShreeWin APK', href: '/shree-win-apk' },
    { label: 'Download', href: '/shree-win-download' },
    { label: 'Games', href: '/shree-win-games' },
    { label: 'Withdraw', href: '/shree-win-withdrawal' },
    { label: 'Agent Guide', href: '/shree-win-agent' },
    { label: 'TRX WinGo', href: '/trx-wingo' },
    { label: 'MotoRace', href: '/motorace' },
    { label: 'Login Guide', href: '/shree-win-login' },
    { label: 'Register Guide', href: '/shree-win-register' },
    { label: 'Blog', href: '/blog' },
  ],
} as const;
