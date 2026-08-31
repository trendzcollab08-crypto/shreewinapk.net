import Link from 'next/link';
import { PageShell } from './components/SiteChrome';

export const metadata = {
  title: 'Page Not Found | ShreeWinAPK.net',
  description: 'The requested ShreeWin guide could not be found. Return to the homepage or browse the complete guide directory.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <PageShell><main><section className="guide-hero"><div className="container"><p className="eyebrow"><span/>404 · Page not found</p><h1>We could not find this Shree Win guide.</h1><p>The page may have moved, or the web address may be incomplete. Go back to the homepage or browse all guides.</p><div className="guide-hero-actions"><Link className="button button-gold" href="/">Return Home</Link><a className="button button-outline" href="/blog/">Browse Guides</a></div></div></section></main></PageShell>;
}
