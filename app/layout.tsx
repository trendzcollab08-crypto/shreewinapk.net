import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const display = Playfair_Display({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shree-win-game.net'),
  title: { default: 'Shree Win Game Information | Login, Register & App', template: '%s' },
  description: 'Learn about Shree Win Game Login, registration, Android app, WinGo, game categories, wallet steps, Activity, Promotion and responsible-play rules.',
  keywords: ['Shree Win Game','Shree Win login','Shree Win email login','Shree Win register','Shree Win app download','Shree Win APK','Shree Win WinGo','Shree Win games','Shree Win first deposit bonus'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shree Win Game Information | Login, Register & App',
    description: 'Review Shree Win Login, registration, game categories, Activity, Promotion, Wallet and Android app information.',
    url: '/', siteName: 'Shree Win Game', type: 'website', locale: 'en_IN',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Shree Win Game — every game, one vibrant experience' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Win Game Information | Login, Register & App',
    description: 'Review Shree Win Login, registration, games, Activity, Promotion, Wallet and Android app information.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const schema = {
  '@context':'https://schema.org',
  '@graph':[
    {
      '@type':'WebSite', '@id':'https://shree-win-game.net/#website',
      name:'Shree Win Game', url:'https://shree-win-game.net/',
      description:'Shree Win Game information covering Login, registration, Android app access, game categories, Activity, Promotion, Wallet and responsible-play rules.',
      inLanguage:'en-IN', publisher:{ '@id':'https://shree-win-game.net/#brand' },
    },
    {
      '@type':'Brand', '@id':'https://shree-win-game.net/#brand',
      name:'Shree Win', url:'https://shree-win-game.net/', logo:'https://shree-win-game.net/shreewin-logo.png',
    },
    {
      '@type':'FAQPage', '@id':'https://shree-win-game.net/#faq',
      mainEntity:[
        { '@type':'Question',name:'What is Shree Win Game?',acceptedAnswer:{ '@type':'Answer',text:'Shree Win Game is an online gaming platform that organises lottery, popular, mini-game and casino-style categories inside one mobile-first lobby.' } },
        { '@type':'Question',name:'How do I create a Shree Win account?',acceptedAnswer:{ '@type':'Answer',text:'Open Register, enter your active mobile number, complete OTP verification, create a strong password and accept the applicable account terms.' } },
        { '@type':'Question',name:'How do I log in?',acceptedAnswer:{ '@type':'Answer',text:'Open Shree Win Login and enter the mobile number or email and password connected to your account. Keep your password and OTP private.' } },
        { '@type':'Question',name:'Which games can I find on Shree Win?',acceptedAnswer:{ '@type':'Answer',text:'The lobby includes recommended games, lottery formats, mini games and casino-style categories. The current selection is displayed inside the live lobby.' } },
        { '@type':'Question',name:'How can I download the Android app?',acceptedAnswer:{ '@type':'Answer',text:'Visit Download App, review the current version and permissions, then follow the Android installation steps.' } },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${sans.variable} ${display.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
