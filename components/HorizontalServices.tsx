export default function HorizontalServices() {
  const slides = [
    { num: "01", icon: "fa-eye", title: "Total Visibility. Zero Guesswork.", desc: "See what has been billed and paid, what is pending, what was denied, and exactly where your revenue is leaking.", stat: "100%", statLabel: "clear answers", color: "from-[#0f4c81] to-[#2c6b9e]" },
    { num: "02", icon: "fa-user-doctor", title: "A Doctor's Eye", desc: "Our process is led by someone who understands clinical notes, medical necessity, and the real story behind every encounter.", stat: "2014", statLabel: "expertise since", color: "from-[#31a9a9] to-[#1e8a8a]" },
    { num: "03", icon: "fa-shield-heart", title: "Fewer Denials", desc: "Precise, compliant coding and thoughtful claim investigation help your revenue move forward instead of getting stuck.", stat: "8", statLabel: "ways we help", color: "from-[#2c6b9e] to-[#31a9a9]" },
    { num: "04", icon: "fa-chart-line", title: "Revenue Protection", desc: "We find the quiet leaks, follow up on what is owed, and help you fight for rates that reflect the care you provide.", stat: "1:1", statLabel: "direct partnership", color: "from-[#0c1e2e] to-[#0f4c81]" },
    { num: "05", icon: "fa-handshake", title: "Built Around Your Practice", desc: "No vague invoices and no handoffs. Just straight answers, every month, from a team that understands medicine and means business.", stat: "0", statLabel: "guesswork", color: "from-[#1e8a8a] to-[#0f4c81]" },
  ];

  return (
    <section className="relative bg-soft-bg overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal-section flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-accent font-semibold text-xs tracking-wider uppercase">The Inovex way</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-dark-text mt-3">Six questions between care and payment.</h2>
          </div>
          <p className="text-light-text max-w-md text-base md:text-lg">Most billing companies stop at “was it billed?” We ask what happened next.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {slides.map((s, i) => (
            <div key={i} className={`relative bg-gradient-to-br ${s.color} rounded-3xl p-6 md:p-7 text-white overflow-hidden shadow-premium-sm min-h-[260px] flex flex-col justify-between`}>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6"><span className="text-4xl font-bold text-white/25">{s.num}</span><i className={`fas ${s.icon} text-2xl text-white/80`}></i></div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
                <div className="relative z-10 mt-5 pt-4 border-t border-white/20"><span className="text-2xl font-bold">{s.stat}</span><span className="text-white/70 text-sm ml-2">{s.statLabel}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
