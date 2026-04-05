import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Services', path: '/services' },
    { name: 'Priorities', path: '/priorities' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="flex flex-col">
            <div className="flex items-baseline text-xl md:text-2xl font-serif leading-none tracking-tight">
              <span className="text-[#4EB5E5]">AQUA-</span>
              <span className="text-[#B59A6D]">ENVIRONS</span>
            </div>
            <div className="text-[8px] md:text-[10px] tracking-[0.4em] text-[#4EB5E5] uppercase font-sans mt-0.5 font-bold">
              CONSTRUCTION
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-all hover:text-teal-aqua relative group ${
                scrolled ? 'text-forest/80' : 'text-white/90'
              } ${location.pathname === link.path ? 'text-teal-aqua!' : ''}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
          <Link 
            to="/for-sale"
            className="px-4 py-2 border border-gold-accent text-gold-accent text-xs tracking-widest uppercase hover:bg-gold-accent hover:text-white transition-all rounded-sm"
          >
            For Sale
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-forest' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-forest' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif ${location.pathname === link.path ? 'text-teal-aqua' : 'text-forest'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/for-sale"
                onClick={() => setIsOpen(false)}
                className="text-gold-accent font-medium"
              >
                For Sale
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
