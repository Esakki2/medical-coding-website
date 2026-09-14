export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f4c81] via-[#123d68] to-[#31a9a9] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <div className="inline-flex flex-col rounded-xl border border-white/15 bg-white/5 px-4 py-3 shadow-lg shadow-slate-900/10 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black tracking-[0.18em] text-[#f7fbff] uppercase">INOVEX</span>
              <span className="mt-1 text-[0.58rem] sm:text-[0.7rem] font-semibold tracking-[0.18em] text-[#c8f5ee] uppercase">Business Solutions</span>
            </div>
            <address className="mt-4 max-w-sm not-italic text-sm leading-6 text-white/75">
              No. 5, Sri Ram Nagar, 1st Main Road, Mugalivakkam, Porur, Chennai - 600116
            </address>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f2b544] transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f2b544] transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f2b544] transition-colors"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f2b544] transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm leading-6 text-white/70">
          © 2026 Inovex Business Solutions Pvt Ltd &nbsp; | &nbsp; HIPAA Certified
        </div>
      </div>
    </footer>
  );
}
