const stats = [
  { v: '10+', l: 'Years Experience' },
  { v: '₹20Cr+', l: 'Renewal Portfolio' },
  { v: '400+', l: 'Accounts Managed' },
  { v: '98%+', l: 'Gross Renewal Rate' },
];

export default function Profile() {
  return (
    <section id="profile" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">01 — Profile</p>
          <h2 className="font-display text-5xl">A decade in <span className="italic text-gold">SaaS ERP.</span></h2>
        </div>
        <div className="md:col-span-8 space-y-8">
          <p className="text-lg text-muted leading-relaxed">
            Results-driven Customer Success Manager with a decade of SaaS ERP experience in EdTech.
            Proven in managing high-value enterprise portfolios, leading cross-functional escalations,
            delivering executive business reviews, and building scalable CS processes that protect
            and grow revenue year-on-year.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40">
            {stats.map((s) => (
              <div key={s.l} className="bg-bg p-6">
                <div className="font-display text-4xl text-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
