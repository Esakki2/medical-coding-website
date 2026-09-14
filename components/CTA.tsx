"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState("");
  const [fallbackEmailHref, setFallbackEmailHref] = useState("");
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-child", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setFormStatus("");

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const fallbackBody = [
      `Name: ${fields.name || ""}`,
      `Email: ${fields.email || ""}`,
      `Phone: ${fields.phone || "Not provided"}`,
      "",
      `Message: ${fields.message || ""}`,
    ].join("\n");
    const fallbackHref = `mailto:inovex.bs@gmail.com?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(fallbackBody)}`;

    try {
      setFallbackEmailHref("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      form.reset();
      setFormStatus(result.message);
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : "Unable to send your message right now.");
      setFallbackEmailHref(fallbackHref);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div ref={ref} id="contact" className="cta-theme max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 rounded-[40px] md:rounded-[56px]">
      <section className="bg-gradient-to-br from-primary to-[#1a5e8c] rounded-[60px] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5"></div>
        <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="relative z-10">
          <h2 className="cta-child text-3xl md:text-5xl font-semibold mb-4">Give your revenue the same standard of care.</h2>
          <p className="cta-child text-white/85 max-w-2xl mx-auto mb-8 text-lg">
            Your patients trust you with their health. Hand your revenue to someone who&apos;s earned it from the clinical side first.
          </p>
            <a href="mailto:inovex.bs@gmail.com?subject=Free%20Revenue%20Check-Up" className="cta-child inline-flex items-center justify-center gap-2 text-center bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:-translate-y-0.5 transition-all">
            Get Your Free Revenue Check-Up <i className="fas fa-arrow-right"></i>
          </a>
            <form
              onSubmit={handleSubmit}
              className="cta-child mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 rounded-3xl bg-white/10 p-5 text-left backdrop-blur-sm sm:p-7 md:grid-cols-2"
            >
              <label className="text-sm font-semibold text-white">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 font-normal text-dark-text outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </label>
              <label className="text-sm font-semibold text-white">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 font-normal text-dark-text outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </label>
              <label className="text-sm font-semibold text-white">
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 font-normal text-dark-text outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </label>
              <label className="text-sm font-semibold text-white md:col-span-2">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="mt-2 w-full resize-y rounded-xl border border-white/20 bg-white px-4 py-3 font-normal text-dark-text outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </label>
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent/90 md:col-span-2 md:justify-self-center"
              >
                {isSending ? "Sending..." : "Send Message"} <i className="fas fa-paper-plane"></i>
              </button>
              {formStatus && (
                <div className="text-center text-sm text-white md:col-span-2" role="status">
                  <p>{formStatus}</p>
                  {fallbackEmailHref && (
                    <a href={fallbackEmailHref} className="mt-2 inline-block font-semibold underline underline-offset-4">
                      Open your email app to send this message directly
                    </a>
                  )}
                </div>
              )}
            </form>
          <p className="cta-child mt-6 text-sm text-white/70">
              <i className="fas fa-envelope mr-2"></i>Inovex.bs@gmail.com
            <span className="mx-4">•</span>
            <i className="fas fa-phone-alt mr-2"></i>(91) 90804 24263
          </p>
        </div>
      </section>
    </div>
  );
}
