"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".h-panel");
      const scrollTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: section, pin: true, scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true, anticipatePin: 1,
        },
      });
      panels.forEach((panel) => {
        const inner = panel.querySelector(".h-panel-inner");
        if (!inner) return;
        gsap.from(inner, {
          y: 60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: panel, containerAnimation: scrollTween, start: "left center" },
        });
      });
      gsap.to(".h-progress-bar", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: () => `+=${track.scrollWidth}`, scrub: 0.3 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const slides = [
    { num: "01", icon: "fa-eye", title: "Total Visibility. Zero Guesswork.", desc: "See what has been billed and paid, what is pending, what was denied, and exactly where your revenue is leaking.", stat: "100%", statLabel: "clear answers", color: "from-[#0f4c81] to-[#2c6b9e]" },
    { num: "02", icon: "fa-user-doctor", title: "A Doctor's Eye", desc: "Our process is led by someone who understands clinical notes, medical necessity, and the real story behind every encounter.", stat: "2014", statLabel: "expertise since", color: "from-[#31a9a9] to-[#1e8a8a]" },
    { num: "03", icon: "fa-shield-heart", title: "Fewer Denials", desc: "Precise, compliant coding and thoughtful claim investigation help your revenue move forward instead of getting stuck.", stat: "8", statLabel: "ways we help", color: "from-[#2c6b9e] to-[#31a9a9]" },
    { num: "04", icon: "fa-chart-line", title: "Revenue Protection", desc: "We find the quiet leaks, follow up on what is owed, and help you fight for rates that reflect the care you provide.", stat: "1:1", statLabel: "direct partnership", color: "from-[#0c1e2e] to-[#0f4c81]" },
    { num: "05", icon: "fa-handshake", title: "Built Around Your Practice", desc: "No vague invoices and no handoffs. Just straight answers, every month, from a team that understands medicine and means business.", stat: "0", statLabel: "guesswork", color: "from-[#1e8a8a] to-[#0f4c81]" },
  ];

  return (
    <section ref={sectionRef} className="relative bg-soft-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="reveal-section flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="inline-block bg-accent-soft text-primary font-semibold text-xs px-5 py-2 rounded-full mb-4 tracking-wider uppercase border border-accent/20">
              <i className="fas fa-arrows-left-right mr-2"></i>Scroll to explore
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-dark-text">
              What we <span className="gradient-text">deliver</span>
            </h2>
          </div>
          <p className="text-light-text max-w-md text-base md:text-lg">
            A billing partner who sees the clinical story, protects your revenue, and keeps you informed.
          </p>
        </div>
        <div className="mt-8 h-[3px] w-full bg-slate-200 rounded-full overflow-hidden">
          <div className="h-progress-bar h-full bg-gradient-to-r from-primary to-accent origin-left scale-x-0 w-full rounded-full"></div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 px-6 pb-20 will-change-transform" style={{ width: "max-content" }}>
          {slides.map((s, i) => (
            <div key={i} className="h-panel w-[85vw] md:w-[520px] shrink-0">
              <div className={`h-panel-inner relative h-full bg-gradient-to-br ${s.color} rounded-[36px] p-10 md:p-12 text-white overflow-hidden shadow-premium-md min-h-[520px] flex flex-col justify-between`}>
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-white/5"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-white/25 leading-none">{s.num}</span>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <i className={`fas ${s.icon} text-2xl md:text-3xl`}></i>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">{s.title}</h3>
                  <p className="text-white/85 text-base md:text-lg leading-relaxed">{s.desc}</p>
                </div>
                <div className="relative z-10 pt-8 border-t border-white/20 flex items-end justify-between">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold">{s.stat}</div>
                    <div className="text-white/70 text-sm mt-1">{s.statLabel}</div>
                  </div>
                  <i className="fas fa-arrow-right text-white/40 text-xl"></i>
                </div>
              </div>
            </div>
          ))}
          <div className="h-panel w-[85vw] md:w-[400px] shrink-0 flex items-center">
            <div className="h-panel-inner text-center w-full">
              <i className="fas fa-arrow-right text-primary text-3xl mb-6 animate-pulse"></i>
              <h3 className="text-2xl md:text-3xl font-semibold text-dark-text mb-3">Ready to start?</h3>
              <p className="text-light-text mb-6">Your practice is already earning more than you are seeing. Let&apos;s go find it.</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary-light transition-all">
                Book Your Free Revenue Check-Up <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
