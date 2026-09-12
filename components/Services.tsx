export default function Services() {
  const services = [
    { icon: "fa-headset", title: "Virtual Assistant Support", desc: "Take the admin grind off your front desk so your team can stay focused on patients." },
    { icon: "fa-id-card", title: "Eligibility & Benefits Verification", desc: "Know exactly what is covered before the patient walks in." },
    { icon: "fa-user-check", title: "Credentialing", desc: "Get in-network without drowning in paperwork or chasing silent delays." },
    { icon: "fa-file-signature", title: "CAQH Management", desc: "Keep your profile current so nothing stalls silently." },
    { icon: "fa-handshake", title: "Contract & Rate Re-Negotiation", desc: "We fight for better reimbursement rates on your behalf." },
    { icon: "fa-file-medical-alt", title: "Medical Coding", desc: "Precise, compliant coding built around what actually happened in the room." },
    { icon: "fa-money-check-dollar", title: "Accounts Receivable Management", desc: "We chase what is owed, so it does not just sit and age." },
    { icon: "fa-magnifying-glass-dollar", title: "Denial Management", desc: "We do not resubmit and hope. We investigate and fix." },
  ];
  return (
    <div id="services" className="max-w-7xl mx-auto scroll-mt-28 px-6 py-20">
      <div className="reveal-section text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mb-4">Everything We Handle, So You Don&apos;t Have To</h2>
        <p className="text-lg text-light-text">The billing, coding, credentialing, and revenue-cycle work that keeps your practice financially healthy.</p>
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
