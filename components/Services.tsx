export default function Services() {
  const services = [
    { icon: "fa-file-medical-alt", title: "Medical Coding", desc: "Accurate ICD-10, CPT, and HCPCS coding for optimal reimbursement and compliance. Auditing & education included." },
    { icon: "fa-chart-pie", title: "Revenue Cycle", desc: "End-to-end RCM: charge entry, claims, denial management, and analytics to maximize your revenue health." },
    { icon: "fa-robot", title: "HealthTech Integration", desc: "Leveraging AI, EHR optimization, and automation to streamline coding workflows and reduce administrative burden." },
    { icon: "fa-clipboard-check", title: "Compliance & Audit", desc: "Risk assessments, internal audits, and provider training to keep you ahead of regulatory changes." },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="reveal-section text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mb-4">Healthcare business, refined</h2>
        <p className="text-lg text-light-text">From medical coding to technology integration — comprehensive solutions designed for modern practices.</p>
      </div>
      <div className="stagger-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="stagger-item bg-white p-7 rounded-3xl border border-slate-100 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-accent-soft flex items-center justify-center mb-6">
              <i className={`fas ${s.icon} text-2xl text-primary`}></i>
            </div>
            <h3 className="text-xl font-semibold text-dark-text mb-3">{s.title}</h3>
            <p className="text-light-text text-base">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
