const benefits = [
  ["fa-user-doctor", "Led by a practicing clinician", "Founder Dr. Nafiya evaluates every denial with the same diagnostic rigor she applies to patient care."],
  ["fa-arrow-trend-up", "Proactive revenue recovery", "Denials, underpayments and aging accounts receive weekly follow-up, preventing earned revenue from going unclaimed."],
  ["fa-comments", "Complete transparency", "Every denial is explained in clear, professional terms: the cause, the resolution, and the outcome."],
  ["fa-sliders", "Specialty-specific workflows", "Processes are structured around the clinical and billing realities of your specific practice, not a generalized template."],
  ["fa-receipt", "Transparent, all-inclusive pricing", "A single rate covers billing, follow-up, denial management and reporting, with no undisclosed fees."],
  ["fa-phone-volume", "Consistent, direct communication", "Scheduled check-ins and 24/7 availability ensure you are never without a direct point of contact."],
  ["fa-shield-check", "Rigorous quality control", "Every claim undergoes independent review prior to submission, ensuring accuracy and compliance."],
  ["fa-award", "Established credibility", "HIPAA-certified, with a documented record in medical billing and coding since 2014."],
];

export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="max-w-3xl mb-10">
        <span className="eyebrow-text">WHY CHOOSE US</span>
        <h2 className="text-3xl md:text-5xl font-semibold text-dark-text mt-3 mb-5">Clinical expertise, applied to revenue.</h2>
        <p className="text-light-text text-lg leading-relaxed">Submitting a claim takes software. Recovering every dollar you&apos;ve earned takes someone who understands the clinical work behind it. That is the distinction Inovex is built on.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map(([icon, title, text]) => (
          <article key={title} className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-premium-sm">
            <i className={`fas ${icon} text-xl text-accent mb-5`}></i>
            <h3 className="text-lg font-semibold text-dark-text mb-2">{title}</h3>
            <p className="text-light-text text-base leading-7">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
