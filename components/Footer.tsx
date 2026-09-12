import Image from "next/image";
import logoImage from "../assets/logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-text text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="relative h-20 w-52 overflow-hidden rounded-lg bg-white">
              <Image
                src={logoImage}
                alt="INOVEX Business Solutions"
                fill
                sizes="176px"
                className="object-cover object-center"
              />
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
          Copyright {year} INOVEX BUSINESS SOLUTIONS PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
