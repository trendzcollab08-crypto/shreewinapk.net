import Link from 'next/link';

export function StaticRedirect({ destination, label }: { destination: string; label: string }) {
  return (
    <main className="guide-body">
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <div className="container guide-layout">
        <section className="guide-main">
          <h1>Opening {label}</h1>
          <p>This page has moved. Continue to the updated ShreeWin guide.</p>
          <Link className="button button-primary" href={destination}>Continue to {label}</Link>
        </section>
      </div>
    </main>
  );
}
