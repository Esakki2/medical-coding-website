export default function TechStrip() {
  const comparisons = [
    ["Reacts after revenue is lost", "Catches issues before they become denials"],
    ["Sends a report full of jargon", "Sends a translator who explains why"],
    ["One-size-fits-all process", "Built around your specialty's realities"],
    ["Clinical context is an afterthought", "Clinical context is the starting point"],
  ];
  const specialties = [
    { group: "Primary Care & General Medicine", items: ["Family Medicine", "Internal Medicine", "Primary Care", "Pediatrics", "Geriatrics", "Preventive Medicine"] },
    { group: "Women’s Health", items: ["OB-GYN", "Gynecology", "Maternal-Fetal Medicine", "Reproductive Medicine", "Fertility"] },
    { group: "Medical Specialties", items: ["Cardiology", "Endocrinology", "Gastroenterology", "Nephrology", "Pulmonology", "Sleep Medicine", "Rheumatology", "Hematology", "Infectious Disease", "Oncology"] },
    { group: "Neurology & Neurosciences", items: ["Neurology", "Neurodiagnostics", "Neuromuscular Medicine"] },
    { group: "Psychiatry & Mental Health", items: ["Psychiatry", "Psychology", "Behavioral Health", "Addiction Medicine", "ABA"] },
    { group: "Advanced Care Specialties", items: ["Physical Therapy", "Occupational Therapy", "Speech-Language Pathology", "Chiropractic Care"] },
    { group: "Dental & Oral Health", items: ["General Dentistry", "Pediatric Dentistry", "Oral & Maxillofacial Surgery", "Orthodontics", "Periodontics"] },
    { group: "Surgical & Procedural Specialties", items: ["General Surgery", "Orthopedics", "Urology", "Plastic Surgery", "Podiatry", "ENT (Otolaryngology)", "Ophthalmology", "Dermatology", "Anesthesiology", "Pain Management"] },
    { group: "Emergency & Acute Care", items: ["Emergency Medicine", "Urgent Care", "Critical Care"] },
    { group: "Diagnostic & Laboratory Services", items: ["Radiology", "Pathology", "Laboratory Services"] },
    { group: "Post-Acute, Long-Term & Facility Care", items: ["Skilled Nursing Facilities (SNF)", "Nursing Facilities", "Long-Term Care", "Home Health", "Hospice & Palliative Care"] },
    { group: "Specialized Healthcare Services", items: ["Chronic Care Management (CCM)", "Durable Medical Equipment (DME)", "Non-Emergency Medical Transportation (NEMT)"] },
  ];
  const platforms = ["Office Ally", "eClinicalWorks", "AdvancedMD", "Kareo / Tebra", "athenahealth", "NextGen", "TherapyNotes", "WebPT", "ChiroTouch"];
  return (
    <section id="compliance" className="scroll-mt-28 px-4 py-12 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] bg-primary p-6 text-white sm:p-10">
          <span className="font-semibold text-xs tracking-wider uppercase text-accent-soft">THE DIFFERENCE</span>
          <h2 className="text-3xl md:text-5xl font-semibold mt-3 mb-8">Typical billing companies vs. Inovex</h2>
          <div className="table-scroll overflow-x-auto rounded-2xl border border-accent/40">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f6fafd] text-sm uppercase tracking-wider">
                  <th scope="col" className="w-1/2 px-4 py-4 font-semibold text-[#4b5e6e] sm:px-6">Typical billing companies</th>
                  <th scope="col" className="w-1/2 border-l-4 border-[#f07d62] bg-[#f2b544] px-4 py-4 font-bold text-[#0c1e2e] sm:px-6">Inovex</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([typical, inovex]) => (
                  <tr key={typical} className="border-t border-slate-200 align-top">
                    <td className="bg-white px-4 py-5 text-base leading-7 text-[#4b5e6e] sm:px-6">{typical}</td>
                    <td className="border-l-4 border-[#f07d62] bg-[#fff1d2] px-4 py-5 text-base font-medium leading-7 text-[#0c1e2e] sm:px-6"><i className="fas fa-check mr-2 text-[#f07d62]"></i>{inovex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
