import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../site-config';

const externalProps = { target: '_blank', rel: 'sponsored noopener noreferrer' } as const;

export function Header() {
  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand-logo" href="/" aria-label="ShreeWinAPK.net home">
        <Image src={siteConfig.logo} width="270" height="90" alt="ShreeWin" preload sizes="158px" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="button button-outline button-small" href={siteConfig.loginUrl} {...externalProps}>Login</a>
        <a className="button button-gold button-small" href={siteConfig.registerUrl} {...externalProps}>Register</a>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span/><span/><span/></summary>
        <nav aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <div><a className="button button-outline" href={siteConfig.loginUrl} {...externalProps}>Login</a><a className="button button-gold" href={siteConfig.registerUrl} {...externalProps}>Register</a></div>
        </nav>
      </details>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Image src={siteConfig.logo} width="270" height="90" alt="ShreeWin" sizes="190px" />
        <p>Clear ShreeWin guides for the APK, games, login, deposits, withdrawals, gift codes and agent work.</p>
        <div className="trust-chips"><span>Complete Information</span><span>Safety Guidance</span></div>
      </div>
      <nav aria-label="Footer guides"><h2>Guides</h2><a href="/shree-win-apk/">ShreeWin APK</a><a href="/shree-win-download/">Download Guide</a><a href="/shree-win-games/">Games</a><a href="/shree-win-wingo/">WinGo</a><a href="/trx-wingo/">TRX WinGo</a><a href="/motorace/">MotoRace</a><a href="/shree-win-activity/">Activity</a><a href="/shree-win-faq/">ShreeWin FAQ</a><a href="/blog/">All Guides</a></nav>
      <nav aria-label="Footer account information"><h2>Account &amp; Wallet</h2><a href="/shree-win-login/">Login Guide</a><a href="/shree-win-register/">Register Guide</a><a href="/shree-win-wallet/">Wallet Guide</a><a href="/shree-win-deposit/">Deposit Guide</a><a href="/shree-win-withdrawal/">Withdrawal Guide</a><a href="/shree-win-gift-code/">Gift Code</a><a href="/shree-win-account-settings/">Account Settings</a><a href="/shree-win-referral/">Referral Guide</a><a href="/shree-win-agent/">Agent Work</a><a href="/shree-win-grand-referral-event/">Grand Referral Event</a></nav>
      <nav aria-label="Footer policies"><h2>Safety &amp; Information</h2><a href="/shree-win-apk-safety/">APK Safety</a><a href="/shree-win-phishing-warning/">Fake-Link Warning</a><a href="/shree-win-account-recovery/">Account Recovery</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy-policy/">Privacy Policy</a><a href="/terms/">Terms</a><a href="/disclaimer/">Disclaimer</a><a href="/responsible-gaming/">Responsible Gaming</a></nav>
    </div>
    <div className="container footer-disclaimer">
      <strong>About ShreeWinAPK.net</strong>
      <p>Use ShreeWinAPK.net for ShreeWin app, game, account, Wallet, promotion and agent guides. Login and Register buttons open the ShreeWin account page.</p>
    </div>
    <div className="container footer-bottom"><span>© 2026 ShreeWinAPK.net. All rights reserved.</span><span>Gaming may involve financial risk. Outcomes are not guaranteed.</span></div>
  </footer>;
}

export function MobileStickyCTA() {
  return <aside className="mobile-sticky-cta" aria-label="Account access">
    <a href={siteConfig.loginUrl} {...externalProps}>Login</a>
    <a href={siteConfig.registerUrl} {...externalProps}>Register</a>
  </aside>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /><MobileStickyCTA /></>;
}
