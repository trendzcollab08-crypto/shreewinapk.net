import { Breadcrumbs } from './Breadcrumbs';

export function InfoHero({ eyebrow, title, accent, copy, current, icon, primary }: { eyebrow:string; title:string; accent:string; copy:string; current:string; icon:string; primary?:{label:string;href:string} }) {
  return <section className="info-hero"><Breadcrumbs items={[{label:'Home',href:'/'},{label:current}]}/><div className="info-hero-grid"><div><span className="kicker"><i/>{eyebrow}</span><h1>{title}<br/><em>{accent}</em></h1><p>{copy}</p><div className="hero-ctas">{primary&&<a className="primary-button" href={primary.href}>{primary.label} →</a>}<a className="text-button" href="#details">Explore details <b>↓</b></a></div></div><div className="info-hero-art" aria-hidden="true"><span>{icon}</span><i/><b>SHREE WIN</b></div></div></section>
}

export function FaqBlock({ title, items }: { title:string; items:[string,string][] }) {
  return <section className="content-section faq-section"><div className="section-title"><span>HELPFUL ANSWERS</span><h2>{title}</h2></div><div className="faq-grid">{items.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
}

export function ProductNotice({ children }: { children:React.ReactNode }) {
  return <div className="product-notice"><b>Current product information</b><p>{children}</p></div>
}
