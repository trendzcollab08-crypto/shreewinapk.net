const categories = [
  { icon: '◆', label: 'Lottery', note: 'Draw-style games', tone: 'gold' },
  { icon: '✦', label: 'Popular', note: 'Browse highlights', tone: 'rose' },
  { icon: '●', label: 'Mini Game', note: 'Quick-play titles', tone: 'violet' },
  { icon: '♠', label: 'Casino', note: 'Table-style games', tone: 'emerald' },
  { icon: '₮', label: 'TRX WinGo', note: 'Round-based play', tone: 'cyan' },
  { icon: '⚑', label: 'MotoRace', note: 'Racing category', tone: 'orange' },
];
const games = [
  { name: 'WinGo', category: 'Lottery', mark: 'W', color: 'crimson' },
  { name: 'MotoRace', category: 'Race', mark: 'M', color: 'amber' },
  { name: 'K3', category: 'Dice', mark: 'K3', color: 'violet' },
  { name: '5D', category: 'Number', mark: '5D', color: 'blue' },
  { name: 'Mini Games', category: 'Quick play', mark: '★', color: 'green' },
  { name: 'Casino', category: 'Table games', mark: '♠', color: 'dark' },
];
const promos = [
  { kicker: 'Getting started', title: 'Explore the game lobby', copy: 'Browse categories and learn how each game format is organised before you play.', number: '01' },
  { kicker: 'Account access', title: 'Login & registration', copy: 'Use the account area when verified access links and eligibility details are available.', number: '02' },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Shree Win Game home"><span className="brand-crown" aria-hidden="true">♛</span><span><b>SHREE WIN</b><small>GAME</small></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#games">Games</a><a href="#promotions">Promotions</a><a href="#guide">How it works</a></nav>
      <div className="account-actions" id="account"><a className="btn btn-ghost" href="#access-note">Login</a><a className="btn btn-gold" href="#access-note">Register</a></div>
    </header>
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy"><p className="eyebrow"><span /> ONE PLACE. MANY GAMES.</p><h1>Play your way.<br/><em>Own the moment.</em></h1><p className="hero-text">Discover Shree Win Game categories, explore popular formats, and find clear guides in one fast, mobile-friendly experience.</p><div className="hero-actions"><a className="btn btn-gold btn-large" href="#games">Explore games <span>→</span></a><a className="text-link" href="#guide">See how it works <span>↘</span></a></div><p className="verification-note">18+ only · Availability and rules may vary by location</p></div>
      <div className="hero-art" aria-label="Decorative gaming artwork"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="token token-back"><span>7</span></div><div className="token token-main"><span>SW</span><small>GAME</small></div><div className="playing-card card-one">A<small>♠</small></div><div className="playing-card card-two">K<small>♦</small></div><span className="spark spark-a">✦</span><span className="spark spark-b">✦</span><span className="spark spark-c">•</span></div>
      <div className="trust-strip"><span>◆</span><p><strong>Explore responsibly</strong><small>Check local eligibility and game rules</small></p><i/><span>◎</span><p><strong>Mobile ready</strong><small>Designed for phones and desktops</small></p><i/><span>⌁</span><p><strong>Clear information</strong><small>No unverified reward claims</small></p></div>
    </section>
    <section className="section category-section" aria-labelledby="categories-title"><div className="section-heading"><div><p className="eyebrow">FIND YOUR FAVOURITE</p><h2 id="categories-title">Game categories</h2></div><p>Move from quick rounds to familiar table-style formats. Select a category to explore the current demo catalogue.</p></div><div className="category-grid">{categories.map((item) => <a className={`category-card ${item.tone}`} href="#games" key={item.label}><span className="category-icon">{item.icon}</span><strong>{item.label}</strong><small>{item.note}</small><b>↗</b></a>)}</div></section>
    <section className="section games-section" id="games" aria-labelledby="games-title"><div className="section-heading compact"><div><p className="eyebrow">CURATED FOR YOU</p><h2 id="games-title">Recommended games</h2></div><a className="text-link" href="#all-games">View all <span>→</span></a></div><div className="game-grid" id="all-games">{games.map((game, index) => <article className="game-card" key={game.name}><div className={`game-visual ${game.color}`}><span className="game-lines"/><b>{game.mark}</b>{index === 0 && <small>POPULAR</small>}</div><div className="game-info"><div><h3>{game.name}</h3><p>{game.category}</p></div><a href="#access-note" aria-label={`View ${game.name}`}>→</a></div></article>)}</div></section>
    <section className="section feature-section" id="guide"><div className="feature-panel"><div className="feature-copy"><p className="eyebrow">FEATURED FORMAT</p><h2>TRX WinGo</h2><p>A round-based game category presented here for navigation and information. Rules, timing, access, and availability must be confirmed from the product operator before launch.</p><a className="btn btn-light" href="#access-note">Read game guide <span>→</span></a></div><div className="feature-dial" aria-hidden="true"><span>TRX</span><b>WINGO</b><i>01</i><i>03</i><i>05</i><i>07</i></div></div></section>
    <section className="section promo-section" id="promotions" aria-labelledby="promotions-title"><div className="section-heading compact"><div><p className="eyebrow">USEFUL STARTING POINTS</p><h2 id="promotions-title">Highlights</h2></div></div><div className="promo-grid">{promos.map((promo) => <article className="promo-card" key={promo.number}><span>{promo.number}</span><div><p>{promo.kicker}</p><h3>{promo.title}</h3><div className="gold-rule"/><p className="promo-copy">{promo.copy}</p><a href="#access-note">Learn more →</a></div></article>)}</div><div className="access-note" id="access-note"><strong>Launch note</strong><p>Login, registration, downloads, promotions, payment details, and live game access remain placeholders until verified operator information and destination URLs are supplied.</p></div></section>
    <footer><div className="footer-main"><a className="brand footer-brand" href="#home"><span className="brand-crown">♛</span><span><b>SHREE WIN</b><small>GAME</small></span></a><p>Explore Shree Win Game categories and guides through a fast, focused interface.</p><nav aria-label="Footer navigation"><a href="#games">Games</a><a href="#promotions">Highlights</a><a href="#guide">Game guide</a><a href="#access-note">Responsible play</a></nav></div><div className="footer-bottom"><span>© 2026 Shree Win Game concept. All rights reserved.</span><span>18+ · Play responsibly</span></div></footer>
    <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#home"><span>⌂</span>Home</a><a href="#games"><span>◆</span>Games</a><a className="mobile-play" href="#games"><span>▶</span>Play</a><a href="#promotions"><span>✦</span>Offers</a><a href="#account"><span>●</span>Account</a></nav>
  </main>;
}
