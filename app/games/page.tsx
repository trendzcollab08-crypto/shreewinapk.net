import type { Metadata } from 'next';
import { PageShell } from '../components/SiteChrome';
import { FaqBlock, InfoHero, ProductNotice } from '../components/InfoBlocks';
import { GameOpenExperience } from '../components/GameOpenExperience';

export const metadata:Metadata={title:'Shree Win Games | WinGo, K3, 5D, JILI & More',description:'Explore Shree Win games including WinGo, K3, 5D, lottery, JILI titles, mini games, arcade games and casino-style categories in one lobby.',alternates:{canonical:'/games'}};

const categories=[
  ['lottery','🎱','Lottery & prediction','Find WinGo, K3, 5D and other round-based formats displayed in the current lobby.'],
  ['recommended','🐉','Recommended games','Explore highlighted titles such as Royal Fishing, Golden Empire and Super Rich.'],
  ['mini-games','🚀','Mini games','Open quick-play titles including Mines, Limbo and Plinko when they are available.'],
  ['casino','♠','Casino-style games','Browse card, table, slot and live-style categories from listed providers.'],
  ['arcade','🎮','Arcade & fishing','Discover colourful, action-led entertainment and fishing-style titles.'],
  ['popular','🔥','Popular now','See the games currently highlighted by the Shree Win lobby.'],
];
const faqs:[string,string][]=[
  ['Which games are available on Shree Win?','The lobby can include WinGo, K3, 5D, JILI games, Mines, Limbo, Plinko, fishing, slots and casino-style categories. The live lobby shows the current selection.'],
  ['Are the game rules the same for every title?','No. Every title can have its own timer, choices, result method and settlement rules. Open the rules inside that game before participating.'],
  ['What are recommended games?','Recommended is a discovery section used to highlight selected titles. A listing is not a promise of winnings or suitability.'],
  ['Where can I find WinGo?','Open the Lottery category or visit the dedicated WinGo page to understand the basic round flow.'],
  ['Can game availability change?','Yes. Categories, providers and titles can change by device, account or location. The current lobby is the source of truth.'],
  ['Can I practise before using money?','Use demo or practice mode only where the individual game offers it. Never assume a title includes free practice.'],
];

export default function GamesPage(){return <PageShell active="games"><main><InfoHero eyebrow="SHREE WIN GAMES" title="A colourful game lobby" accent="built around discovery." copy="Move between lottery, recommended, mini-game, arcade and casino-style categories without losing your place." current="Games" icon="🎮" primary={{label:'Explore categories',href:'#details'}}/>
  <section className="content-section info-page" id="details"><div className="section-heading"><div className="section-title"><span>GAME CATEGORIES</span><h2>Choose the way you want to play.</h2></div><p>The home lobby keeps every major category within reach. Current titles and providers are always shown inside the live product.</p></div><div className="info-card-grid">{categories.map(([id,icon,title,copy])=><article id={id} key={id}><i>{icon}</i><h2>{title}</h2><p>{copy}</p><a href={id==='lottery'?'/wingo':'/login'}>{id==='lottery'?'Explore WinGo':'Open Shree Win'} →</a></article>)}</div></section>
  <GameOpenExperience/>
  <section className="dark-info-section"><div><span>HOW THE LOBBY WORKS</span><h2>From category to game rules in three taps.</h2><p>Select a category, open a title, and read its active rules before confirming any choice. Results and settlement are controlled by the selected game—not by promotional artwork.</p></div><ol><li><b>01</b><span><strong>Choose a category</strong>Use the top category ribbon or game collections.</span></li><li><b>02</b><span><strong>Open the title</strong>Check its timer, choices and current availability.</span></li><li><b>03</b><span><strong>Read active rules</strong>Understand settlement and limits before playing.</span></li></ol></section>
  <section className="content-section two-column-copy"><div><span className="kicker dark"><i/>POPULAR SHREE WIN TITLES</span><h2>Names you may see in the lobby.</h2></div><div><h3>Royal Fishing, Golden Empire & Super Rich</h3><p>These titles appear in the supplied Shree Win lobby under Recommended Games. Their availability and provider information should be confirmed in the live listing.</p><h3>Mines, Limbo & Plinko</h3><p>These appear under Mini Games in the supplied interface. Each is a separate game with its own rules and risk profile.</p><h3>Provider-led collections</h3><p>The lobby can group titles by provider. Provider labels help navigation; they do not indicate guaranteed availability, results or returns.</p><ProductNotice>Game names on this page reflect the supplied Shree Win interface. The live lobby decides current availability, provider, rules and access.</ProductNotice></div></section>
  <FaqBlock title="Shree Win games FAQ" items={faqs}/><section className="page-cta purple"><span>ENTER THE LOBBY</span><h2>Use one Shree Win account across the game experience.</h2><a className="primary-button" href="/register">Create account →</a></section>
  </main></PageShell>}
