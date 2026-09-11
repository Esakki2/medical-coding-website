export default function TechStrip() {
  const items = [
    { icon: "fa-shield-alt", label: "HIPAA Compliant" },
    { icon: "fa-certificate", label: "CPC & CCS Certified" },
    { icon: "fa-cloud", label: "Cloud-based EHR" },
    { icon: "fa-database", label: "AI-assisted coding" },
    { icon: "fa-chart-bar", label: "Real-time analytics" },
  ];
  return (
    <div id="compliance" className="max-w-7xl mx-auto px-6 py-6">
      <div className="reveal-section flex justify-center flex-wrap gap-9 bg-soft-bg py-9 px-10 rounded-[60px]">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 font-medium text-primary">
            <i className={`fas ${it.icon} text-2xl text-accent`}></i>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}
