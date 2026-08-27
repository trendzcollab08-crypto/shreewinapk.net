import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { siteConfig } from './site-config';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: 'Shree Win APK – Download, Games, Login & Complete Guide', template: '%s' },
  description: 'Explore Shree Win APK, games, login, registration, promotions, withdrawals, TRX WinGo, MotoRace and agent-work information.',
  keywords: ['Shree Win APK','Shree Win Game','Shree Win App','Shree Win Download','Shree Win Login','Shree Win Register','Shree Win Lottery','Shree Win TRX WinGo','Shree Win MotoRace','Shree Win Withdrawal','Shree Win Agent'],
  applicationName: siteConfig.siteName,
  category: 'Gaming information',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Shree Win APK – Download, Games, Login & Complete Guide',
    description: 'Explore Shree Win APK, games, account access, promotions, withdrawal methods and agent-work information in one complete resource.',
    url: '/', siteName: siteConfig.siteName, type: 'website', locale: 'en_IN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shree Win APK download, games, login and complete guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Win APK – Download, Games, Login & Complete Guide',
    description: 'Independent Shree Win APK, games, login, promotions, withdrawals and agency information.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${siteConfig.domain}/#website`, name: siteConfig.siteName, url: `${siteConfig.domain}/`, description: 'Independent guides covering Shree Win APK, games, account access, promotions, withdrawals and agency information.', inLanguage: 'en-IN', publisher: { '@id': `${siteConfig.domain}/#organization` } },
    { '@type': 'Organization', '@id': `${siteConfig.domain}/#organization`, name: siteConfig.siteName, url: `${siteConfig.domain}/`, logo: { '@type': 'ImageObject', url: `${siteConfig.domain}${siteConfig.logo}`, width: 540, height: 180 }, description: 'Independent informational website covering Shree Win APK, game categories, account, withdrawal, agency and safety information.' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={sans.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
