import Image from 'next/image';
import { siteConfig } from '../site-config';

const externalProps = { target: '_blank', rel: 'sponsored noopener noreferrer' } as const;

export function CTAButton({ kind, children, className = '' }: { kind: 'login' | 'register'; children: React.ReactNode; className?: string }) {
  const href = kind === 'login' ? siteConfig.loginUrl : siteConfig.registerUrl;
  return <a className={`button ${kind === 'register' ? 'button-gold' : 'button-outline'} ${className}`} href={href} {...externalProps}>{children}</a>;
}

export function Hero() {
  return <section className="hero">
    <div className="hero-grid container">
      <div className="hero-copy">
        <p className="eyebrow"><span/> Shree Win Game Information</p>
        <h1>ShreeWin Game – Login, Register, APK, Games &amp; Withdrawal Guide</h1>
        <p className="hero-lead">Shree Win brings account access, Android APK, game categories, wallet tools, promotions, Gift Codes, TRX WinGo, MotoRace and six-level Agency features into one mobile interface. Our guides cover phone and email registration, login, password reset, deposits, withdrawals, support, promotion rules, results and account safety.</p>
        <div className="hero-actions"><CTAButton kind="register">Register <span>↗</span></CTAButton><CTAButton kind="login">Login <span>↗</span></CTAButton><a className="button button-text" href="#shree-win-apk">Explore Shree Win APK <span>↓</span></a></div>
        <ul className="hero-trust"><li><b>Step-by-step help</b><span>Short and clear instructions</span></li><li><b>Indian payment guide</b><span>UPI, bank and USDT information</span></li><li><b>Safe account access</b><span>We never collect your login details</span></li></ul>
      </div>
      <div className="app-visual" aria-label="Shree Win app interface preview">
        <div className="phone-frame"><div className="phone-notch"/><Image src="/preview-home.webp" width="720" height="1732" alt="Shree Win game homepage showing lottery and gaming categories" priority sizes="(max-width: 680px) 245px, 310px" /></div>
        <div className="visual-chip chip-one"><span>⑧</span><b>WinGo • K3 • 5D</b><small>Game information</small></div>
        <div className="visual-chip chip-two"><span>₹</span><b>UPI • Bank • USDT</b><small>Withdrawal guide</small></div>
      </div>
    </div>
  </section>;
}

export function SectionHeading({ eyebrow, title, copy, centered = false }: { eyebrow: string; title: string; copy?: string; centered?: boolean }) {
  return <header className={`section-heading ${centered ? 'centered' : ''}`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

export function FeatureCard({ icon, title, children, href }: { icon: string; title: string; children: React.ReactNode; href?: string }) {
  const card = <><i aria-hidden="true">{icon}</i><h3>{title}</h3><p>{children}</p>{href && <span className="card-link">Learn more →</span>}</>;
  return href ? <a className="feature-card" href={href}>{card}</a> : <article className="feature-card">{card}</article>;
}

export function GameCard({ label, title, copy, href, icon }: { label: string; title: string; copy: string; href: string; icon: string }) {
  return <article className="game-card"><div className="game-art"><span>{icon}</span><small>{label}</small></div><div><h3>{title}</h3><p>{copy}</p><a href={href}>Learn About {title} <span>→</span></a></div></article>;
}

export function ScreenshotGallery() {
  return <div className="screenshot-grid">{siteConfig.screenshots.map((image, index) => <figure key={image.src} className={index === 0 ? 'featured-shot' : ''}><div><Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 680px) 50vw, (max-width: 1080px) 33vw, 25vw" /></div><figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.title}</figcaption></figure>)}</div>;
}

export function FAQAccordion({ items }: { items: readonly (readonly [string, string])[] }) {
  return <div className="faq-list">{items.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>;
}

export function ArticleCard({ title, copy, href, number }: { title: string; copy: string; href: string; number: number }) {
  return <article className="article-card"><span>{String(number).padStart(2, '0')}</span><div><p>Shree Win guide</p><h3>{title}</h3><small>{copy}</small></div><a href={href} aria-label={`Read ${title}`}>↗</a></article>;
}

export function InfoTable() {
  const rows = ['Mobile Interface','Phone & Email Account Access','Password Reset','Lottery Category','TRX WinGo','MotoRace','Mini Games','Casino Category','Promotions','Activity Section','UPI & Bank Withdrawal','USDT Withdrawal','Agency / Invitation System','Account Section'];
  return <div className="table-wrap"><table><thead><tr><th>Feature</th><th>Shree Win</th></tr></thead><tbody>{rows.map(row => <tr key={row}><td>{row}</td><td><span aria-label="Available in Shree Win">✓</span> Available</td></tr>)}</tbody></table></div>;
}

export function SafetyNotice({ title = 'APK Safety Tips', children }: { title?: string; children: React.ReactNode }) {
  return <aside className="safety-notice"><div aria-hidden="true">🛡</div><div><h3>{title}</h3>{children}</div></aside>;
}

export function ResponsibleGamingNotice() {
  return <section className="responsible-notice"><div><span>Responsible gaming</span><h2>Play only within your limits.</h2><p>Paid gaming can cause a financial loss. You must be 18+, check the gaming rules in your area, set time and amount limits, never borrow funds to play and never chase a loss.</p></div><a className="button button-outline" href="/responsible-gaming/">Read Responsible Gaming Guide</a></section>;
}
