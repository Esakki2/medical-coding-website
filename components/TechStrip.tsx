export default function TechStrip() {
  const items = [
    { icon: "fa-eye", label: "Billed & paid visibility" },
    { icon: "fa-clock", label: "Pending claim tracking" },
    { icon: "fa-file-circle-xmark", label: "Denial investigation" },
    { icon: "fa-user-shield", label: "HIPAA certified" },
    { icon: "fa-chart-line", label: "Revenue leak detection" },
  ];
  const comparisons = [
    ["Reacts after revenue is lost", "Catches issues before they become denials"],
    ["Sends a report full of jargon", "Sends a translator who explains why"],
    ["Runs a one-size-fits-all process", "Builds around your specialty's realities"],
    ["Treats billing as a black box", "Makes billing something you understand"],
    ["Clinical context is an afterthought", "Clinical context is the starting point"],
  ];
  const specialties = [
    { group: "Primary & Family Care", items: "Family Practice | Internal Medicine | Primary Care | Pediatrics | Preventive Healthcare | OB-GYN" },
    { group: "Internal Medicine Specialties", items: "Cardiology | Pulmonology & Sleep Medicine | Nephrology | Gastroenterology | Rheumatology | Hematology | Oncology | Radiation Oncology" },
    { group: "Surgical & Procedural", items: "General Surgery | Ambulatory Surgical | Anesthesiology | Orthopedics | Plastic Surgery | Podiatry | Urology | ENT | Ophthalmology | Dermatology" },
    { group: "Neuro, Rehab & Behavioral Health", items: "Neurology | Physical Therapy | Occupational Therapy | Speech Therapy | Behavioral Health & ABA | Psychiatry | CCM | Chiropractic" },
    { group: "Diagnostic, Facility & Other Care", items: "Radiology | Pathology | Critical Care | ER Billing | Urgent Care | Dental Care | Pain Management | DME | NEMT" },
  ];
  const platforms = ["Office Ally", "eClinicalWorks (eCW)", "CureMD", "AdvancedMD", "Kareo / Tebra", "DrChrono", "athenahealth", "NextGen Healthcare", "Practice Fusion", "ICANotes", "WebPT", "TherapyNotes", "ChiroTouch"];
  return (
    <section id="compliance" className="max-w-7xl mx-auto scroll-mt-28 px-4 sm:px-6 py-10 md:py-16">
      <div className="reveal-section grid grid-cols-2 md:grid-cols-5 gap-4 bg-soft-bg py-7 px-5 sm:px-8 rounded-[32px] md:rounded-[48px]">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 font-medium text-primary text-sm">
            <i className={`fas ${it.icon} text-xl text-accent shrink-0`}></i><span>{it.label}</span>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-6 mt-8">
        <div className="bg-primary rounded-[32px] p-6 sm:p-8 text-white">
          <span className="text-accent-soft font-semibold text-xs tracking-wider uppercase">The Inovex difference</span>
          <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-6">Typical billing companies vs. Inovex</h2>
          <div className="space-y-3">
            {comparisons.map(([typical, inovex]) => (
              <div key={typical} className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white/10 rounded-xl px-3 py-3 text-white/65">{typical}</div>
                <div className="bg-accent/20 rounded-xl px-3 py-3 text-white font-medium"><i className="fas fa-check text-accent-soft mr-2"></i>{inovex}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-slate-200 rounded-[32px] p-6 sm:p-8">
          <span className="text-accent font-semibold text-xs tracking-wider uppercase">Built for real practices</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark-text mt-3 mb-5">Specialties and platforms we understand</h2>
          <p className="text-light-text text-sm leading-relaxed mb-5">From primary care to specialized clinical work, we adapt to how your practice actually operates.</p>
          <div className="space-y-4 mb-6">
            {specialties.map((specialty) => <div key={specialty.group}><p className="text-xs font-semibold text-primary mb-1">{specialty.group}</p><p className="text-xs leading-5 text-light-text">{specialty.items}</p></div>)}
          </div>
          <p className="text-dark-text text-sm font-semibold mb-3">We plug into the software you already use.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-light-text">{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
