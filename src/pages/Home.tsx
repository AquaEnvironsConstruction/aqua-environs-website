import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Waves, Shield, Leaf, Zap, Anchor, Compass, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ShotcreteAwardLogo } from '../components/ShotcreteAwardLogo';

export default function Home() {
  const [jungleActive, setJungleActive] = useState(false);
  const [lowlandsActive, setLowlandsActive] = useState(false);

  useEffect(() => {
    const handleBlur = () => {
      // Small delay to ensure document.activeElement is updated
      setTimeout(() => {
        if (document.activeElement instanceof HTMLIFrameElement) {
          const title = document.activeElement.title;
          if (title === "South East Asia Jungle Track") {
            setJungleActive(true);
          } else if (title === "The Lowlands") {
            setLowlandsActive(true);
          }
        }
      }, 100);
    };
    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, []);

  const offerings = [
    { title: 'Consultation', icon: Compass, desc: 'On-site analysis & testing' },
    { title: 'Remediation', icon: Shield, desc: 'Environmental restoration' },
    { title: 'Modelling', icon: Zap, desc: 'CAD/3D & Miniature models' },
    { title: 'Sourcing', icon: Anchor, desc: 'Equipment & material procurement' },
    { title: 'Fabrication', icon: Leaf, desc: 'Off & on-site custom builds' },
    { title: 'Construction', icon: Waves, desc: 'Professional installation' },
    { title: 'Design', icon: Settings, desc: 'Engineering & creative planning' },
  ];

  const priorities = [
    { title: 'Waterway & Natural Habitat Remediation', img: 'https://i.imgur.com/54OWrWP.jpg', id: 'habitat-remediation' },
    { title: 'Rock work & artistry', img: 'https://i.imgur.com/5nfHTBh.jpg', id: 'rock-work' },
    { title: 'Erosion Control & Slope Stabilization', img: 'https://i.imgur.com/QzyyzCk.jpg', id: 'erosion-control' },
    { title: 'Zoological & Aquaria Conservation', img: 'https://i.imgur.com/GNUhReQ.jpg', id: 'zoological-conservation' },
    { title: 'Eco-Design for Living Spaces', img: 'https://i.imgur.com/dVuak7y.jpg', id: 'living-spaces' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/0pahb1q.jpg" 
            alt="Aqua-Environs Background"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-forest/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 tracking-tighter">
              <span className="text-[#4EB5E5]">AQUA-</span>
              <span className="text-[#B59A6D]">ENVIRONS</span>
            </h1>
            <p className="text-white text-lg md:text-2xl uppercase tracking-[0.3em] font-light mb-12">
              Where Water Meets Land
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-white/80 font-serif italic text-lg md:text-xl leading-relaxed">
                "And this our life, exempt from public haunt, Finds tongues in trees, books in the running brooks, Sermons in stones, and good in everything."
              </p>
              <p className="text-white/60 text-sm mt-2 uppercase tracking-widest">— William Shakespeare</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                to="/portfolio" 
                className="group relative px-10 py-4 bg-teal-aqua text-white uppercase tracking-widest text-sm font-bold overflow-hidden transition-all"
              >
                <span className="relative z-10">Explore Our Work</span>
                <div className="absolute inset-0 bg-forest translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-4 border border-white text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-forest transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
        </motion.div>

        {/* Recreated Award Logo */}
        <div className="absolute bottom-10 right-10 z-20 w-[100px] md:w-[120px] opacity-90">
          <ShotcreteAwardLogo />
        </div>
      </section>

      {/* What We Offer Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-forest mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gold-accent mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {offerings.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: false }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-earth-beige flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-aqua transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-forest group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-2 text-forest/90">{item.title}</h3>
                <p className="text-xs text-forest/60 italic">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities Teaser */}
      <section className="py-24 bg-forest text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Priorities</h2>
              <p className="text-white/60 leading-relaxed">
                We focus on projects that enhance biodiversity, protect natural resources, and create sustainable living environments that stand the test of time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <Link to="/priorities" className="flex items-center gap-2 text-gold-accent uppercase tracking-widest text-sm font-bold hover:gap-4 transition-all">
                View All Priorities <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {priorities.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: false }}
                whileHover={{ y: -10 }}
                className="relative h-80 group overflow-hidden rounded-sm"
              >
                <Link to={`/priorities#${item.id}`} className="block w-full h-full">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-sans text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] leading-tight opacity-90 group-hover:opacity-100 transition-opacity">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section: South East Asia Jungle Track */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-forest relative inline-block">
              South East Asia Jungle Track
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-gold-accent"
              />
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative aspect-video shadow-2xl rounded-sm overflow-hidden bg-forest/5 group ring-2 ring-teal-aqua/50"
          >
            {!jungleActive ? (
              <div 
                className="absolute inset-0 z-30 cursor-pointer group/thumb"
                onClick={() => setJungleActive(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/dRM4JHuG81k/maxresdefault.jpg" 
                  alt="South East Asia Jungle Track Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover/thumb:bg-forest/10 transition-colors" />
                
                {/* Custom Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-teal-aqua rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover/thumb:scale-110">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>

                {/* Breathing Thick Border Effect */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 border-[6px] border-teal-aqua rounded-sm pointer-events-none z-20"
                />
                
                {/* Subtle pulse glow effect around the container */}
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-teal-aqua/5 pointer-events-none z-0"
                />
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/dRM4JHuG81k?autoplay=1"
                title="South East Asia Jungle Track"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video Section: The Lowlands */}
      <section className="pb-24 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-forest relative inline-block">
              The Lowlands
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                className="absolute -bottom-2 left-0 h-1 bg-gold-accent"
              />
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative aspect-video shadow-2xl rounded-sm overflow-hidden bg-forest/5 group ring-2 ring-teal-aqua/50"
          >
            {!lowlandsActive ? (
              <div 
                className="absolute inset-0 z-30 cursor-pointer group/thumb"
                onClick={() => setLowlandsActive(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/cMtSB8j3IBc/maxresdefault.jpg" 
                  alt="The Lowlands Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover/thumb:bg-forest/10 transition-colors" />
                
                {/* Custom Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-teal-aqua rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover/thumb:scale-110">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>

                {/* Breathing Thick Border Effect */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 border-[6px] border-teal-aqua rounded-sm pointer-events-none z-20"
                />

                {/* Subtle pulse glow effect around the container */}
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-teal-aqua/5 pointer-events-none z-0"
                />
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/cMtSB8j3IBc?start=147&autoplay=1"
                title="The Lowlands"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-earth-beige relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        >
          <Droplets className="w-full h-full text-teal-aqua" />
        </motion.div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-8">Ready to transform your environment?</h2>
            <p className="text-forest/70 text-lg mb-12 max-w-2xl mx-auto">
              Whether it's a natural swimming pond, a complex aquatic life support system, or wildland fire protection, we bring decades of expertise to every project.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-forest text-white uppercase tracking-[0.2em] text-sm font-bold hover:bg-teal-aqua transition-all shadow-xl"
            >
              Start A Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Droplets({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}
