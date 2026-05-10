export default function Nav() {
  const links = [
    { href: "#profile", label: "Profile" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-border/40">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-gold">
          JANAK TEWATIA
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.2em] border border-gold/50 text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-bg transition"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
