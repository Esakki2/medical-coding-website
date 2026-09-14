"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import founderImage from "../assets/WhatsApp Image 2026-09-13 at 22.49.50.jpeg";

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".founder-text-child", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} id="about" className="founder-theme max-w-7xl mx-auto scroll-mt-28 px-4 sm:px-6 py-12 md:py-16 rounded-[40px] md:rounded-[56px]">
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-gradient-to-br from-white to-[#f7fbfe] rounded-[48px] p-8 md:p-14 border border-[#e6f0f7] shadow-premium-sm">
        <div className="flex-1 w-full">
          <div className="relative bg-gradient-to-br from-primary to-accent rounded-[40px] min-h-[340px] md:min-h-[400px] flex items-center justify-center shadow-premium-md overflow-hidden">
            <Image
              src={founderImage}
              alt="Dr. Nafiya, founder of INOVEX BUSINESS SOLUTIONS"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_25%]"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
            {/* <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-primary font-bold text-sm">CPC • CCS</div>
              <div className="text-light-text text-xs">Certified Coder</div>
            </div> */}
          </div>
        </div>
        <div className="flex-1">
          <span className="founder-text-child text-accent font-semibold text-xs tracking-wider uppercase">WHO RUNS THIS</span>
          <h2 className="founder-text-child text-3xl md:text-4xl font-semibold text-dark-text mt-3 mb-2">Founded by a clinician. Built for clinicians.</h2>
          <p className="founder-text-child text-light-text text-base md:text-lg mb-5">
            Dr. Nafiya, MOT (Neuro), certified Pediasuite therapist, has treated patients daily and coded claims since 2014. She knows both sides of a denial — the exam room and the software behind it.
          </p>
          <div className="founder-text-child border-l-4 border-accent pl-5 py-1 italic font-medium text-primary">
            &ldquo;I&apos;ve sat in the treatment room, and I&apos;ve sat behind the claims software. I built Inovex to close the gap between the two.&rdquo;
            <span className="block not-italic text-sm font-semibold mt-3">— Dr. Nafiya, Founder</span>
          </div>
        </div>
      </section>
    </div>
  );
}
