import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RockArtistryConcepts() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const livingSpaces = [
    {
      img: 'https://i.imgur.com/sWKea8s.jpg',
      caption: 'Serene beige bedroom with layered rock headboard',
      desc: 'Organic layered rock feature wall creating a serene sanctuary'
    },
    {
      img: 'https://i.imgur.com/HfzbIiR.jpg',
      caption: 'Cave-like bedroom with sculptural ceiling and water view',
      desc: 'Immersive subterranean aesthetic with seamless transitions'
    },
    {
      img: 'https://i.imgur.com/5qd4xNX.jpg',
      caption: 'Dark dramatic bedroom with jagged rock wall',
      desc: 'Bold textures and deep shadows for a primitive luxury feel'
    },
    {
      img: 'https://i.imgur.com/1b2IOft.jpg',
      caption: 'Modern living room with massive fractured rock feature wall',
      desc: 'Architectural statement piece blending raw nature with modern lines'
    }
  ];

  const bathrooms = [
    {
      img: 'https://i.imgur.com/lzm8NgM.jpg',
      caption: 'Rock column shower with mossy ceiling',
      desc: 'Vertical stone elements integrated with living greenery'
    },
    {
      img: 'https://i.imgur.com/BSZfF7k.jpg',
      caption: 'Glass-enclosed shower with full rock walls',
      desc: 'Sleek transparency meets rugged, hand-sculpted textures'
    },
    {
      img: 'https://i.imgur.com/rG0KQ3o.jpg',
      caption: 'Indoor waterfall pool with rock walls and plants',
      desc: 'A private oasis where water flows over custom rock formations'
    },
    {
      img: 'https://i.imgur.com/kzIWXJH.jpg',
      caption: 'Moss-covered rock shower with pebble floor',
      desc: 'Tactile natural materials for a grounding sensory experience'
    }
  ];

  const wineCellars = [
    {
      img: 'https://i.imgur.com/Xo6GlaE.jpg',
      caption: 'Cave-style wine tasting room with vineyard view',
      desc: 'Atmospheric stone vaulting designed for connoisseurs'
    },
    {
      img: 'https://i.imgur.com/qvzmP5h.jpg',
      caption: 'Underground-style rock wine cellar with stone table',
      desc: 'Authentic subterranean feel with integrated stone furniture'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <div className="relative bg-[#fcfaf8] text-[#2d2a26] font-sans selection:bg-teal-aqua/20">
      <Helmet>
        <title>Rock Artistry – Concept Art | Aqua-Environs Construction</title>
        <meta name="description" content="Private Concept Gallery of Artificial Rock Artistry. Hyper-realistic rock features for immersive natural environments." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.imgur.com/YpODo0g.jpg" 
            alt="Rock Artistry Concept"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <span className="block text-teal-aqua uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-6">
              Concept Art
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight">
              ROCK ARTISTRY
            </h1>
            <div className="space-y-2 mb-10">
              <p className="text-white/90 text-lg md:text-2xl font-light tracking-[0.2em] uppercase">
                Where Nature Meets Modern Living
              </p>
            </div>
            <Link 
              to="/contact?service=Rock Work %26 Artistry" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-gold-accent rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-accent hover:text-white transition-all group shadow-xl"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" 
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 px-6 bg-[#dfd7cf]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-12 text-[#1a1a1a]">
              Artificial Rock Artistry – Concept Gallery
            </h2>
            <div className="space-y-8 text-lg text-[#4a4540] leading-relaxed font-light">
              <p>
                At Aqua Environs Construction we craft hyper-realistic artificial rock features that transform spaces into immersive natural environments. Our work bridges the gap between raw geological power and refined architectural elegance.
              </p>
              <p>
                Sculpted with lightweight durable substrates, hand-applied textures, pigments, and integrated lighting or water elements — our features are lighter and more versatile than real stone, yet virtually indistinguishable to the eye and touch.
              </p>
              <p className="text-teal-aqua font-medium italic">
                The following curated collections represent concept art designed to inspire your next bespoke project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Living Spaces Section */}
      <section className="py-24 bg-[#f5f2ef] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-4 uppercase tracking-widest">Living Spaces</h2>
            <div className="w-12 h-0.5 bg-teal-aqua mx-auto mb-6" />
            <p className="text-[#6b655f] max-w-2xl mx-auto font-light italic">
              Integrating raw stone textures into the most intimate areas of the home, creating a sense of permanence and peace.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
          >
            {livingSpaces.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#e5e1dc] mb-6 rounded-sm shadow-sm relative">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-aqua">Concept Art</p>
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-1">{item.caption}</h3>
                  <p className="text-sm text-[#6b655f] italic font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bathrooms & Showers Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-4 uppercase tracking-widest">Bathrooms & Showers</h2>
            <div className="w-12 h-0.5 bg-teal-aqua mx-auto mb-6" />
            <p className="text-[#6b655f] max-w-2xl mx-auto font-light italic">
              Transforming daily rituals into immersive experiences within sculpted stone sanctuaries.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {bathrooms.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="aspect-[2/3] overflow-hidden bg-[#e5e1dc] mb-4 rounded-sm shadow-sm relative">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-aqua">Concept Art</p>
                  <h4 className="text-sm font-serif text-[#1a1a1a] mb-1">{item.caption}</h4>
                  <p className="text-xs text-[#6b655f] italic font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wine Cellars Section */}
      <section className="py-24 bg-[#f5f2ef] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-4 uppercase tracking-widest">Wine Cellars</h2>
            <div className="w-12 h-0.5 bg-teal-aqua mx-auto mb-6" />
            <p className="text-[#6b655f] max-w-2xl mx-auto font-light italic">
              Subterranean-inspired storage that provides the perfect atmospheric backdrop for your collection.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {wineCellars.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="aspect-video overflow-hidden bg-[#e5e1dc] mb-6 rounded-sm shadow-sm relative">
                  <img 
                    src={item.img} 
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-aqua">Concept Art</p>
                  <h3 className="text-lg font-serif text-[#1a1a1a] mb-1">{item.caption}</h3>
                  <p className="text-sm text-[#6b655f] italic font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing / CTA Section */}
      <section className="py-32 px-6 text-center bg-[#4b4b4b]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white">
              Ready to bring one of these concepts to life in your home?
            </h2>
            <p className="text-lg text-white/90 mb-12 font-light leading-relaxed">
              Our artificial rock work integrates seamlessly with aquatic and terrestrial environments for a truly unique result. We specialize in turning these ambitious visions into tangible, lasting realities.
              <br />
              Contact us to start a conversation.
            </p>
            <Link 
              to="/contact?service=Rock Work %26 Artistry" 
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-gold-accent rounded-sm text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold-accent hover:text-white transition-all group shadow-xl"
            >
              Start A Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#4b4b4b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/60 text-center md:text-left">
            Private Concept Gallery • All images are concept art for inspirational purposes.
          </p>
          <Link 
            to="/" 
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-teal-aqua hover:text-white transition-colors"
          >
            ← Back to Aqua Environs
          </Link>
        </div>
      </footer>
    </div>
  );
}
