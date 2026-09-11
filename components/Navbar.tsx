"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.from(navRef.current, { y: -40, duration: 1, ease: "power3.out" });
  }, []);
  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-2xl font-bold text-primary">
          <i className="fas fa-heartbeat text-accent text-3xl"></i>
          inovex<span className="text-accent">.</span>
        </div>
        <nav className="w-full sm:w-auto flex gap-x-4 sm:gap-x-8 gap-y-2 items-center flex-wrap justify-center text-sm sm:text-base">
          <a href="#services" className="text-dark-text font-medium hover:text-accent transition-colors">Services</a>
          <a href="#about" className="text-dark-text font-medium hover:text-accent transition-colors">About</a>
          <a href="#compliance" className="text-dark-text font-medium hover:text-accent transition-colors">Compliance</a>
          <a href="#contact" className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">Contact</a>
        </nav>
      </div>
    </header>
  );
}
