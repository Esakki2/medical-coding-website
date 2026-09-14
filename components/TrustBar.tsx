import { LeanCard, LeanCardContent } from "@/components/ui/lean-card";

export default function TrustBar() {
  const specialties = [
    {
      title: "We increase your revenu",
      body: "we chase what’s owed to you. Lost claims. Missed payments. Hidden revenue. We go after every dollar.",
      icon: "fa-arrow-trend-up",
    },
    {
      title: "We simplify the process",
      body: "No more decoding EOBs at 9pm. No more wondering why a claim bounced back for the third time. We build workflows that are clean, trackable, and make sense — so billing stops feeling like a second job",
      icon: "fa-diagram-project",
    },
    {
      title: "We make you understand it — doctor to doctor",
      body: "Because we understand the clinical side, we can explain the billing side — clearly, simply, and doctor to doctor.",
      icon: "fa-user-doctor",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="bg-soft-bg rounded-[32px] md:rounded-[48px] py-8 md:py-12 px-5 sm:px-8 md:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-5xl">
            <span className="text-accent font-bold text-sm tracking-wider uppercase md:text-base">THE PROBLEM</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-dark-text sm:text-5xl md:text-6xl">
              You did the work. Why are you still waiting to get paid?
            </h2>
            <p className="mt-7 text-xl leading-9 text-light-text md:text-2xl md:leading-10">
              That distinction matters more than it sounds. A denied claim is never just a billing event. It is the tail end of real clinical work — an assessment made, a treatment delivered, documentation completed in good faith — followed by the frustration of watching reimbursement stall through rejections, resubmissions, and silence.
            </p>
            <p className="mt-6 text-xl leading-9 text-light-text md:text-2xl md:leading-10">
              Inovex exists because that frustration deserves someone who has actually lived it, not just processed it.
            </p>
            <h3 className="mt-8 text-3xl font-bold text-primary md:text-4xl">Inovex was built</h3>
          </div>
          <h2 className="block w-fit max-w-full rounded-2xl bg-primary px-5 py-3 text-xl font-bold leading-8 text-white shadow-lg shadow-primary/15 sm:text-2xl md:text-3xl">
            Our Specialty — Getting You Paid, Fully and Faster.
          </h2>
          <div className="specialty-flex mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6">
            {specialties.map((specialty) => (
              <LeanCard key={specialty.title} className="specialty-card flex h-full w-full min-w-0 p-0">
                <LeanCardContent className="flex h-full w-full min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-premium-sm sm:p-6">
                  <article className="flex h-full min-w-0 flex-col">
                    <i className={`fas ${specialty.icon} mb-4 text-2xl text-accent`}></i>
                    <h3 className="text-xl font-bold leading-8 text-primary md:min-h-[4rem]">{specialty.title}</h3>
                    <p className="mt-3 flex-1 text-lg leading-8 text-light-text">{specialty.body}</p>
                  </article>
                </LeanCardContent>
              </LeanCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
