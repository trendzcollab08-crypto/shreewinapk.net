import Link from 'next/link';
import { PageShell } from './components/SiteChrome';

export default function NotFound() {
  return <PageShell><main><section className="guide-hero"><div className="container"><p className="eyebrow"><span/>404 · Page not found</p><h1>This Shree Win guide could not be found.</h1><p>The page may have moved or the address may be incomplete. Use the links below to return to verified site sections.</p><div className="guide-hero-actions"><Link className="button button-gold" href="/">Return Home</Link><a className="button button-outline" href="/blog">Browse Guides</a></div></div></section></main></PageShell>;
}
