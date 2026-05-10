const roles = [
  {
    company: 'Edunext Technologies Pvt. Ltd., Noida',
    title: 'Manager – Customer Success',
    period: 'Jul 2022 – Present',
    bullets: [
      'Manage ₹20Cr+ annual renewal portfolio across 400+ accounts; 98%+ gross renewal rate via structured cadences and risk-based prioritisation.',
      'Drove ₹60L add-on & upsell revenue in FY2025 (₹30L FY2024) by identifying module and service expansion needs.',
      'Tailored product demos and free trials mapping client workflows to ERP features — earning trust and conversion.',
      'Quarterly reviews with directors covering ROI, usage, and roadmap to ensure long-term satisfaction.',
      'Captured requirements and translated business needs into PRDs handed to Product & Development.',
      'Owned end-to-end solution delivery across Product, Dev, and Support — go-live, comms, and milestones.',
    ],
  },
  {
    company: 'Edunext Technologies Pvt. Ltd., Noida',
    title: 'Team Leader – Customer Support',
    period: 'Dec 2017 – Jul 2022',
    bullets: [
      'Led support ops for 150+ ERP accounts, managing escalation workflows and CSAT across all modules.',
      'Reduced repeat issue volume via periodic ticket-trend audits and ERP usage reviews.',
      'Owned high-priority escalations end-to-end, protecting account renewals.',
      'Designed onboarding/training programmes that accelerated time-to-value and reduced early-stage churn.',
      'Mentored support staff on troubleshooting, communication, and SLA adherence.',
    ],
  },
  {
    company: 'Franciscan Solutions Pvt. Ltd.',
    title: 'IT Executive – Customer Support',
    period: 'May 2016 – Nov 2017',
    bullets: [
      'Managed ERP post-implementation support — resolving functional queries and improving usability.',
      'Produced daily MIS reports enabling data-driven management decisions on ops and client health.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">02 — Experience</p>
            <h2 className="font-display text-5xl">Where I've <span className="italic text-gold">built impact.</span></h2>
          </div>
        </div>
        <ol className="relative border-l border-border/60 ml-2 md:ml-6 space-y-12">
          {roles.map((r, i) => (
            <li key={i} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-bg" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-3xl">{r.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-gold">{r.period}</span>
              </div>
              <p className="text-sm text-muted mb-5">{r.company}</p>
              <ul className="space-y-3">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-muted leading-relaxed">
                    <span className="text-gold mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
