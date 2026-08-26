const categories = [
  { icon: '◉', label: 'Lottery', note: 'Number and draw formats', tone: 'gold' },
  { icon: '✦', label: 'Popular', note: 'Frequently explored titles', tone: 'rose' },
  { icon: '◆', label: 'Mini Game', note: 'Short-session formats', tone: 'violet' },
  { icon: '♠', label: 'Casino', note: 'Card and table categories', tone: 'emerald' },
  { icon: '₮', label: 'TRX WinGo', note: 'Timed round category', tone: 'cyan' },
  { icon: '⚑', label: 'MotoRace', note: 'Race-themed format', tone: 'orange' },
];

const games = [
  { name: 'WinGo', category: 'Colour & number', mark: 'W', color: 'crimson', description: 'A timed prediction-style format organised around colours and numbers. Exact rules must be checked inside the verified product.' },
  { name: 'MotoRace', category: 'Race format', mark: 'M', color: 'amber', description: 'A racing-themed category that presents numbered positions or racers. Round details vary by product version.' },
  { name: 'K3', category: 'Dice format', mark: 'K3', color: 'violet', description: 'A dice-inspired number category. Review the active round, selection types and published result rules before participating.' },
  { name: '5D', category: 'Number format', mark: '5D', color: 'blue', description: 'A multi-digit number category commonly shown in game lobbies. This website does not publish live results.' },
  { name: 'Mini Games', category: 'Quick play', mark: '★', color: 'green', description: 'A collection area for shorter entertainment formats. Available titles can change and require operator confirmation.' },
  { name: 'Casino', category: 'Table-style games', mark: '♠', color: 'dark', description: 'A general category for card and table-style titles. Provider, rules and availability are not yet verified.' },
];

const registerSteps = [
  ['01', 'Open the verified register page', 'Use only the destination published by the confirmed operator. Check the full domain before entering any details.'],
  ['02', 'Enter eligible account details', 'The real flow may request a phone number or email. The exact fields have not yet been supplied for this project.'],
  ['03', 'Complete verification', 'If an OTP is used, enter it only on the verified page. Never share an OTP or password with another person.'],
  ['04', 'Create a strong password', 'Use a unique password and avoid reusing credentials from banking, email or social accounts.'],
  ['05', 'Read the product terms', 'Review age, location, identity, payment and responsible-play terms before creating an account.'],
  ['06', 'Enter the game lobby', 'Browse rules and limits first. Live access remains disabled on this information site until links are verified.'],
];

const loginSteps = [
  ['1', 'Follow the verified login link', 'Do not sign in through forwarded links or lookalike domains.'],
  ['2', 'Enter your registered details', 'Use the phone number or email connected to your own account.'],
  ['3', 'Confirm the secure session', 'Check the address bar and avoid saving passwords on shared devices.'],
  ['4', 'Review account activity', 'After sign-in, inspect recent activity and contact verified support if anything looks unfamiliar.'],
];

