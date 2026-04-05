import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col mb-6">
            <div className="flex items-baseline text-xl font-serif leading-none tracking-tight">
              <span className="text-[#4EB5E5]">AQUA-</span>
              <span className="text-[#B59A6D]">ENVIRONS</span>
            </div>
            <div className="text-[7px] tracking-[0.3em] text-[#4EB5E5] uppercase font-sans mt-0.5 font-bold">
              CONSTRUCTION
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
            "Where Water Meets Land" — Unifying aquatic and terrestrial environments through creative architecture and eco-friendly design.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/aquaenvirons/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:bg-origin-border transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100083676728285&sfnsn=wa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/darin-brenner-9b604838/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link to="/our-story" className="hover:text-teal-aqua transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-teal-aqua transition-colors">Services</Link></li>
            <li><Link to="/priorities" className="hover:text-teal-aqua transition-colors">Our Priorities</Link></li>
            <li><Link to="/portfolio" className="hover:text-teal-aqua transition-colors">Portfolio</Link></li>
            <li><Link to="/partners" className="hover:text-teal-aqua transition-colors">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-teal-aqua transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-teal-aqua mt-1" />
              <span>USA: +1 (916) 305-1373</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-teal-aqua mt-1" />
              <span>NZ: +64 27 347 8338</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-teal-aqua mt-1" />
              <span>darin@aquaenvirons.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-accent uppercase tracking-widest text-xs font-bold mb-6">Locations</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-aqua mt-1" />
              <span>Sacramento, California, USA</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-teal-aqua mt-1" />
              <span>Auckland, New Zealand</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-medium">
          <div className="flex flex-col gap-1">
            <span className="text-gold-accent/60 text-[9px]">Business Certifications</span>
            <p>SBE, CADIR, SAM, DUNN & UEI</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gold-accent/60 text-[9px]">California Licensure</span>
            <p>CSLB# 1098784 General A Engineering & C-27 Landscaping</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gold-accent/60 text-[9px]">Professional Status</span>
            <p>Licensed, Bonded & Insured</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gold-accent/60 text-[9px]">New Zealand PS3</span>
            <p>Producer Statement Author for B1, B2 & E2, E3</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} AQUA-ENVIRONS Construction. All Rights Reserved.</p>
        <p>Proudly serving California & New Zealand since 2006.</p>
      </div>
    </footer>
  );
}
