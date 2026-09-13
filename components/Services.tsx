export default function Services() {
  const services = [
    { icon: "fa-file-invoice-dollar", title: "Medical Billing & Coding", desc: "Clinical work translated into accurate, defensible claims.", details: ["Medical coding", "Claims submission", "Clinical documentation review", "Coding quality checks"] },
    { icon: "fa-id-card", title: "Eligibility & Benefits Verification", desc: "Know coverage before the appointment and prevent avoidable denials.", details: ["Insurance eligibility verification", "Benefits and coverage checking", "Eligibility-denial prevention"] },
    { icon: "fa-user-check", title: "Credentialing & CAQH Management", desc: "Keep providers enrolled, current, and in-network.", details: ["Provider credentialing", "CAQH profile management", "Payer panel enrollment", "Maintaining in-network status"] },
    { icon: "fa-file-signature", title: "Prior Authorization", desc: "Secure required approvals before treatment begins.", details: ["Insurance authorization", "Authorization before treatment", "Authorization-denial prevention"] },
    { icon: "fa-chart-line", title: "Accounts Receivable Management", desc: "Keep outstanding revenue moving instead of aging quietly.", details: ["Aging A/R follow-up", "Unpaid claim tracking", "Payment collection", "Old outstanding claim follow-up"] },
    { icon: "fa-magnifying-glass-dollar", title: "Denial Management", desc: "Investigate, correct, resubmit, and recover denied revenue.", details: ["Denial investigation", "Claim resubmission", "Reason-for-denial analysis", "Denied revenue recovery"] },
    { icon: "fa-handshake", title: "Contract & Rate Re-Negotiation", desc: "Make sure payer agreements reflect the value of your work.", details: ["Payer contract review", "Underpayment identification", "Reimbursement rate negotiation"] },
    { icon: "fa-headset", title: "Virtual Assistant Support", desc: "Give your front office reliable administrative relief.", details: ["Insurance calls", "Administrative support", "Front-office assistance"] },
    { icon: "fa-money-check-dollar", title: "Claims & Payment Management", desc: "Track claims and payments from submission through EOB review.", details: ["Claim status tracking", "Payment verification", "Underpayment identification", "EOB-related work", "Insurance follow-up"] },
    { icon: "fa-arrows-rotate", title: "Revenue Cycle Management (RCM)", desc: "Manage the complete journey from care delivery through reimbursement.", details: ["Care-to-payment workflow", "Revenue visibility", "Process coordination", "Reimbursement follow-through"] },
  ];
  return (
    <div id="services" className="services-theme max-w-7xl mx-auto scroll-mt-28 px-4 sm:px-6 py-14 md:py-20 rounded-[40px] md:rounded-[56px]">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <span className="text-accent font-semibold text-xs tracking-wider uppercase">What we do</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mt-3 mb-4">Not a task list. A team held to a higher bar.</h2>
        <p className="text-lg text-light-text">Every service is delivered by a HIPAA-certified team and quality-checked before it goes out.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-premium-sm hover:shadow-premium-md hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-5">
              <i className={`fas ${s.icon} text-xl text-primary`}></i>
            </div>
            <h3 className="text-lg font-semibold text-dark-text mb-2">{s.title}</h3>
            <p className="text-light-text text-sm leading-6">{s.desc}</p>
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              {s.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2 text-xs leading-5 text-light-text"><i className="fas fa-check text-accent mt-1 shrink-0"></i><span>{detail}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
