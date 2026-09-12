"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import founderImage from "../assets/WhatsApp Image 2026-09-12 at 00.39.00.jpeg";

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
    <div ref={ref} id="about" className="max-w-7xl mx-auto scroll-mt-28 px-6 py-16">
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-gradient-to-br from-white to-[#f7fbfe] rounded-[48px] p-8 md:p-14 border border-[#e6f0f7] shadow-premium-sm">
        <div className="flex-1 w-full">
          <div className="relative bg-gradient-to-br from-primary to-accent rounded-[40px] min-h-[340px] md:min-h-[400px] flex items-center justify-center shadow-premium-md overflow-hidden">
            <Image
              src={founderImage}
              alt="Dr. Nafiya, founder of INOVEX BUSINESS SOLUTIONS"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
            {/* <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3 shadow-lg">
              <div className="text-primary font-bold text-sm">CPC • CCS</div>
              <div className="text-light-text text-xs">Certified Coder</div>
            </div> */}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="founder-text-child text-3xl md:text-4xl font-semibold text-dark-text mb-2">The Inovex Advantage</h2>
          <div className="founder-text-child text-accent font-semibold text-lg mb-6">A Doctor&apos;s Eye. A Biller&apos;s Precision.</div>
          <p className="founder-text-child text-light-text text-base md:text-lg mb-5">
            Here is something no generic billing company can say: the person who built our process has actually treated the patients behind your claims. Dr. Nafiya has sat with a child working through a neurological condition, documented mental health encounters, and learned what medical necessity looks like from the inside.
          </p>
          <p className="founder-text-child text-light-text text-base md:text-lg mb-6">
            Led by Dr. Nafiya, MOT, a Neuro Occupational Therapist and certified Pediasuite therapist, Inovex brings hands-on clinical experience together with deep medical billing and coding expertise since 2014. It is the difference between processing a claim and understanding it.
          </p>
          <div className="founder-text-child border-l-4 border-accent pl-5 py-1 italic font-medium text-primary">
            &ldquo;We know what a real clinical encounter looks like, and we protect the revenue it deserves.&rdquo;
          </div>
        </div>
      </section>
    </div>
  );
}
