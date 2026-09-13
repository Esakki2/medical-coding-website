"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import logoImage from "../assets/logo.jpeg";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    gsap.from(navRef.current, { y: -40, duration: 1, ease: "power3.out" });
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white border-b border-slate-100 transition-shadow duration-300">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 transition-[padding] duration-300 ${isScrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"}`}>
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative h-20 w-44 shrink-0 overflow-hidden">
            <Image
              src={logoImage}
              alt="INOVEX Business Solutions"
              fill
              sizes="176px"
              className={`object-cover object-center origin-center transition-transform duration-300 ${isScrolled ? "scale-[0.72]" : "scale-100"}`}
            />
          </div>
          {/* <span className="text-xl font-bold lowercase tracking-tight text-primary">inovex</span> */}
        </div>
        <nav className="w-full sm:w-auto flex gap-x-4 sm:gap-x-8 gap-y-2 items-center flex-wrap justify-center text-sm sm:text-base">
          <a href="#services" className="text-dark-text font-medium hover:text-accent transition-colors">Services</a>
          <a href="#about" className="text-dark-text font-medium hover:text-accent transition-colors">About</a>
          <a href="#compliance" className="text-dark-text font-medium hover:text-accent transition-colors">The Difference</a>
          <a href="#contact" className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">Contact</a>
        </nav>
      </div>
    </header>
  );
}
