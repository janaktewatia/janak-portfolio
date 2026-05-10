const Contact = () => {
  const items = [
    {
      l: "Email",
      v: "tewatia.janak1@gmail.com",
      h: "mailto:tewatia.janak1@gmail.com",
    },
    { l: "Phone", v: "+91 78769 87677", h: "tel:+917876987677" },
    {
      l: "LinkedIn",
      v: "in/janaktewatia",
      h: "https://linkedin.com/in/janaktewatia",
    },
    { l: "Location", v: "Ghaziabad, Uttar Pradesh" },
  ];
  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-border/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
          05 — Contact
        </p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.95] mb-12">
          Let's build something{" "}
          <span className="gold-gradient italic">meaningful.</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {items.map((i) => {
            const Tag = i.h ? "a" : "div";
            return (
              <Tag
                key={i.l}
                href={i.h}
                target={i.h?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="bg-bg p-6 block hover:bg-card transition group text-inherit no-underline"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
                  {i.l}
                </div>
                <div className="font-display text-xl group-hover:text-gold transition break-all">
                  {i.v}
                </div>
              </Tag>
            );
          })}
        </div>
        <footer className="mt-16 text-xs text-muted flex justify-between border-t border-border/40 pt-6">
          <span>© {new Date().getFullYear()} Janak Tewatia</span>
          <span>Powered By KnowVato.</span>
        </footer>
      </div>
    </section>
  );
};
export default Contact;
