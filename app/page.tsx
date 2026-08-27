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
      <div className="hero-content"><span className="kicker"><i/> SHREE WIN GAME INFORMATION</span><h1>Understand Shree Win.<br/><em>Register with confidence.</em></h1><p>Learn about Shree Win Login, registration, the Android app, game categories, Activity, Promotion, wallet steps and responsible-play rules before creating an account.</p><div className="hero-ctas"><a className="primary-button" href="/register">Create Shree Win Account <b>→</b></a><a className="text-button" href="/login">Already registered? Login <b>↗</b></a></div><div className="hero-points"><span><b>13+</b><small>Information pages</small></span><span><b>1</b><small>Connected account journey</small></span><span><b>18+</b><small>Eligible adults only</small></span></div></div>
      <div className="hero-device"><div className="device-glow"/><div className="device-shell"><img src="/shreewin-app-home.png" alt="Shree Win Game mobile home showing recommended, mini-game and casino categories" fetchPriority="high"/></div><div className="float-card float-a"><span>✦</span><p><b>Activities</b><small>Offers in one place</small></p></div><div className="float-card float-b"><span>🎁</span><p><b>Promotions</b><small>Read active terms</small></p></div></div>
    </section>

    <section className="information-strip" aria-label="Shree Win information topics"><a href="#about-shree-win"><b>01</b><span>What is Shree Win?</span></a><a href="/register"><b>02</b><span>How to register</span></a><a href="/responsible-play"><b>03</b><span>Rules & responsible play</span></a></section>

    <section className="category-ribbon" aria-labelledby="category-title"><div className="section-title compact"><span>BEFORE YOU REGISTER</span><h2 id="category-title">Explore Shree Win Game categories</h2><p>Understand the lobby structure and open the detailed game information before creating an account.</p></div><div className="category-pills">{categories.map(([icon,title,copy,tone])=><a className={`category-pill ${tone}`} href="/games" key={title}><i>{icon}</i><p><b>{title}</b><small>{copy}</small></p><span>↗</span></a>)}</div></section>

    <section className="content-section game-showcase" id="games"><div className="section-heading"><div className="section-title"><span>SHREE WIN GAME INFORMATION</span><h2>Understand the current game selection.</h2></div><p>Learn how arcade, mini-game, lottery and casino-style categories are organised. Review each title’s active rules and risk before participating.</p><a className="section-link" href="/games">Read game information →</a></div><div className="game-card-grid">{games.map(([icon,name,type,tone])=><article className={`modern-game-card ${tone}`} key={name}><div><span className="game-emoji">{icon}</span><i>SHREE WIN</i></div><p><small>{type}</small><b>{name}</b><a href="/games">Read game details →</a></p></article>)}</div></section>

    <section className="app-preview-section"><div className="preview-phone"><img src="/shreewin-app-home.png" alt="Shree Win app lobby interface showing game categories on mobile" loading="lazy"/></div><div className="preview-content"><span className="kicker dark"><i/> SHREE WIN APP INFORMATION</span><h2>Android installation and app features explained.</h2><p>Review the app interface, current release information, installation steps, permissions and safety checks before downloading any APK.</p><ul><li><i>01</i><span><b>Check the current release</b><small>Confirm the version, file size and source on the connected download page.</small></span></li><li><i>02</i><span><b>Understand the navigation</b><small>Home, Activity, Promotion and Account remain one tap away.</small></span></li><li><i>03</i><span><b>Install carefully</b><small>Review permissions and never use an APK sent by an unknown person.</small></span></li></ul><a className="primary-button" href="/download">Read App Download Steps <b>→</b></a></div></section>

    <section className="split-features"><a className="feature-tile activity-tile" href="/activity"><div><span>ACTIVITY</span><h2>Offers, gifts and events—organised.</h2><p>Explore Activity Award, First Deposit Bonus, First Gift, Invite Wheel, gift-code redemption and attendance activities.</p><b>Open Activity →</b></div><i>✦</i></a><a className="feature-tile promo-tile" href="/promotion"><div><span>PROMOTION</span><h2>Understand invitations and agency levels.</h2><p>See how invitation relationships, qualifying actions, agency levels and commission calculations are presented.</p><b>View Promotion →</b></div><i>▣</i></a></section>

    <section className="content-section start-section"><div className="section-title centered"><span>ACCOUNT INFORMATION</span><h2>How to register for Shree Win Game</h2><p>Understand the complete account journey before submitting your details.</p></div><div className="start-grid"><article><i>01</i><span>📱</span><h3>Use your mobile number</h3><p>Register with an active number that belongs to you.</p></article><article><i>02</i><span>✓</span><h3>Complete verification</h3><p>Enter the OTP sent to your number. Never share an OTP with another person.</p></article><article><i>03</i><span>📜</span><h3>Read current terms</h3><p>Review account, activity, payment and eligibility conditions.</p></article><article><i>04</i><span>⚖</span><h3>Set personal limits</h3><p>Understand the risks and set time and spending boundaries.</p></article></div><div className="center-actions"><a className="primary-button" href="/register">Register for Shree Win</a><a className="outline-button dark" href="/login">Shree Win Login</a></div></section>

    <section className="seo-story" id="about-shree-win"><div><span className="kicker dark"><i/> ABOUT SHREE WIN GAME</span><h2>Product information, account help and rules in one place.</h2></div><div><p>Shree Win Game is an online gaming product with lottery, mini-game, arcade and casino-style categories. This website explains Shree Win Login, registration, Android app access, wallet steps, activities and promotions.</p><p>Visitors can review the lobby structure before registering, compare account-access options and read Activity, Promotion, First Deposit Bonus and responsible-play conditions in clear page text.</p><p>Some features may involve financial risk. Game availability, results, promotion eligibility and account features can change. The current information inside the live product and its terms always takes priority.</p></div></section>

    <section className="content-section faq-section" id="faq"><div className="section-title"><span>QUESTIONS, ANSWERED</span><h2>Shree Win Game FAQ</h2><p>Quick answers for Login, Register, games, Activity, Promotion and the Android app.</p></div><div className="faq-grid">{faqs.map(([q,a],index)=><details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta"><img src="/shreewin-logo.png" alt="Shree Win Game logo"/><h2>Reviewed the information? Create your Shree Win account.</h2><p>Confirm eligibility, understand the rules and keep every session within your personal limits.</p><div><a className="primary-button" href="/register">Register for Shree Win</a><a className="outline-button" href="/login">Login</a></div></section>
  </main></PageShell>;
}
