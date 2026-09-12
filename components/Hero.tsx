"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-line-1", { y: 60, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".hero-line-2", { y: 60, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-stat", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-visual", { scale: 0.9, opacity: 0, duration: 1 }, "-=0.8")
        .from(".mini-card", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
      gsap.to(".float-icon", { y: -12, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6">
      <section className="py-10 md:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        <div className="flex-1 w-full min-w-0">
          <span className="hero-badge inline-block bg-accent-soft text-primary font-semibold text-xs px-5 py-2 rounded-full mb-6 tracking-wider uppercase border border-accent/20">
            <i className="fas fa-shield-alt mr-2"></i>Medical Billing &amp; Revenue Cycle Management
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-dark-text leading-[1.1]">
            <div className="hero-line-1">Stop Losing Money</div>
            <div className="hero-line-2 gradient-text">to Paperwork.</div>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-light-text mb-8 max-w-xl">
            You spent years becoming a doctor. Not a billing expert. Not a claims investigator. Inovex turns your clinical work into revenue that actually lands in your account.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#contact" className="hero-cta inline-flex items-center justify-center gap-2 text-center bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary-light hover:-translate-y-0.5 transition-all">
              Get a Free Revenue Check-Up <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="hero-cta inline-flex items-center justify-center gap-2 text-center bg-transparent text-primary border-2 border-primary px-7 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
              Talk to Us
            </a>
          </div>
          <div className="flex gap-10 mt-10 flex-wrap">
            {[
              { val: "2014", label: "billing expertise since" },
              { val: "8", label: "revenue gaps we close" },
              { val: "100%", label: "HIPAA certified" },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="text-3xl font-bold text-primary">{s.val}</div>
                <span className="text-sm text-light-text font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual flex-1 w-full min-w-0 bg-gradient-to-br from-[#eef7fc] to-[#d9eaf3] rounded-4xl p-8 shadow-premium-md border border-white/80 min-h-[380px] flex flex-col justify-center items-center">
          <i className="float-icon fas fa-file-invoice-dollar text-8xl text-primary/90 mb-4"></i>
          <div className="flex gap-4 flex-wrap justify-center mt-4">
            {["Claims", "Credentialing", "Revenue cycle"].map((t, i) => (
              <div key={i} className="mini-card bg-white px-5 py-3 rounded-full font-semibold text-sm text-primary shadow-premium-sm flex items-center gap-2">
                <i className="fas fa-check-circle text-accent"></i> {t}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-primary font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
            your practice deserves to be paid
          </p>
        </div>
      </section>
    </div>
  );
}
