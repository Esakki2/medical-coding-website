"use client";

export default function Navbar() {
  return (
    <header className="navbar-theme sticky top-0 z-50 w-full border-b transition-shadow duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-3 py-3 sm:flex-row sm:gap-4 sm:px-6 sm:py-4">
        <div className="flex shrink-0 flex-col leading-none">
          <span className="text-base font-black uppercase tracking-[0.18em] text-primary sm:text-xl">INOVEX</span>
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[0.72rem]">Business Solutions</span>
        </div>

        <nav className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:w-auto sm:gap-x-6 sm:text-base">
          <a href="#services" className="whitespace-nowrap font-medium text-dark-text transition-colors hover:text-accent">Services</a>
          <a href="#about" className="whitespace-nowrap font-medium text-dark-text transition-colors hover:text-accent">About</a>
          <a href="#compliance" className="whitespace-nowrap font-medium text-dark-text transition-colors hover:text-accent">The Difference</a>
          <a href="#contact" className="shrink-0 rounded-full bg-accent-soft px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white sm:px-6 sm:py-2.5">Contact</a>
        </nav>
      </div>
    </header>
  );
}
