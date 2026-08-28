import type { Metadata } from 'next';
import { siteConfig } from './site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: 'ShreeWin Game – Login, Register, APK & Complete Guide', template: '%s' },
  description: 'Learn ShreeWin Game login, registration, APK download, games, deposit, UPI withdrawal, gift code, referral and agent steps with clear instructions.',
  keywords: ['ShreeWin','ShreeWin Game','ShreeWin login','ShreeWin register','ShreeWin APK','ShreeWin app download','ShreeWin games','ShreeWin Wingo','ShreeWin withdrawal','ShreeWin UPI withdrawal','ShreeWin bonus','ShreeWin invite code','ShreeWin agent','Shree Win'],
  applicationName: siteConfig.siteName,
  category: 'Gaming information',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'ShreeWin Game – Login, Register, APK & Complete Guide',
    description: 'Complete ShreeWin Game information for login, registration, APK, games, deposits, withdrawals, gift codes and agent work.',
    url: '/', siteName: siteConfig.siteName, type: 'website', locale: 'en_IN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shree Win APK download, games, login and complete guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShreeWin Game – Login, Register, APK & Complete Guide',
    description: 'ShreeWin Game information for Indian mobile users.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${siteConfig.domain}/#website`, name: siteConfig.siteName, url: `${siteConfig.domain}/`, description: 'ShreeWin guides for the APK, games, login, registration, promotions, withdrawals and agent work.', inLanguage: 'en-IN', publisher: { '@id': `${siteConfig.domain}/#organization` } },
    { '@type': 'Organization', '@id': `${siteConfig.domain}/#organization`, name: siteConfig.siteName, url: `${siteConfig.domain}/`, logo: { '@type': 'ImageObject', url: `${siteConfig.domain}${siteConfig.logo}`, width: 540, height: 180 }, description: 'ShreeWinAPK.net explains the ShreeWin app, games, account, wallet, promotions and agent features.' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
