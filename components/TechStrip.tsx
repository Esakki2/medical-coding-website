export default function TechStrip() {
  const comparisons = [
    ["Reacts after revenue is lost", "Catches issues before they become denials"],
    ["Sends a report full of jargon", "Sends a translator who explains why"],
    ["One-size-fits-all process", "Built around your specialty's realities"],
    ["Clinical context is an afterthought", "Clinical context is the starting point"],
  ];
  const specialties = [
    { group: "Primary & Family Care", items: ["Family Practice", "Internal Medicine", "Primary Care", "Pediatrics", "Preventive Healthcare", "OB-GYN"] },
    { group: "Internal Medicine Specialties", items: ["Cardiology", "Pulmonology & Sleep Medicine", "Nephrology", "Gastroenterology", "Rheumatology", "Hematology", "Oncology", "Radiation Oncology"] },
    { group: "Surgical & Procedural", items: ["General Surgery", "Ambulatory Surgical", "Anesthesiology", "Orthopedics", "Plastic Surgery", "Podiatry", "Urology", "ENT (Otolaryngology)", "Ophthalmology", "Dermatology"] },
    { group: "Neuro, Rehab & Behavioral Health", items: ["Neurology", "Physical Therapy (PT)", "Occupational Therapy (OT)", "Speech Therapy (ST)", "Behavioral Health & ABA / Mental Health", "Psychiatry", "Chronic Care Management (CCM)", "Chiropractic"] },
    { group: "Diagnostic, Facility & Other Care", items: ["Radiology", "Pathology", "Critical Care", "ER Billing", "Urgent Care", "Dental Care", "Pain Management", "Durable Medical Equipment (DME)", "Non-Emergency Medical Transport (NEMT)"] },
  ];
  const platforms = ["Office Ally", "eClinicalWorks", "AdvancedMD", "Kareo / Tebra", "athenahealth", "NextGen", "TherapyNotes", "WebPT", "ChiroTouch"];
  return (
    <section id="compliance" className="scroll-mt-28 px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="bg-primary rounded-[32px] p-6 text-white sm:p-10">
          <span className="text-accent-soft font-semibold text-xs tracking-wider uppercase">THE DIFFERENCE</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-8">Typical billing companies vs. Inovex, side by side.</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {comparisons.map(([typical, inovex]) => (
              <div key={typical} className="grid gap-2 sm:grid-cols-2">
                <div className="bg-white/10 rounded-xl px-4 py-4 text-base leading-7 text-white/70">{typical}</div>
                <div className="bg-accent/20 rounded-xl px-4 py-4 text-base font-medium leading-7 text-white"><i className="fas fa-check text-accent-soft mr-2"></i>{inovex}</div>
              </div>
            ))}
          </div>
        </div>
        <div id="specialties" className="mt-12 scroll-mt-28 rounded-[32px] border border-slate-200 bg-white p-6 shadow-premium-sm sm:p-10">
          <span className="text-accent font-semibold text-xs tracking-wider uppercase">SPECIALTIES &amp; PLATFORMS</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-dark-text mt-3 mb-5">Built for how your practice actually runs.</h2>
          <p className="max-w-4xl text-lg leading-8 text-light-text mb-8">From the first visit of primary care to the most specialized clinical work, every specialty below is handled the way it truly operates in practice — including the ones most billing companies never fully understand.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => <div key={specialty.group} className="rounded-2xl bg-soft-bg p-5"><h3 className="text-lg font-bold leading-7 text-primary mb-3">{specialty.group}</h3><div className="flex flex-wrap gap-2">{specialty.items.map((item) => <span key={item} className="rounded-full border border-accent/20 bg-white px-3 py-1.5 text-sm leading-5 text-light-text">{item}</span>)}</div></div>)}
          </div>
          <div className="mt-8 border-t border-slate-200 pt-7"><h3 className="mb-4 text-lg font-bold text-primary">Platforms</h3><div className="flex flex-wrap gap-3">{platforms.map((platform) => <span key={platform} className="rounded-full border border-primary/15 bg-accent-soft px-4 py-2 text-base font-medium text-primary">{platform}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}
