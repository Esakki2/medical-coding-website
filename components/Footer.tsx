export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <i className="fas fa-heartbeat text-accent"></i>
              inovex<span className="text-accent">.</span>
            </div>
            <address className="mt-3 max-w-sm not-italic text-sm leading-6 text-white/60">
              No. 5, Sri Ram Nagar, 1st Main Road, Mugalivakkam, Porur, Chennai - 600116
            </address>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-accent transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-accent transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-accent transition-colors"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-accent transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm leading-6 text-white/60">
          Copyright {year} inovex - Medical Coding & HealthTech. All rights reserved. Built with precision & care.
        </div>
      </div>
    </footer>
  );
}
