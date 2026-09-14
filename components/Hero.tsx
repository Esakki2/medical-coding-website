"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const heroImage = "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-word", {
          y: 44,
          opacity: 0,
          rotateX: -75,
          transformOrigin: "50% 100%",
          duration: 0.72,
          stagger: 0.055,
        }, "-=0.2")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-stat", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-visual", { scale: 0.9, opacity: 0, duration: 1 }, "-=0.8")
        .from(".mini-card", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");
      gsap.fromTo(".highlight-text", { backgroundSize: "0% 100%" }, {
        backgroundSize: "100% 100%",
        duration: 1.1,
        ease: "power2.out",
        delay: 1.1,
      });
      gsap.to(".float-icon", { y: -12, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6">
      <section className="py-10 md:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        <div className="flex-1 w-full min-w-0">
          <span className="hero-badge highlight-pill mb-6">
            <i className="fas fa-shield-alt mr-2"></i>HIPAA-CERTIFIED · BILLING SINCE 2014
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-dark-text leading-[1.1]">
            <span className="hero-word inline-block">Billing run by someone who&apos;s actually stood where you stand.</span>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-light-text mb-8 max-w-xl">
            Inovex is led by a practicing clinician. She reads a denial the way she&apos;d read a chart — so your revenue gets treated with the same rigor as your patients.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#contact" className="hero-cta inline-flex min-h-12 w-full items-center justify-center gap-2 text-center bg-primary text-white px-5 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-primary-light hover:-translate-y-0.5 transition-all sm:w-auto sm:px-7">
              Get a Free Revenue Check-Up <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#revenue" className="hero-cta inline-flex min-h-12 w-full items-center justify-center gap-2 text-center bg-transparent text-primary border-2 border-primary px-5 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-all sm:w-auto sm:px-7">
              See what we fix
            </a>
          </div>
          <div className="flex gap-10 mt-10 flex-wrap">
            {[
              { val: "2014", label: "billing since" },
              { val: "6", label: "questions asked per claim" },
              { val: "24/7", label: "support access" },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <div className="text-3xl font-bold text-primary">{s.val}</div>
                <span className="text-sm text-light-text font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual relative flex min-h-[420px] w-full min-w-0 flex-1 items-end justify-center overflow-hidden rounded-4xl border border-white/80 bg-[#edf2f1] shadow-premium-md sm:min-h-[520px]">
          <Image
            src={heroImage}
            alt="Dr. Nafiya, founder of INOVEX BUSINESS SOLUTIONS"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-white/10"></div>
          <div className="relative z-10 flex gap-4 flex-wrap justify-center px-4 mt-4">
              {["Claims", "Denials", "A/R follow-up"].map((t, i) => (
              <div key={i} className="mini-card bg-white px-5 py-3 rounded-full font-semibold text-sm text-primary shadow-premium-sm flex items-center gap-2">
                <i className="fas fa-check-circle text-accent"></i> {t}
              </div>
            ))}
          </div>
          <p className="relative z-10 mb-7 mt-6 text-sm font-medium text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              your clinical work deserves to be paid
          </p>
        </div>
      </section>
    </div>
  );
}
