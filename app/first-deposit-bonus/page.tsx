import type { Metadata } from 'next';
import { PageShell } from '../components/SiteChrome';
import { FaqBlock, InfoHero, ProductNotice } from '../components/InfoBlocks';

export const metadata:Metadata={
  title:'Shree Win First Deposit Bonus | Tiers & Activity Rules',
  description:'See the Shree Win first deposit bonus tiers shown in the supplied activity screen: ₹300, ₹500, ₹1,000 and ₹5,000, plus eligibility and turnover rules.',
  alternates:{canonical:'/first-deposit-bonus'},
  openGraph:{title:'Shree Win First Deposit Bonus',description:'Deposit tiers and complete activity rules in one readable page.',url:'/first-deposit-bonus',images:[]},
  twitter:{card:'summary',title:'Shree Win First Deposit Bonus',description:'Deposit tiers and complete activity rules in one readable page.',images:[]},
};

const tiers=[
  {deposit:'₹300',bonus:'₹48',label:'First deposit 300'},
  {deposit:'₹500',bonus:'₹108',label:'First deposit 500'},
  {deposit:'₹1,000',bonus:'₹188',label:'First deposit 1000'},
  {deposit:'₹5,000',bonus:'₹488',label:'First deposit 5000'},
];
const rules=[
  ['One first-recharge opportunity','The activity is limited to the account’s first eligible recharge and can be received only once.'],
  ['Manual claim','The supplied screen states that an eligible reward must be claimed manually on supported iOS, Android, H5 or desktop access.'],
  ['Turnover requirement','The bonus portion, excluding the deposited principal, requires one-times valid-bet turnover before withdrawal under the displayed rule.'],
  ['One genuine account holder','Account renting, automated tools, plug-ins, bots, multi-account play, collusion, arbitrage and technical exploitation are prohibited.'],
  ['Invalid participation','Activity rewards may be cancelled, deducted or frozen where the live rules identify abuse or ineligible participation.'],
  ['Current terms control','The complete terms shown with the live activity—including eligibility, dates, supported channels and final interpretation—take priority, subject to applicable law.'],
];
const faqs:[string,string][]=[
  ['What first deposit tiers are shown?','The supplied activity screen shows ₹300 + ₹48, ₹500 + ₹108, ₹1,000 + ₹188 and ₹5,000 + ₹488.'],
  ['Can the first deposit activity be used more than once?','The supplied rule says the activity is exclusive to the first eligible recharge and cannot be repeated.'],
  ['Is the bonus credited automatically?','The supplied rule states that an eligible reward must be claimed manually. Check the live Activity page for the current claim action.'],
  ['What is the turnover requirement?','The supplied rule describes one-times valid-bet turnover for the bonus portion before withdrawal. Review the live wording before participating.'],
  ['Are these tiers permanently available?','No permanent availability is claimed. Tiers and rules on this page are transcribed from the supplied screen; the live Shree Win activity decides current availability.'],
];

export default function FirstDepositBonusPage(){return <PageShell active="activity"><main><InfoHero eyebrow="SHREE WIN ACTIVITY" title="First deposit bonus" accent="tiers and rules together." copy="Review every amount, eligibility condition and activity rule shown in the supplied product screen before participating." current="First Deposit Bonus" icon="₹" primary={{label:'View deposit tiers',href:'#bonus-tiers'}}/>
  <section className="bonus-page" id="bonus-tiers"><div className="bonus-heading"><span>EXTRA FIRST DEPOSIT BONUS</span><h2>Each eligible account can receive the activity once.</h2><p>The four tiers below reproduce the values shown in the supplied activity screen using the Shree Win visual system.</p></div><div className="deposit-tier-grid">{tiers.map((tier,index)=><article key={tier.deposit}><div className="tier-top"><span>{tier.label}</span><strong>+ {tier.bonus}</strong></div><p>First eligible deposit of {tier.deposit} with the displayed {tier.bonus} activity bonus.</p><div className="tier-action"><span><i style={{width:'0%'}}/>0 / {tier.deposit.replace('₹','')}</span><a href="/wallet#details">Deposit</a></div><small>Tier {index+1} · one-time activity</small></article>)}</div><ProductNotice>These values are taken from the screenshots supplied on 27 August 2026. Confirm that the same tier, reward and eligibility are displayed in the live Shree Win Activity page before depositing.</ProductNotice></section>
  <section className="deposit-rules"><div className="rules-heading"><span>ACTIVITY RULES</span><h2>Read every condition before claiming.</h2><p>A larger first deposit can correspond to a larger displayed bonus, but no reward is automatic or guaranteed outside the current eligibility rules.</p></div><div className="deposit-rule-list">{rules.map(([title,copy],i)=><article key={title}><b>{String(i+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
  <section className="content-section source-explainer"><div><span className="kicker dark"><i/>CLEAR ACTIVITY INFORMATION</span><h2>Why the rules appear next to the amounts.</h2></div><div><p>Deposit artwork can be easy to scan but difficult to interpret. This page keeps the amount, reward, one-time condition, claim method and turnover requirement in readable page text.</p><p>Search engines can understand the page structure, while visitors can compare tiers without relying only on text embedded inside a screenshot.</p><p>Shree Win does not guarantee winnings, income or a return. This activity is separate from game results and remains subject to the live terms.</p></div></section>
  <FaqBlock title="First deposit bonus FAQ" items={faqs}/><section className="page-cta"><span>CHECK THE LIVE ACTIVITY</span><h2>Confirm the current tier and terms before you deposit.</h2><a className="primary-button" href="/activity">Return to Activity →</a></section>
  </main></PageShell>}
