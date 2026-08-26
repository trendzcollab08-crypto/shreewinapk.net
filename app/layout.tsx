import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const display = Playfair_Display({ variable: '--font-display', subsets: ['latin'] });
export const metadata: Metadata = { metadataBase: new URL('https://shree-win-game.net'), title: { default: 'Shree Win Game | Login, Register, App & Game Guides', template: '%s | Shree Win Game' }, description: 'Explore the Shree Win Game login and register journey, app safety guide, WinGo, K3, 5D, TRX WinGo, MotoRace, lottery and casino categories.', keywords: ['Shree Win Game','Shree Win login','Shree Win register','Shree Win app','Shree Win APK','WinGo','MotoRace','gaming guide'], alternates: { canonical: '/' }, openGraph: { title: 'Shree Win Game | Complete Information Hub', description: 'Explore login, register, app safety, game categories and responsible-play guides.', url: '/', siteName: 'Shree Win Game', type: 'website', images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Shree Win Game — Play your way. Own the moment.' }] }, twitter: { card: 'summary_large_image', title: 'Shree Win Game | Complete Information Hub', description: 'Explore login, register, app safety, game categories and responsible-play guides.', images: ['/og.png'] }, robots: { index: true, follow: true } };
const schema = { '@context':'https://schema.org','@graph':[
  { '@type':'WebSite',name:'Shree Win Game',url:'https://shree-win-game.net/',description:'A mobile-friendly information hub for Shree Win Game account journeys, categories and safety guides.',inLanguage:'en' },
  { '@type':'FAQPage',mainEntity:[
    { '@type':'Question',name:'What is Shree Win Game?',acceptedAnswer:{ '@type':'Answer',text:'Shree Win Game is the working brand concept for this gaming information hub. Live operator facts and access links require verification.' } },
    { '@type':'Question',name:'How can I register or log in?',acceptedAnswer:{ '@type':'Answer',text:'The page explains a typical safety-first account journey. Confirmed operator URLs and terms must be supplied before the actions are enabled.' } },
    { '@type':'Question',name:'Where can I download the Shree Win app?',acceptedAnswer:{ '@type':'Answer',text:'No APK or app-store link is published until the source, publisher, permissions, checksum and current version are verified.' } },
    { '@type':'Question',name:'Are bonuses or withdrawals guaranteed?',acceptedAnswer:{ '@type':'Answer',text:'No. This site does not promise bonuses, payouts, withdrawal times, win rates or earnings.' } }
  ]}
] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${display.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>; }