const faqs = [
  ['What is Shree Win Game?', 'Shree Win Game is the working brand concept for this gaming information hub. It is designed to explain categories, account journeys, app-install checks and safety guidance. Live operator facts and access links still require verification.'],
  ['Is this the official Shree Win website?', 'No official-status claim is made here. The domain concept is shree-win-game.net, but operator ownership, licensing and official URLs must be independently confirmed before launch.'],
  ['How can I register or log in?', 'The page explains the typical steps, but its buttons intentionally lead to a verification notice. Supply the confirmed operator URLs and terms before those actions are enabled.'],
  ['Which games are covered?', 'The current guide covers WinGo, K3, 5D, TRX WinGo, MotoRace, mini games, lottery and casino-style categories. Availability and exact rules may differ in the real product.'],
  ['Where can I download the Shree Win app?', 'No APK or app-store link is published yet. Only add a download after the file source, publisher, permissions, checksum and current version are verified.'],
  ['Are bonuses or withdrawals guaranteed?', 'No. This site does not promise bonuses, payouts, withdrawal times, win rates or earnings. Any future promotion must include verified terms, dates and eligibility.'],
  ['What should I check before playing?', 'Confirm local eligibility, age rules, operator identity, game rules, spending limits, payment terms, privacy policy and support channels. Never treat gaming as a source of income.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shree Win Game home"><span className="brand-crown">♛</span><span><b>SHREE WIN</b><small>GAME</small></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#games">Games</a><a href="#register">Register guide</a><a href="#app">App guide</a><a href="#faq">FAQ</a></nav>
      <div className="account-actions" id="account"><a className="btn btn-ghost" href="#access-note">Login</a><a className="btn btn-gold" href="#access-note">Register</a></div>
    </header>

    <section className="hero" id="home">
      <div className="hero-art"><img src="/shree-win-hero-v2.png" alt="Modern phone showing an abstract Shree Win Game lobby with game symbols" fetchPriority="high" /></div>
      <div className="hero-copy"><p className="eyebrow"><span /> SHREE WIN GAME GUIDE</p><h1>Your complete guide to <em>Shree Win Game.</em></h1><p className="hero-text">Explore game categories, understand the login and registration journey, check safer app-install steps, and find clear answers—all in one fast, modern information hub.</p><div className="hero-actions"><a className="btn btn-gold btn-large" href="#games">Explore games <span>→</span></a><a className="text-link light" href="#register">Start with the guide <span>↘</span></a></div><p className="verification-note">18+ only · Check local eligibility · Live access links pending verification</p></div>
      <div className="trust-strip"><span>◆</span><p><strong>Information first</strong><small>Clear categories and walkthroughs</small></p><i/><span>◎</span><p><strong>Mobile ready</strong><small>Fast on phones and desktops</small></p><i/><span>⌁</span><p><strong>Claim-safe content</strong><small>No invented rewards or payout claims</small></p></div>
    </section>

    <section className="notice-bar" aria-label="Important website status"><span>i</span><p><strong>Independent launch concept:</strong> Product links, operator identity, promotions, payments, licensing and app files are intentionally withheld until verified.</p><a href="#verification">See checklist →</a></section>

    <section className="section intro-section" id="about">
      <div className="intro-copy"><p className="eyebrow">WELCOME TO THE HUB</p><h2>What is Shree Win Game?</h2><p className="lead">Shree Win Game is presented here as a structured gaming guide and brand concept for <strong>shree-win-game.net</strong>.</p><p>The experience brings the most searched journeys—Shree Win Game login, register, app information, game categories and help—into a single easy-to-navigate page. It follows the rich content structure users expect from modern gaming portals while avoiding facts that have not been confirmed.</p><p>Before the site becomes transactional, the operator should provide its legal name, terms, privacy policy, age and location rules, responsible-play controls, verified support routes, game providers, payment terms and secure account URLs.</p><div className="topic-chips"><span>Shree Win Login</span><span>Shree Win Register</span><span>Game Guides</span><span>App Safety</span><span>Responsible Play</span></div></div>
      <aside className="fact-card"><p>CONTENT STATUS</p><h3>Built for launch.<br/>Waiting on verification.</h3><ul><li><span>✓</span> Brand design and responsive UI</li><li><span>✓</span> Search-ready information structure</li><li><span>✓</span> Game-category placeholders</li><li><span>○</span> Official operator details</li><li><span>○</span> Login, register and APK URLs</li><li><span>○</span> Promotions and payment terms</li></ul><a href="#verification">Review launch checklist</a></aside>
    </section>

    <section className="section category-section" aria-labelledby="categories-title">
      <div className="section-heading"><div><p className="eyebrow">FIND YOUR FORMAT</p><h2 id="categories-title">Game categories</h2></div><p>Move from number-based rounds to race, dice and table-style categories. These tiles describe navigation concepts—not verified availability.</p></div>
      <div className="category-grid">{categories.map((item) => <a className={`category-card ${item.tone}`} href="#games" key={item.label}><span className="category-icon">{item.icon}</span><strong>{item.label}</strong><small>{item.note}</small><b>↗</b></a>)}</div>
    </section>

    <section className="catalogue-visual"><img src="/shree-win-games-v2.png" alt="Premium 3D collection representing lottery, racing, dice, cards and arcade games" loading="lazy"/><div><p className="eyebrow">ONE LOBBY CONCEPT</p><h2>Different moods.<br/>One clear catalogue.</h2><p>Each category below explains what users may expect to see. The final site should link every title to its verified rules page.</p><a href="#games">Browse the catalogue <span>↓</span></a></div></section>

    <section className="section games-section" id="games" aria-labelledby="games-title">
      <div className="section-heading"><div><p className="eyebrow">SHREE WIN GAME CATALOGUE</p><h2 id="games-title">Popular game guides</h2></div><p>Helpful overviews with careful wording. No result, earning or outcome is promised.</p></div>
      <div className="game-grid">{games.map((game, index) => <article className="game-card" key={game.name}><div className={`game-visual ${game.color}`}><span className="game-lines"/><b>{game.mark}</b>{index === 0 && <small>START HERE</small>}</div><div className="game-info"><div><p>{game.category}</p><h3>{game.name}</h3><span>{game.description}</span></div><a href="#access-note" aria-label={`Read the ${game.name} guide`}>Read guide →</a></div></article>)}</div>
    </section>

    <section className="feature-section" id="trx"><div className="feature-copy"><p className="eyebrow">FEATURED FORMAT</p><h2>TRX WinGo</h2><p>TRX WinGo is treated as a timed, round-based category within this concept. Before publishing a full rules page, confirm the operator’s round duration, result source, selection types, settlement method, provider identity and dispute process.</p><div className="feature-points"><span>01 <b>Check the active round</b></span><span>02 <b>Read every selection rule</b></span><span>03 <b>Set a personal limit</b></span></div><a className="btn btn-light" href="#access-note">Open verified guide <span>→</span></a></div><div className="feature-dial" aria-hidden="true"><span>TRX</span><b>WINGO</b><i>01</i><i>03</i><i>05</i><i>07</i></div></section>

    <section className="section guide-section" id="register">
      <div className="guide-heading"><p className="eyebrow">SHREE WIN REGISTER</p><h2>Registration, explained step by step.</h2><p>This is a generic safety-first walkthrough until the real Shree Win Game account flow is verified.</p></div>
      <div className="steps-grid">{registerSteps.map(([number,title,copy]) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="login-section" id="login"><div className="phone-mock" aria-hidden="true"><div className="phone-notch"/><div className="mock-logo">♛<b>SHREE WIN</b></div><div className="mock-tabs"><span>Phone</span><i>Email</i></div><div className="mock-field">+91 &nbsp; Mobile number</div><div className="mock-field">••••••••</div><div className="mock-button">LOG IN</div><small>Illustrative interface only</small></div><div className="login-copy"><p className="eyebrow">SHREE WIN LOGIN</p><h2>Return to your account with care.</h2><p>Login pages are common phishing targets. A polished screen is not proof of authenticity—verify the domain, certificate, operator and support information before entering credentials.</p><div className="login-steps">{loginSteps.map(([number,title,copy]) => <div key={number}><span>{number}</span><p><strong>{title}</strong><small>{copy}</small></p></div>)}</div><a className="btn btn-wine" href="#access-note">Login link pending verification →</a></div></section>

    <section className="section app-section" id="app"><div className="app-heading"><p className="eyebrow">SHREE WIN APP / APK</p><h2>Download only after the source is verified.</h2><p>An APK can request broad device permissions. The final download page should publish the operator, version, date, file size, checksum, signature information, installation steps and update policy.</p></div><div className="app-grid"><article><span>01</span><h3>Confirm the publisher</h3><p>Match the app publisher with verified operator documents and support channels.</p></article><article><span>02</span><h3>Inspect the file details</h3><p>Show the current version, release date, file size and SHA-256 checksum.</p></article><article><span>03</span><h3>Review permissions</h3><p>Question permissions unrelated to the app’s documented functionality.</p></article><article><span>04</span><h3>Keep the device protected</h3><p>Use device security, install updates, and avoid modified or forwarded APK files.</p></article></div><div className="download-placeholder"><div><span>APK</span><p><strong>Shree Win Game for Android</strong><small>Version, size and checksum not yet supplied</small></p></div><a href="#access-note">Download unavailable</a></div></section>

    <section className="section verification-section" id="verification"><div><p className="eyebrow">BEFORE GOING LIVE</p><h2>Verification checklist</h2><p>A content-heavy gaming site also needs clear ownership and accountability. Publish these items before switching on account, payment, promotion or download journeys.</p></div><ul><li>Legal operator name and business address</li><li>Official domain and product ownership evidence</li><li>Applicable licence or regulatory statement</li><li>Age and location eligibility rules</li><li>Complete game rules and provider details</li><li>Deposit, withdrawal and refund terms</li><li>KYC, privacy and data-retention policies</li><li>Responsible-play limits and self-exclusion</li><li>Verified support and complaint escalation</li><li>Promotion terms, dates and eligibility</li></ul></section>

    <section className="responsible-section"><div><span>18+</span></div><div><p className="eyebrow">PLAY RESPONSIBLY</p><h2>Entertainment should stay entertainment.</h2><p>Set time and spending limits before starting. Never chase losses, borrow money to play, or treat a random outcome as income. Stop when play causes stress, secrecy, debt or conflict, and use local support resources where appropriate.</p></div><a href="#faq">Read safety FAQ →</a></section>

    <section className="section faq-section" id="faq"><div className="faq-heading"><p className="eyebrow">CLEAR ANSWERS</p><h2>Shree Win Game FAQ</h2><p>Answers for the most common search questions, with assumptions labelled and risky claims removed.</p></div><div className="faq-list">{faqs.map(([question,answer], index) => <details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <section className="cta-section" id="access-note"><p className="eyebrow">READY FOR THE NEXT STEP?</p><h2>Connect the verified product.</h2><p>Supply confirmed login, registration and app links plus operator documents. Then the placeholders can become secure, functional journeys.</p><div><a className="btn btn-gold btn-large" href="#verification">Review requirements</a><a className="text-link light" href="#home">Back to top ↑</a></div></section>

    <footer><div className="footer-main"><div><a className="brand footer-brand" href="#home"><span className="brand-crown">♛</span><span><b>SHREE WIN</b><small>GAME</small></span></a><p>Independent gaming information and launch concept for shree-win-game.net.</p></div><nav aria-label="Game links"><strong>Explore</strong><a href="#games">Games</a><a href="#register">Register guide</a><a href="#login">Login guide</a><a href="#app">App guide</a></nav><nav aria-label="Information links"><strong>Information</strong><a href="#about">About this concept</a><a href="#verification">Verification</a><a href="#faq">FAQ</a><a href="#access-note">Responsible play</a></nav></div><div className="footer-bottom"><span>© 2026 Shree Win Game concept. No official-status claim is made.</span><span>18+ · Check local eligibility · Play responsibly</span></div></footer>
    <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#home"><span>⌂</span>Home</a><a href="#games"><span>◆</span>Games</a><a className="mobile-play" href="#register"><span>▶</span>Start</a><a href="#app"><span>↓</span>App</a><a href="#faq"><span>?</span>Help</a></nav>
  </main>;
}
