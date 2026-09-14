"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import RevenueOverview from "@/components/RevenueOverview";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import TechStrip from "@/components/TechStrip";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!prefersReducedMotion) {
        gsap.fromTo(".service-card", {
          x: -60,
          y: isMobile ? 24 : 36,
          opacity: 0,
          scale: 0.96,
        }, {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#services",
            start: isMobile ? "top 90%" : "top 80%",
            once: true,
          },
        });
      }

      if (isMobile) return;

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".stagger-cards").forEach((container) => {
        const cards = container.querySelectorAll(".stagger-item");
        gsap.from(cards, {
          y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: container, start: "top 80%" },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="page-shell">
      <Navbar /><Hero /><TrustBar /><RevenueOverview /><Services />
      <Founder /><TechStrip /><WhyChoose /><CTA /><Footer />
    </main>
  );
}
