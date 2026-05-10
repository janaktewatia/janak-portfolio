import portrait from "../assets/janak.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 px-6 overflow-hidden grain"
    >
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center relative">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Customer Success · SaaS ERP
          </p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95]">
            Janak <br />
            <span className="gold-gradient italic">Tewatia.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            A decade of turning enterprise SaaS portfolios into compounding
            revenue. ₹20Cr+ under management, 400+ accounts, 98%+ gross renewal
            rate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-gold text-bg px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              View Experience
            </a>
            <a
              href="mailto:tewatia.janak1@gmail.com"
              className="border border-border px-6 py-3 rounded-full text-sm hover:border-gold hover:text-gold transition"
            >
              tewatia.janak1@gmail.com
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full" />
          <img
            src={portrait}
            alt="Janak Tewatia portrait"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-gold/40 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
