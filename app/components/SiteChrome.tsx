type ActivePage = 'home' | 'activity' | 'promotion' | 'account' | 'games';

export function SiteHeader({ active = 'home' }: { active?: ActivePage }) {
  return <>
    <header className="topbar">
      <a className="logo-link" href="/" aria-label="Shree Win Game home"><img src="/shreewin-logo.png" alt="ShreeWin" /></a>
      <nav className="topnav" aria-label="Main navigation">
        <a className={active === 'home' ? 'active' : ''} href="/">Home</a>
        <a className={active === 'games' ? 'active' : ''} href="/games">Games</a>
        <a className={active === 'activity' ? 'active' : ''} href="/activity">Activity</a>
        <a className={active === 'promotion' ? 'active' : ''} href="/promotion">Promotion</a>
        <a href="/download">Download App</a>
      </nav>
      <div className="top-actions"><a className="outline-button" href="/login">Login</a><a className="primary-button small" href="/register">Register</a></div>
    </header>
  </>;
}

export function MobileNav({ active = 'home' }: { active?: ActivePage }) {
  return <nav className="bottom-nav" aria-label="Mobile navigation">
    <a className={active === 'home' ? 'active' : ''} href="/"><span>⌂</span>Home</a>
    <a className={active === 'activity' ? 'active' : ''} href="/activity"><span>✦</span>Activity</a>
    <a className="spin-action" href="/register"><span>▶</span><b>Start</b></a>
    <a className={active === 'promotion' ? 'active' : ''} href="/promotion"><span>▣</span>Promotion</a>
    <a className={active === 'account' ? 'active' : ''} href="/login"><span>●</span>Account</a>
  </nav>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand"><img src="/shreewin-logo.png" alt="Shree Win Game logo"/><p>Shree Win product information, Login and Register help, game-rule explanations, Activity terms and responsible-play education.</p><span>18+ only · Eligibility and local laws apply · Play responsibly</span></div>
      <nav><strong>Games</strong><a href="/games#recommended">Recommended</a><a href="/wingo">WinGo</a><a href="/games#mini-games">Mini Games</a><a href="/games#casino">Casino</a></nav>
      <nav><strong>Shree Win</strong><a href="/login">Login</a><a href="/register">Register</a><a href="/wallet">Wallet & Payments</a><a href="/download">Download App</a></nav>
      <nav><strong>Information</strong><a href="/activity">Activity</a><a href="/first-deposit-bonus">First Deposit Bonus</a><a href="/promotion">Promotion</a><a href="/support">Support</a><a href="/responsible-play">Responsible Play</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></nav>
    </div>
    <div className="education-disclosure"><b>Information & Responsible Play Notice</b><p>This website provides Shree Win product information, account-help content, game-rule explanations and responsible-play education. Some product features may involve financial risk. No result, reward or income is guaranteed. Access is intended only for eligible adults aged 18+ and remains subject to applicable local laws and the current product terms.</p></div>
    <div className="footer-bottom"><span>© 2026 Shree Win Game. All rights reserved.</span><span>Results, rewards and promotional eligibility are subject to the active in-product rules.</span></div>
  </footer>;
}

export function PageShell({ children, active = 'home' }: { children: React.ReactNode; active?: ActivePage }) {
  return <><SiteHeader active={active}/>{children}<SiteFooter/><MobileNav active={active}/></>;
}
