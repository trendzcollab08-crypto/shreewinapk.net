export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <i>›</i>}{item.href ? <a href={item.href}>{item.label}</a> : <b>{item.label}</b>}</span>)}</nav>;
}
