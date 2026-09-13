import DataFlowGraphic from "@/components/DataFlowGraphic";

const leakageRows = [
  {
    problem: "Denied Claims",
    typical: "5-10 out of every 100 claims are rejected, and many are never revisited.",
    inovex: "Every rejection is investigated and resubmitted within about a week.",
    gain: "$1,000-$1,400 extra / month",
  },
  {
    problem: "Being Paid Less Than You Are Owed",
    typical: "7-11 out of every 100 paid claims are paid below the contracted rate.",
    inovex: "Every payment is checked against your contract so short payments are collected.",
    gain: "$300-$450 extra / month",
  },
  {
    problem: "Under-Billing",
    typical: "3-5 out of every 100 dollars earned can go unbilled through cautious coding.",
    inovex: "Coders read the visit note and bill for everything the documentation supports.",
    gain: "$1,500-$2,000 extra / month",
  },
  {
    problem: "Insurance Not Checked in Advance",
    typical: "About 1 in 4 denied claims can come from coverage not being verified first.",
    inovex: "Coverage is confirmed before the patient arrives, not after the claim bounces back.",
    gain: "$800-$1,000 in denials avoided / month",
  },
  {
    problem: "Old Unpaid Bills Over 90 Days",
    typical: "15-20 out of every 100 dollars owed sits unpaid for more than three months.",
    inovex: "Unpaid bills are followed up weekly, keeping aging A/R under control.",
    gain: "$3,000-$4,500 freed up / month",
  },
  {
    problem: "Missed Insurance Approvals",
    typical: "A missed approval can deny a claim even when the care was delivered perfectly.",
    inovex: "Required approvals are lined up before the appointment happens.",
    gain: "$600-$1,600 saved / month",
  },
];

const approach = [
  { icon: "fa-wand-magic-sparkles", title: "Customization & Flexibility", text: "Workflows are built around your specialty and actual claims, at no extra charge." },
  { icon: "fa-comments", title: "Consistent Communication", text: "Weekly and monthly check-ins, direct access to your billing team, and 24/7 support." },
  { icon: "fa-receipt", title: "All-Inclusive Pricing", text: "One straightforward price covers the work that actually gets you paid, with no hidden add-ons." },
  { icon: "fa-gauge-high", title: "Enhanced Efficiency", text: "Cleaner workflows mean less time on insurance calls and faster movement of money." },
];

export default function RevenueOverview() {
  return (
    <section className="revenue-theme max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 rounded-[40px] md:rounded-[56px]">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-center mb-8 md:mb-10">
        <div className="max-w-3xl">
        <span className="text-accent font-semibold text-sm md:text-base tracking-wider uppercase">Where every practice loses money</span>
        <h2 className="text-3xl md:text-5xl font-semibold text-dark-text mt-3 mb-4">And how Inovex fixes it.</h2>
        <p className="text-light-text text-base md:text-lg leading-relaxed">For a practice billing about $50,000 a month, fixing these six problems can reveal $7,000-$9,000 in revenue already earned but not collected. These are industry averages, not a promise. A free revenue check-up shows your actual numbers.</p>
        </div>
        <div className="hidden lg:block rounded-3xl bg-white/80 border border-white p-3 shadow-premium-sm"><DataFlowGraphic compact /></div>
      </div>

      <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 shadow-premium-sm">
        <div className="grid grid-cols-[1.05fr_1.45fr_1.45fr_1fr] bg-primary text-white text-xs font-semibold uppercase tracking-wide">
          <div className="px-5 py-4">The problem</div><div className="px-5 py-4">What usually happens</div><div className="px-5 py-4">What Inovex does instead</div><div className="px-5 py-4">Example gain</div>
        </div>
        {leakageRows.map((row) => (
          <div key={row.problem} className="grid grid-cols-[1.05fr_1.45fr_1.45fr_1fr] border-t border-slate-100 text-sm">
            <div className="px-5 py-5 font-semibold text-primary">{row.problem}</div><div className="px-5 py-5 text-light-text leading-6">{row.typical}</div><div className="px-5 py-5 text-dark-text leading-6">{row.inovex}</div><div className="px-5 py-5 font-semibold text-accent leading-6">{row.gain}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:hidden">
        {leakageRows.map((row) => (
          <article key={row.problem} className="rounded-2xl border border-slate-200 p-5 shadow-premium-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4"><h3 className="font-semibold text-primary">{row.problem}</h3><span className="text-sm font-semibold text-accent">{row.gain}</span></div>
            <p className="text-sm text-light-text leading-6"><strong className="text-dark-text">Usually:</strong> {row.typical}</p>
            <p className="text-sm text-dark-text leading-6 mt-3"><strong className="text-accent">Inovex:</strong> {row.inovex}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 md:mt-16">
        <div className="max-w-2xl mb-7"><span className="text-accent font-semibold text-xs tracking-wider uppercase">Our approach</span><h2 className="text-3xl md:text-4xl font-semibold text-dark-text mt-3">Client-centered, start to finish.</h2></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {approach.map((item) => (
            <div key={item.title} className="rounded-2xl bg-soft-bg p-5 border border-slate-100"><i className={`fas ${item.icon} text-accent text-xl mb-5`}></i><h3 className="text-lg font-semibold text-dark-text mb-2">{item.title}</h3><p className="text-sm text-light-text leading-6">{item.text}</p></div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-[#edf8f7] border border-[#d5efed] p-6 md:p-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between"><div><span className="text-accent font-semibold text-xs tracking-wider uppercase">The quality behind the work</span><h2 className="text-2xl md:text-3xl font-semibold text-dark-text mt-2">Fast does not mean careless.</h2><p className="text-light-text text-sm md:text-base leading-6 mt-2 max-w-3xl">Every claim gets a second set of eyes for codes, documentation, and payer details. We stay current as coding rules and payer policies change, and nothing goes out until it is right, not just done.</p></div><div className="shrink-0 flex items-center gap-3 text-primary font-semibold"><i className="fas fa-check-double text-accent text-2xl"></i><span>Every claim accountable<br />to someone</span></div></div>
    </section>
  );
}
