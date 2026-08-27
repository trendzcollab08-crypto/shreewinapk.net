import type { Metadata } from 'next';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageShell } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: 'Shree Win Activity | Awards, Gifts & Attendance',
  description: 'Explore Shree Win Activity features including Activity Award, Super Jackpot, First Gift, Invite Wheel, gift-code redemption and attendance activities.',
  alternates: { canonical: '/activity' },
  openGraph: { title: 'Shree Win Activity', description: 'Awards, gifts, events and attendance activities in one place.', url: '/activity', images: [] },
  twitter: { card: 'summary', title: 'Shree Win Activity', description: 'Awards, gifts, events and attendance activities in one place.', images: [] },
};

const activities = [
  ['🏅','Activity Award','Explore current activity-based award campaigns and review their complete eligibility rules.','coral'],
  ['🏆','Super Jackpot','View time-limited jackpot-style events and their active participation terms.','mint'],
  ['🎁','First Gift','See introductory gift campaigns available to eligible accounts.','purple'],
  ['🎡','Invite Wheel','Open invitation-based wheel activities when they appear in the live Activity area.','gold'],
  ['🎟️','Gift Code','Enter a valid redemption code and review the reward details before confirming.','red'],
  ['📅','Attendance','Check consecutive sign-in activities, progress and the active reward calendar.','blue'],
];

const faqs = [
  ['What is the Shree Win Activity page?','It is the central area for eligible events, gifts, attendance activities, invitation events and other time-limited campaigns.'],
  ['How do gift codes work?','Enter an active code in the Gift area. A valid code, its eligibility and any reward details are confirmed by the live product before redemption.'],
  ['What is an attendance activity?','Attendance activities can track eligible daily sign-ins across a stated period. The current calendar, continuity rules and reward details appear in the activity terms.'],
  ['Are all activities available to every account?','Not necessarily. Eligibility can depend on account status, location, dates, qualifying actions and the specific campaign terms.'],
  ['Where can I see the final reward amount?','The live Activity page and the terms attached to a campaign are the source of truth for reward amounts, progress and expiry.'],
];

export default function ActivityPage(){return <PageShell active="activity"><main>
  <section className="inner-hero activity-hero"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Activity'}]}/><div className="inner-hero-grid"><div><span className="kicker"><i/> SHREE WIN ACTIVITY</span><h1>Every event and activity,<br/><em>beautifully organised.</em></h1><p>Discover Activity Award, Super Jackpot, First Gift, Invite Wheel, Gift Code and Attendance features through one clear page.</p><div className="hero-ctas"><a className="primary-button" href="#activity-list">Explore Activity</a><a className="text-button" href="#activity-rules">Read Activity Rules →</a></div></div><div className="activity-device"><img src="/shreewin-app-activity.png" alt="Shree Win Activity mobile screen showing activity awards, gift codes and attendance bonus" fetchPriority="high"/></div></div></section>

  <section className="activity-shortcuts" id="activity-list">{activities.slice(0,3).map(([icon,title,,tone])=><a className={tone} href={`#${title.toLowerCase().replaceAll(' ','-')}`} key={title}><i>{icon}</i><span>{title}</span><b>↗</b></a>)}<a className="gold" href="/first-deposit-bonus"><i>₹</i><span>First Deposit Bonus</span><b>↗</b></a></section>

  <section className="content-section"><div className="section-heading"><div className="section-title"><span>ACTIVITY CENTRE</span><h2>Explore current activity types.</h2></div><p>Each Activity tile opens a dedicated campaign experience. Dates, eligibility, qualifying actions and reward values are controlled by the active terms.</p></div><div className="activity-card-grid">{activities.map(([icon,title,copy,tone])=><article id={title.toLowerCase().replaceAll(' ','-')} className={`activity-card ${tone}`} key={title}><div><span>{icon}</span><i>SHREE WIN</i></div><h3>{title}</h3><p>{copy}</p><a href="#activity-rules">View how it works →</a></article>)}</div></section>

  <section className="gift-attendance"><article className="gift-panel"><div><span>GIFT REDEMPTION</span><h2>Have a Shree Win gift code?</h2><p>Open the Gift area, enter an active redemption code exactly as issued and review the confirmation before redeeming.</p><ol><li><i>1</i>Open the Gift activity</li><li><i>2</i>Enter the redemption code</li><li><i>3</i>Confirm eligibility and expiry</li></ol><a className="primary-button" href="#activity-rules">View Gift Rules</a></div><i>🎟️</i></article><article className="attendance-panel"><div><span>ATTENDANCE ACTIVITY</span><h2>Keep track of eligible sign-ins.</h2><p>Attendance campaigns may use consecutive sign-in days. Open the active calendar to see progress, continuity conditions and reward details.</p><div className="calendar-row">{['D1','D2','D3','D4','D5','D6','D7'].map((d,i)=><b className={i<3?'done':''} key={d}>{i<3?'✓':d}</b>)}</div><a href="#activity-rules">Read Attendance Terms →</a></div><i>📅</i></article></section>

  <section className="content-section activity-rules" id="activity-rules"><div className="section-title"><span>BEFORE YOU PARTICIPATE</span><h2>How Shree Win activities work.</h2><p>Use these checks for every campaign shown in the Activity area.</p></div><div className="rule-grid"><article><i>01</i><h3>Open the active campaign</h3><p>Campaigns can be time-limited. Check the displayed start and end dates.</p></article><article><i>02</i><h3>Read the eligibility</h3><p>Confirm account, age, location and qualifying-action requirements.</p></article><article><i>03</i><h3>Track progress in Activity</h3><p>Use the live status shown in your Activity or account area.</p></article><article><i>04</i><h3>Review reward conditions</h3><p>Check validity, crediting, use and expiry conditions before participating.</p></article><article><i>05</i><h3>Avoid duplicate participation</h3><p>Follow any one-account, one-device or invitation restrictions stated in the terms.</p></article><article><i>06</i><h3>Keep confirmation records</h3><p>Save the campaign name and confirmation if you need to contact support.</p></article></div><div className="terms-callout"><b>Important:</b><p>Activity labels shown on this website describe product areas. The active in-product campaign page decides availability, eligibility, reward value, expiry and final interpretation.</p></div></section>

  <section className="content-section faq-section"><div className="section-title"><span>ACTIVITY FAQ</span><h2>Common activity questions</h2></div><div className="faq-grid">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

  <section className="page-cta"><span>MORE TO EXPLORE</span><h2>See invitations, agency levels and promotion terms.</h2><a className="primary-button" href="/promotion">Open Promotion →</a></section>
  </main></PageShell>}
