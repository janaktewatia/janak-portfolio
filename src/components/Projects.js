const projects = [
  {
    title: 'Simply Admission – Admission CRM',
    role: 'Project Lead · Edunext Technologies',
    date: 'Released March 2023',
    desc: 'Cloud-based Admission CRM deployed across 100+ schools — admission campaigns, lead scoring, 360° lead tracking, omni-channel integrations (Facebook, Instagram, Google, WhatsApp, IVR), dynamic form builder, and real-time chatbots.',
    tags: ['CRM', 'Lead Scoring', 'Omni-channel', 'Chatbots'],
  },
  {
    title: 'WhatsApp Integration & Chatbot',
    role: 'Product Owner',
    date: '300+ clients onboarded',
    desc: 'End-to-end product development across UI/UX, Development, and QA — from requirement definition to release, followed by adoption across 300+ clients.',
    tags: ['WhatsApp API', 'Automation', 'UX'],
  },
  {
    title: 'Smart Card Solution',
    role: 'Product Lead',
    date: '150+ clients',
    desc: 'Owned scope, cross-functional coordination through design, development, and UAT — followed by go-live, training and adoption across 150+ clients.',
    tags: ['Hardware Integration', 'UAT', 'Rollout'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">03 — Projects</p>
            <h2 className="font-display text-5xl">Things I've <span className="italic text-gold">shipped.</span></h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative bg-card border border-border/60 rounded-2xl p-6 hover:border-gold/60 transition-colors">
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{p.date}</div>
              <h3 className="font-display text-2xl mb-1">{p.title}</h3>
              <p className="text-xs text-muted mb-4">{p.role}</p>
              <p className="text-sm text-muted leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 border border-border rounded-full text-muted group-hover:border-gold/40">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
