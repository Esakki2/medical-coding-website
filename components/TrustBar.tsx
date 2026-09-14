export default function TrustBar() {
  const revenueGaps = [
    { value: "$350", label: "one denied claim", icon: "fa-file-circle-xmark" },
    { value: "$1,200", label: "one underpaid claim", icon: "fa-arrow-trend-down" },
    { value: "$2,800", label: "sitting in aging A/R", icon: "fa-clock-rotate-left" },
    { value: "$4,500", label: "claims awaiting follow-up", icon: "fa-magnifying-glass-dollar" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="bg-soft-bg rounded-[32px] md:rounded-[48px] py-8 md:py-12 px-5 sm:px-8 md:px-14">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent font-semibold text-xs tracking-wider uppercase">THE PROBLEM</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mt-3 mb-5">You did the work. Why are you still waiting to get paid?</h2>
          <p className="text-light-text text-base md:text-lg leading-relaxed">MOT clinician-led, not spreadsheet-led</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
            {revenueGaps.map((gap) => (
              <div key={gap.label} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-premium-sm">
                <i className={`fas ${gap.icon} text-accent text-lg mb-4`}></i>
                <div className="text-2xl sm:text-3xl font-bold text-primary">{gap.value}</div>
                <div className="text-xs sm:text-sm leading-5 text-light-text mt-1">{gap.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
