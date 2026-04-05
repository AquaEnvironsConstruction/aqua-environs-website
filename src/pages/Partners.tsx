import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const partners = [
    'ZooLex', 'AZA', 'Site Safe', 'Filtrific', 'Kukutai', 'AALSO', 'IOB', 'ACI', 'ASQ', 
    'Clean-Flo', 'Porter Hire', 'Heavy Trax', 'AERF', 
    'River Restoration Northwest', 'Wetland Trust', 'M.J. Murphy Ltd', 'World Aquaculture Society'
  ];

  return (
    <div className="pt-32 pb-24 bg-earth-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-forest mb-8">Partners & Affiliations</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            We collaborate with industry leaders and professional organizations worldwide to ensure the highest standards of safety, quality, and environmental stewardship.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 flex items-center justify-center text-center rounded-sm shadow-sm hover:shadow-md transition-shadow group w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(16.666%-2rem)] min-h-[140px]"
            >
              <span className="text-forest/40 font-bold uppercase tracking-widest text-[10px] md:text-xs group-hover:text-teal-aqua transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-forest text-white rounded-sm text-center">
          <h2 className="text-2xl font-serif mb-6">Interested in collaborating?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We are always looking for innovative partners in the fields of environmental engineering, landscape architecture, and aquatic conservation.
          </p>
          <Link to="/contact?service=Becoming a Partner" className="inline-block px-8 py-3 border border-gold-accent text-gold-accent uppercase tracking-widest text-xs font-bold hover:bg-gold-accent hover:text-white transition-all">
            Become A Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
