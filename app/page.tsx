import { PageShell } from './components/SiteChrome';

const categories = [
  ['🎮','Lobby','All games in one place','violet'],
  ['🎱','Lottery','Colour and number games','coral'],
  ['🐤','Popular','Frequently explored titles','cyan'],
  ['🪙','Mini Game','Quick and colourful play','gold'],
  ['🎯','Casino','Card and table categories','mint'],
];

const games = [
  ['🐉','Royal Fishing','Arcade fishing','ocean'],
  ['🏛️','Golden Empire','Adventure game','amber'],
  ['🐘','Super Rich','Classic game','lime'],
  ['💣','Mines','Mini game','blue'],
  ['🚀','Limbo','Mini game','purple'],
  ['🔻','Plinko','Mini game','teal'],
];

const faqs = [
  ['What is Shree Win Game?','Shree Win Game is an online gaming platform that organises lottery, popular, mini-game and casino-style categories inside one mobile-first lobby.'],
  ['How do I create a Shree Win account?','Open Register, enter your active mobile number, complete OTP verification, create a strong password and accept the applicable account terms.'],
  ['How do I log in?','Open Shree Win Login and enter the mobile number or email and password connected to your account. Keep your password and OTP private.'],
  ['Which games can I find on Shree Win?','The lobby includes recommended games, lottery formats, mini games and casino-style categories. The current selection is displayed inside the live lobby.'],
  ['What is the Activity section?','Activity brings eligible offers and engagement features such as activity awards, jackpot events, first-gift campaigns, invite-wheel events, gift-code redemption and attendance activities together.'],
  ['How does Shree Win Promotion work?','Promotion contains invitation and agency information. Eligibility, qualifying actions, commission levels and reward calculations follow the active terms shown inside the product.'],
  ['How can I download the Android app?','Visit Download App, review the current version and permissions, then follow the Android installation steps.'],
  ['How can I play responsibly?','Set personal time and spending limits, understand the rules of each game and never treat gaming as a source of income. Shree Win is intended only for eligible adults.'],
];

