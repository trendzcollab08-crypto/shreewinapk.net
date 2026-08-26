import type { Metadata } from 'next';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageShell } from '../components/SiteChrome';

export const metadata: Metadata = {
  title: 'Shree Win Promotion | Agency & Invitation Program',
  description: 'Understand Shree Win Promotion, the invitation relationship, six agency levels, team activity, commission calculation and active promotion terms.',
  alternates: { canonical: '/promotion' },
  openGraph: { title: 'Shree Win Promotion & Agency', description: 'Understand invitations, agency levels and current promotion terms.', url: '/promotion', images: [] },
  twitter: { card: 'summary', title: 'Shree Win Promotion & Agency', description: 'Understand invitations, agency levels and current promotion terms.', images: [] },
};

const agencySteps = [
  ['01','Invitation relationships','The agency structure can include up to six subordinate levels. A direct invite is Level 1; later relationships follow the hierarchy explained in the active agency terms.'],
  ['02','Invitation link or code','Friends must use the invitation link or enter the invitation code during registration for the relationship to be recorded.'],
  ['03','Qualifying activity','A new account may need to complete a stated qualifying action before it contributes to promotion calculations. Check the active terms.'],
  ['04','Calculation and collection','The product may calculate eligible activity on a daily schedule and show collection records in the promotion or account area.'],
  ['05','Agency level criteria','Agency levels can depend on team count, team activity and qualifying amounts over the stated measurement period.'],
  ['06','Commission percentage','The applicable percentage can vary by membership level, game type, qualifying action and current promotion rules.'],
  ['07','Ranking activity','Separate ranking campaigns may appear for eligible participants. Dates and reward details belong to the active campaign.'],
  ['08','Final terms','Shree Win retains the final interpretation of a promotion subject to applicable terms and consumer rights.'],
];

const levels=['L0','L1','L2','L3','L4','L5','L6'];

export default function PromotionPage(){return <PageShell active="promotion"><main>
  <section className="inner-hero promo-hero"><Breadcrumbs items={[{label:'Home',href:'/'},{label:'Promotion'}]}/><div className="promo-hero-grid"><div><span className="kicker"><i/> SHREE WIN PROMOTION</span><h1>Invitations and agency levels,<br/><em>made easier to understand.</em></h1><p>Learn how invitation relationships, qualifying activity, team metrics, agency levels and commission calculations are organised.</p><div className="hero-ctas"><a className="primary-button" href="#agency-steps">How Agency Works</a><a className="text-button" href="#agency-levels">View Levels →</a></div></div><div className="agency-art" aria-hidden="true"><div className="agency-core">YOU</div><span className="node n1">L1</span><span className="node n2">L2</span><span className="node n3">L3</span><span className="node n4">L4</span><span className="node n5">L5</span><span className="node n6">L6</span></div></div></section>

  <section className="promotion-overview"><article><i>🔗</i><b>Invitation Link</b><p>Share the link or invitation code supplied inside your account.</p></article><article><i>👥</i><b>Six-Level Structure</b><p>Understand direct and extended invitation relationships.</p></article><article><i>♛</i><b>Agency Levels</b><p>Review L0–L6 status and the currently displayed criteria.</p></article><article><i>▦</i><b>Collection Records</b><p>Track eligible calculated activity in the product records.</p></article></section>

  <section className="content-section agency-section" id="agency-steps"><div className="section-title"><span>AGENCY EXPLAINED</span><h2>Eight points to understand before participating.</h2><p>This page rewrites the in-product Agency information into a clearer desktop and mobile format.</p></div><div className="agency-step-grid">{agencySteps.map(([num,title,copy])=><article key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>

  <section className="level-section" id="agency-levels"><div className="level-heading"><span>AGENCY LEVELS</span><h2>L0 to L6 at a glance.</h2><p>The screenshots show seven status rows. The live promotion table should be used for the current team-count, activity, qualifying-amount and percentage requirements.</p></div><div className="level-table" role="table" aria-label="Shree Win agency levels"><div className="level-row head" role="row"><b>Agency level</b><b>Team criteria</b><b>Activity criteria</b><b>Current rate</b></div>{levels.map((level,i)=><div className="level-row" role="row" key={level}><b><span>♛</span>{level}</b><p>{i===0?'Base account':'Displayed in Promotion'}</p><p>{i===0?'No team requirement':'Check active terms'}</p><a href="#current-terms">View in product</a></div>)}</div><p className="table-note">Criteria and percentages are intentionally not hard-coded because active promotion rules can change. Use the current in-product table before making a decision.</p></section>

  <section className="content-section invite-flow"><div className="section-title"><span>INVITATION FLOW</span><h2>How an invitation relationship is recorded.</h2></div><div className="flow-track"><article><span>1</span><h3>Open Promotion</h3><p>Find your personal invitation link or invitation code.</p></article><i>→</i><article><span>2</span><h3>Share accurately</h3><p>Send the provided link or code without editing it.</p></article><i>→</i><article><span>3</span><h3>Friend registers</h3><p>The invitee uses the link or enters the code during registration.</p></article><i>→</i><article><span>4</span><h3>Terms are applied</h3><p>Eligible activity is evaluated under the current promotion rules.</p></article></div></section>

  <section className="current-terms" id="current-terms"><div><span>READ BEFORE PARTICIPATING</span><h2>Current terms always take priority.</h2><p>Promotion availability, agency levels, qualifying actions, excluded activity, percentages, calculation times, collection windows, expiry and ranking rewards may change. Read the complete terms shown with the live promotion.</p></div><ul><li>Confirm start and end dates</li><li>Check who is eligible</li><li>Review qualifying activity</li><li>Understand excluded activity</li><li>Check calculation and collection times</li><li>Save the promotion terms</li></ul></section>

  <section className="content-section faq-section"><div className="section-title"><span>PROMOTION FAQ</span><h2>Agency questions, answered.</h2></div><div className="faq-grid"><details open><summary>How many subordinate levels are described?<span>+</span></summary><p>The supplied Agency screen describes six subordinate levels. Direct invitees are Level 1; later relationships follow the hierarchy defined in the terms.</p></details><details><summary>Why must an invitee use my link or code?<span>+</span></summary><p>The invitation link or code connects a qualifying registration to the inviter’s agency relationship.</p></details><details><summary>When is commission calculated?<span>+</span></summary><p>The supplied screen references a daily calculation schedule, but the current product record and active terms should be checked for the applicable time.</p></details><details><summary>What determines an agency level?<span>+</span></summary><p>The promotion screen references team count, team activity and qualifying amounts. Exact thresholds and rates belong to the current table.</p></details><details><summary>Are promotion rewards guaranteed?<span>+</span></summary><p>No. Eligibility, validation, exclusions and reward calculation follow the active promotion terms.</p></details><details><summary>Where can I see my records?<span>+</span></summary><p>Eligible calculation and collection records should appear in the Promotion or account area when available.</p></details></div></section>

  <section className="page-cta purple"><span>DISCOVER MORE</span><h2>Explore gifts, attendance and other Shree Win activities.</h2><a className="primary-button" href="/activity">Open Activity →</a></section>
  </main></PageShell>}
