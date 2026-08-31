import type { Metadata } from 'next';
import Link from 'next/link';
import { guidePages } from '../guide-content';
import { siteConfig } from '../site-config';
import { CTAButton, ResponsibleGamingNotice, SafetyNotice } from './Marketing';
import { PageShell } from './SiteChrome';

export function buildGuideMetadata(slug: string): Metadata {
  const page = guidePages[slug];
  const canonical = `/${page.slug}/`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: { title: page.title, description: page.description, url: canonical, type: 'website', images: [] },
    twitter: { card: 'summary', title: page.title, description: page.description, images: [] },
  };
}

export function GuidePage({ slug }: { slug: string }) {
  const page = guidePages[slug];
  const canonical = `${siteConfig.domain}/${page.slug}/`;
  const updatedLabel = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(`${siteConfig.lastUpdated}T00:00:00+05:30`));
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.domain}/` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: canonical },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    mainEntityOfPage: canonical,
    datePublished: siteConfig.publishedDate,
    dateModified: siteConfig.lastUpdated,
    inLanguage: 'en-IN',
    author: { '@type': 'Organization', name: `${siteConfig.siteName} Editorial Team`, url: `${siteConfig.domain}/about/` },
    publisher: { '@type': 'Organization', name: siteConfig.siteName, url: `${siteConfig.domain}/`, logo: { '@type': 'ImageObject', url: `${siteConfig.domain}${siteConfig.logo}` } },
  };
  const faqSchema = slug === 'shree-win-faq' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.sections.map(section => ({
      '@type': 'Question',
      name: section.heading,
      acceptedAnswer: { '@type': 'Answer', text: section.paragraphs.join(' ') },
    })),
  } : null;

  return <PageShell><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <section className="guide-hero"><div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">{page.h1}</span></nav>
      <p className="eyebrow"><span/>{page.eyebrow}</p>
      <h1>{page.h1}</h1>
      <p>{page.intro}</p>
      <div className="guide-meta"><span>Reviewed by {siteConfig.siteName} Editorial Team</span><span>Updated {updatedLabel}</span></div>
      {page.cta && <div className="guide-hero-actions">
        {page.cta === 'register' ? <CTAButton kind="register">Register on Shree Win ↗</CTAButton> : page.cta === 'login' ? <CTAButton kind="login">Shree Win Login ↗</CTAButton> : <CTAButton kind="login">Visit Shree Win ↗</CTAButton>}
        <a className="button button-text" href="#guide-content">Read the guide ↓</a>
      </div>}
    </div></section>

    <section className="guide-body" id="guide-content"><div className="container guide-body-grid">
      <article className="guide-main">
        {page.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
          <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
      </article>
      <aside className="guide-sidebar">
        <div className="side-card"><span>On this page</span>{page.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}</div>
        <div className="side-card guide-directory"><span>Explore Shree Win</span><a href="/shree-win-apk/">APK &amp; app overview</a><a href="/shree-win-games/">Games directory</a><a href="/shree-win-deposit/">Deposit help</a><a href="/shree-win-withdrawal/">Withdrawal methods</a><a href="/shree-win-gift-code/">Gift Code guide</a><a href="/shree-win-login/">Login help</a><a href="/shree-win-register/">Registration help</a></div>
        <div className="side-card guide-directory"><span>Account &amp; safety</span><a href="/shree-win-account-settings/">Account settings</a><a href="/shree-win-account-recovery/">Account recovery</a><a href="/shree-win-login-problems/">Login problems</a><a href="/shree-win-apk-safety/">APK safety</a><a href="/shree-win-phishing-warning/">Fake-link warning</a><a href="/shree-win-faq/">ShreeWin FAQ</a></div>
        <SafetyNotice title="Keep your account safe"><p>Never share your ShreeWin password, OTP, withdrawal password, UPI PIN, bank PIN or card details with this website or another person.</p></SafetyNotice>
      </aside>
    </div></section>

    <section className="related-section"><div className="container"><span>Continue reading</span><h2>Related Shree Win guides</h2><div>{page.related.map(item => <a key={item.href} href={item.href}><b>{item.label}</b><span>Read guide →</span></a>)}</div></div></section>
    {slug === 'responsible-gaming' ? null : <div className="container responsible-wrap"><ResponsibleGamingNotice /></div>}
  </main></PageShell>;
}