export default function Home() {
  return <PageShell active="home"><main>
    <section className="home-hero">
      <div className="hero-orb one"/><div className="hero-orb two"/>
      <div className="hero-content"><span className="kicker"><i/> SHREE WIN GAME</span><h1>One vibrant lobby.<br/><em>Many ways to play.</em></h1><p>Explore recommended games, lottery, mini games, casino categories, activities and promotions through one colourful mobile-first experience.</p><div className="hero-ctas"><a className="primary-button" href="/register">Register & Explore <b>→</b></a><a className="text-button" href="/login">Already a player? Login <b>↗</b></a></div><div className="hero-points"><span><b>5+</b><small>Game categories</small></span><span><b>1</b><small>Connected account</small></span><span><b>18+</b><small>Eligible adults only</small></span></div></div>
      <div className="hero-device"><div className="device-glow"/><div className="device-shell"><img src="/shreewin-app-home.png" alt="Shree Win Game mobile home showing recommended, mini-game and casino categories" fetchPriority="high"/></div><div className="float-card float-a"><span>✦</span><p><b>Activities</b><small>Offers in one place</small></p></div><div className="float-card float-b"><span>🎁</span><p><b>Promotions</b><small>Read active terms</small></p></div></div>
    </section>

    <section className="category-ribbon" aria-labelledby="category-title"><div className="section-title compact"><span>EXPLORE THE LOBBY</span><h2 id="category-title">Find your favourite category</h2></div><div className="category-pills">{categories.map(([icon,title,copy,tone])=><a className={`category-pill ${tone}`} href="/games" key={title}><i>{icon}</i><p><b>{title}</b><small>{copy}</small></p><span>↗</span></a>)}</div></section>

    <section className="content-section game-showcase" id="games"><div className="section-heading"><div className="section-title"><span>POPULAR ON SHREE WIN</span><h2>Games for every mood.</h2></div><p>Move from colourful arcade experiences to quick mini games and familiar casino-style categories. Browse the lobby and review each game’s active rules before playing.</p><a className="section-link" href="/games">View all games →</a></div><div className="game-card-grid">{games.map(([icon,name,type,tone])=><article className={`modern-game-card ${tone}`} key={name}><div><span className="game-emoji">{icon}</span><i>SHREE WIN</i></div><p><small>{type}</small><b>{name}</b><a href="/games">Explore game →</a></p></article>)}</div></section>

    <section className="app-preview-section"><div className="preview-phone"><img src="/shreewin-app-home.png" alt="Shree Win lobby interface on mobile" loading="lazy"/></div><div className="preview-content"><span className="kicker dark"><i/> DESIGNED AROUND MOBILE PLAY</span><h2>Your complete Shree Win lobby, always within reach.</h2><p>The app-style experience keeps recommended games, mini games, casino categories, activity and promotion areas organised through a familiar bottom navigation.</p><ul><li><i>01</i><span><b>Discover games quickly</b><small>Clear category navigation keeps the current lobby easy to explore.</small></span></li><li><i>02</i><span><b>Move between key areas</b><small>Home, Activity, Promotion and Account stay one tap away.</small></span></li><li><i>03</i><span><b>Use one account journey</b><small>Access Login, Register and app information from any page.</small></span></li></ul><a className="primary-button" href="/download">Download App <b>→</b></a></div></section>

    <section className="split-features"><a className="feature-tile activity-tile" href="/activity"><div><span>ACTIVITY</span><h2>Offers, gifts and events—organised.</h2><p>Explore Activity Award, First Deposit Bonus, First Gift, Invite Wheel, gift-code redemption and attendance activities.</p><b>Open Activity →</b></div><i>✦</i></a><a className="feature-tile promo-tile" href="/promotion"><div><span>PROMOTION</span><h2>Understand invitations and agency levels.</h2><p>See how invitation relationships, qualifying actions, agency levels and commission calculations are presented.</p><b>View Promotion →</b></div><i>▣</i></a></section>

    <section className="content-section start-section"><div className="section-title centered"><span>GET STARTED</span><h2>From account creation to the lobby.</h2><p>Use the Shree Win account journey in four simple steps.</p></div><div className="start-grid"><article><i>01</i><span>📱</span><h3>Create an account</h3><p>Register with an active mobile number and create a strong password.</p></article><article><i>02</i><span>✓</span><h3>Complete verification</h3><p>Enter the OTP sent to your number. Never share an OTP with another person.</p></article><article><i>03</i><span>🎮</span><h3>Explore the lobby</h3><p>Browse recommended, lottery, mini-game and casino categories.</p></article><article><i>04</i><span>⚖</span><h3>Play responsibly</h3><p>Read the game rules and set personal time and spending limits.</p></article></div><div className="center-actions"><a className="primary-button" href="/register">Create Shree Win Account</a><a className="outline-button dark" href="/login">Shree Win Login</a></div></section>

    <section className="seo-story"><div><span className="kicker dark"><i/> ABOUT SHREE WIN GAME</span><h2>Games, activities and promotions in one connected experience.</h2></div><div><p>Shree Win Game brings the journeys players look for most—game discovery, Shree Win Login, account registration, Android app access, activities and promotions—into a clean website built for both mobile and desktop.</p><p>On the homepage, visitors can understand the lobby structure and move directly to detailed pages. The Activity page explains the purpose of rewards and events, while Promotion explains invitation relationships and agency levels without hiding important terms.</p><p>Game availability, results, promotion eligibility and account features can change. The current information inside the live product and its terms always takes priority.</p></div></section>

    <section className="content-section faq-section" id="faq"><div className="section-title"><span>QUESTIONS, ANSWERED</span><h2>Shree Win Game FAQ</h2><p>Quick answers for Login, Register, games, Activity, Promotion and the Android app.</p></div><div className="faq-grid">{faqs.map(([q,a],index)=><details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta"><img src="/shreewin-logo.png" alt="ShreeWin"/><h2>Ready to enter the Shree Win experience?</h2><p>Create your account, explore the lobby and keep every session balanced.</p><div><a className="primary-button" href="/register">Register Now</a><a className="outline-button" href="/login">Login</a></div></section>
  </main></PageShell>;
}
