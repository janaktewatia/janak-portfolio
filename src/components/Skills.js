const core = [
  "Renewal Management",
  "Upselling & Add-On Revenue",
  "Churn Prevention & Risk Mgmt",
  "Project & Delivery Management",
  "UAT & Release Coordination",
  "Onboarding & Adoption",
  "Client Relationship Management",
  "Escalation Management",
  "Team Leadership & Mentoring",
];

const tools = [
  "Jira / Huly",
  "CRM Platforms",
  "SQL",
  "Postman",
  "MS Excel",
  "PowerPoint",
];

const awards = [
  { y: "Nov 2023", t: "Excellence in Customer Service" },
  { y: "Jul 2024", t: "Best Team Player of the Month" },
  { y: "Mar 2025", t: "Legacy Gem Award" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            04 — Toolkit
          </p>
          <h2 className="font-display text-5xl">
            Skills, tools &{" "}
            <span className="italic text-gold">recognition.</span>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-10">
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {core.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:border-gold hover:text-gold transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              Tools & Tech
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-gold/10 text-gold text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              Awards
            </h3>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {awards.map((a) => (
                <li
                  key={a.t}
                  className="flex justify-between items-center py-4"
                >
                  <span className="font-display text-2xl">{a.t}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">
                    {a.y}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
