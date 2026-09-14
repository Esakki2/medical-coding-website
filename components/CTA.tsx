"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-child", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
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
            <a href="mailto:hello@inovex.health?subject=Free%20Revenue%20Check-Up" className="cta-child inline-flex items-center justify-center gap-2 text-center bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:-translate-y-0.5 transition-all">
            Get Your Free Revenue Check-Up <i className="fas fa-arrow-right"></i>
          </a>
          <p className="cta-child mt-6 text-sm text-white/70">
            <i className="fas fa-envelope mr-2"></i>hello@inovex.health
            <span className="mx-4">•</span>
            <i className="fas fa-phone-alt mr-2"></i>(91) 90804 24263
          </p>
        </div>
      </section>
    </div>
  );
}
