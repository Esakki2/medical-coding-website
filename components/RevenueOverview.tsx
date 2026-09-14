import DataFlowGraphic from "@/components/DataFlowGraphic";

const leakageRows = [
  {
    problem: "Denied claims",
    inovex: "Every rejection investigated and resubmitted within a week.",
    gain: "+$1,000–1,400/mo",
  },
  {
    problem: "Underpayments",
    inovex: "Every payment checked against your contract rate.",
    gain: "+$300–450/mo",
  },
  {
    problem: "Under-billing",
    inovex: "Coders bill exactly what the visit note supports.",
    gain: "+$1,500–2,000/mo",
  },
  {
    problem: "Unverified coverage",
    inovex: "Eligibility confirmed before the patient walks in.",
    gain: "$800–1,000 avoided/mo",
  },
  {
    problem: "Aged A/R (90+ days)",
    inovex: "Weekly follow-up keeps aging under 10%.",
    gain: "$3,000–4,500 freed/mo",
  },
  {
    problem: "Missed approvals",
    inovex: "Authorizations lined up before the appointment.",
    gain: "$600–1,600 saved/mo",
  },
];

export default function RevenueOverview() {
  return (
    <section id="revenue" className="revenue-theme max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 rounded-[40px] md:rounded-[56px]">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-center mb-8 md:mb-10">
        <div className="max-w-3xl">
        <span className="text-accent font-semibold text-sm md:text-base tracking-wider uppercase">WHERE THE MONEY GOES</span>
        <h2 className="text-3xl md:text-5xl font-semibold text-dark-text mt-3 mb-4">Six leaks. One fix.</h2>
        <p className="text-light-text text-base md:text-lg leading-relaxed">For a practice billing $50K/month, closing these usually recovers $7,000–$9,000 — money already earned, just not collected yet.</p>
        </div>
        <div className="hidden lg:block rounded-3xl bg-white/80 border border-white p-3 shadow-premium-sm"><DataFlowGraphic compact /></div>
      </div>

      <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 shadow-premium-sm">
          <div className="grid grid-cols-[1.05fr_2fr_1fr] bg-primary text-white text-xs font-semibold uppercase tracking-wide">
          <div className="px-5 py-4">Leak</div><div className="px-5 py-4">What Inovex does</div><div className="px-5 py-4">Typical gain</div>
        </div>
        {leakageRows.map((row) => (
          <div key={row.problem} className="grid grid-cols-[1.05fr_2fr_1fr] border-t border-slate-100 text-sm">
            <div className="px-5 py-5 font-semibold text-primary">{row.problem}</div><div className="px-5 py-5 text-dark-text leading-6">{row.inovex}</div><div className="px-5 py-5 font-semibold text-accent leading-6">{row.gain}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:hidden">
        {leakageRows.map((row) => (
          <article key={row.problem} className="rounded-2xl border border-slate-200 p-5 shadow-premium-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4"><h3 className="font-semibold text-primary">{row.problem}</h3><span className="text-sm font-semibold text-accent">{row.gain}</span></div>
            <p className="text-sm text-dark-text leading-6"><strong className="text-accent">What Inovex does:</strong> {row.inovex}</p>
          </article>
        ))}
      </div>

    </section>
  );
}
