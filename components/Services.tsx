export default function Services() {
  const services = [
    { icon: "fa-file-invoice-dollar", title: "Medical Billing & Coding", desc: "Coded by people who can read a clinical note, not a cheat sheet." },
    { icon: "fa-id-card", title: "Eligibility & Benefits", desc: "Know what's covered before the appointment, not after the denial." },
    { icon: "fa-user-check", title: "Credentialing & CAQH", desc: "On panels faster, in-network status protected." },
    { icon: "fa-file-signature", title: "Prior Authorization", desc: "Secured before the visit, so care is never held up." },
    { icon: "fa-handshake", title: "Contract Re-Negotiation", desc: "We fight for rates your work actually deserves." },
    { icon: "fa-chart-line", title: "A/R Management", desc: "Aging claims chased down relentlessly." },
    { icon: "fa-magnifying-glass-dollar", title: "Denial Management", desc: "A denial is the start of getting you paid, not the end." },
    { icon: "fa-headset", title: "Virtual Assistant Support", desc: "Relief for a front desk drowning in insurance calls." },
  ];
  return (
    <div id="services" className="services-theme max-w-7xl mx-auto scroll-mt-28 px-4 sm:px-6 py-14 md:py-20 rounded-[40px] md:rounded-[56px]">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <span className="eyebrow-text">WHAT WE DO</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mt-3 mb-4">A team held to a higher bar, not a task list.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-5">
              <i className={`fas ${s.icon} text-xl text-primary`}></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-text mb-2">{s.title}</h3>
            <p className="text-light-text text-base leading-7">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
