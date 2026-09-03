import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { guidePages } from '../guide-content';
import { allFaqs, faqGroups } from '../faq-content';
import { siteConfig } from '../site-config';
import { CTAButton, DailyGiftCodeStatus, FAQAccordion, ReferralEventTable, ResponsibleGamingNotice, SafetyNotice } from './Marketing';
import { PageShell } from './SiteChrome';

export function buildGuideMetadata(slug: string): Metadata {
  const page = guidePages[slug];
  const canonical = `/${page.slug}/`;
  const image = page.image ? `${siteConfig.domain}${page.image.src}` : undefined;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: { title: page.title, description: page.description, url: canonical, type: page.schemaType && page.schemaType !== 'Article' ? 'website' : 'article', images: image ? [{ url: image, width: page.image!.width, height: page.image!.height, alt: page.image!.alt }] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: page.title, description: page.description, images: image ? [image] : [] },
  };
}

export function GuidePage({ slug }: { slug: string }) {
  const page = guidePages[slug];
  const canonical = `${siteConfig.domain}/${page.slug}/`;
  const lastUpdated = page.lastUpdated || siteConfig.lastUpdated;
  const updatedLabel = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(`${lastUpdated}T00:00:00+05:30`));
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.domain}/` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: canonical },
    ],
  };
  const schemaType = page.schemaType || 'Article';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `${canonical}#content`,
    ...(schemaType === 'Article' ? { headline: page.h1 } : { name: page.h1 }),
    description: page.description,
    url: canonical,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${siteConfig.domain}/#website` },
    ...(schemaType === 'Article' ? {
      mainEntityOfPage: canonical,
      datePublished: siteConfig.publishedDate,
      dateModified: lastUpdated,
      author: { '@type': 'Organization', name: `${siteConfig.siteName} Editorial Team`, url: `${siteConfig.domain}/about/` },
      publisher: { '@id': `${siteConfig.domain}/#organization` },
      ...(page.image ? { image: `${siteConfig.domain}${page.image.src}` } : {}),
    } : {}),
  };
  const isFaqPage = slug === 'shree-win-faq';
  const visibleFaqs = isFaqPage ? allFaqs : page.faqs;
  const faqSchema = visibleFaqs?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: visibleFaqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  } : null;

  return <PageShell><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
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
      <article className={`guide-main ${isFaqPage ? 'faq-guide-content' : ''}`}>
        {page.image && <figure className="guide-feature-image"><Image src={page.image.src} width={page.image.width} height={page.image.height} alt={page.image.alt} sizes="(max-width: 900px) 100vw, 760px" loading="lazy" /><figcaption><strong>{page.image.title}</strong>{page.image.caption}</figcaption></figure>}
        {slug === 'shree-win-gift-code' && <DailyGiftCodeStatus />}
        {isFaqPage ? faqGroups.map((group, index) => <section id={`faq-group-${index + 1}`} key={group.title}>
          <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
          <h2>{group.title}</h2>
          <FAQAccordion items={group.items} openFirst={false} />
        </section>) : page.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
          <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
          <h2>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {slug === 'shree-win-grand-referral-event' && index === 0 && <ReferralEventTable />}
          {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
        {!isFaqPage && page.faqs && <section id="frequently-asked-questions" className="faq-guide-content">
          <span className="section-number">{String(page.sections.length + 1).padStart(2, '0')}</span>
          <h2>ShreeWin Grand Referral Event FAQs</h2>
          <FAQAccordion items={page.faqs} openFirst={false} />
        </section>}
        {page.images?.length ? <section className="guide-screenshot-section" id="current-app-screens">
          <span className="section-number">APP WALKTHROUGH</span>
          <h2>Explore these ShreeWin sections</h2>
          <p>Tap any preview image to view the complete ShreeWin page and its available options.</p>
          <div className="guide-screenshot-grid">{page.images.map(image => <figure key={image.src}><a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full ${image.title} screenshot`}><Image src={image.src} width={image.width} height={image.height} alt={image.alt} loading="lazy" sizes="(max-width: 680px) 100vw, 50vw" /></a><figcaption><strong>{image.title}</strong>{image.caption}</figcaption></figure>)}</div>
        </section> : null}
      </article>
      <aside className="guide-sidebar">
        <div className="side-card"><span>On this page</span>{isFaqPage ? faqGroups.map((group, index) => <a key={group.title} href={`#faq-group-${index + 1}`}>{String(index + 1).padStart(2, '0')} {group.title}</a>) : <>{page.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, '0')} {section.heading}</a>)}{page.faqs && <a href="#frequently-asked-questions">{String(page.sections.length + 1).padStart(2, '0')} Event FAQs</a>}</>}</div>
        <div className="side-card guide-directory"><span>Explore Shree Win</span><a href="/shree-win-apk/">APK &amp; app overview</a><a href="/shree-win-games/">Games directory</a><a href="/shree-win-deposit/">Deposit help</a><a href="/shree-win-withdrawal/">Withdrawal methods</a><a href="/shree-win-gift-code/">Gift Code guide</a><a href="/shree-win-login/">Login help</a><a href="/shree-win-register/">Registration help</a></div>
        <div className="side-card guide-directory"><span>Account &amp; safety</span><a href="/shree-win-account-settings/">Account settings</a><a href="/shree-win-account-recovery/">Account recovery</a><a href="/shree-win-login-problems/">Login problems</a><a href="/shree-win-apk-safety/">APK safety</a><a href="/shree-win-phishing-warning/">Fake-link warning</a><a href="/shree-win-faq/">ShreeWin FAQ</a></div>
        <SafetyNotice title="Keep your account safe"><p>Never share your ShreeWin password, OTP, withdrawal password, UPI PIN, bank PIN or card details with this website or another person.</p></SafetyNotice>
      </aside>
    </div></section>

    <section className="related-section"><div className="container"><span>Continue reading</span><h2>Related Shree Win guides</h2><div>{page.related.map(item => <a key={item.href} href={item.href}><b>{item.label}</b><span>Read guide →</span></a>)}</div></div></section>
    {slug === 'responsible-gaming' ? null : <div className="container responsible-wrap"><ResponsibleGamingNotice /></div>}
  </main></PageShell>;
}
