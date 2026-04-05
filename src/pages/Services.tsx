import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Droplets, Shield, Leaf, Zap } from 'lucide-react';

export default function Services() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const serviceCategories = [
    {
      title: 'Consultation & Design',
      icon: Droplets,
      items: [
        { name: 'On-site Analysis & Testing', desc: 'Comprehensive water and soil quality assessments performed directly on-site for aquatic and terrestrial environments. Thorough testing delivers accurate data that forms the foundation for all project decisions and long-term ecological success.' },
        { name: 'Erosion & Slope Protection', desc: 'Eco-friendly stabilization solutions using engineered rock walls and natural looking rock retaining systems to control erosion and protect slopes in a natural, lasting manner.' },
        { name: 'Remediation & Restoration', desc: 'Targeted restoration of ponds, wetlands, and natural water systems through biological and ecological balance techniques that promote long-term health without harsh chemicals.' },
        { name: 'Modelling (CAD/3D)', desc: 'Detailed CAD drawings, realistic 3D visualizations, and physical scale models that allow clear visualization of the finished project from the earliest stages.' },
        { name: 'Rock Work and Artistry', desc: 'Custom rockwork and stone features crafted to combine artistic expression with structural strength, resulting in natural-looking formations that enhance the overall environment.' },
      ]
    },
    {
      title: 'Aquatic Architecture',
      icon: Zap,
      items: [
        { name: 'Natural Pools & Lagoons', desc: 'Design and construction of chemical-free natural swimming pools and lagoons that provide clear, healthy water while blending naturally into the surrounding landscape.' },
        { name: 'Habitats & Vivariums', desc: 'Custom design and building of unique indoor and outdoor habitats, terrariums, and paludariums that support healthy, self-sustaining ecosystems for specialized plants and animals.' },
        { name: 'Viewing Window Ponds', desc: 'Creation of distinctive ponds featuring structural glass viewing panels, offering clear underwater views while maintaining full structural integrity and watertightness.' },
      ]
    },
    {
      title: 'Specialized Construction',
      icon: Leaf,
      items: [
        { name: 'Water & Fire Features', desc: 'Design and installation of dramatic fountains, cascades, and integrated water-and-fire elements that create striking visual and sensory focal points.' },
        { name: 'Equipment & Material Sourcing', desc: 'Thoughtful sourcing of premium pumps, filters, liners, and specialized materials selected for reliability, longevity, and environmental compatibility.' },
        { name: 'Living Walls & Water Play', desc: 'Vertical gardens and interactive water features designed for residential and public spaces, delivering both aesthetic value and functional enjoyment with low maintenance.' },
        { name: 'Fabrication (Off & On-site)', desc: 'Precision fabrication of custom architectural elements and aquatic systems, completed either in the workshop or directly on-site as needed for the best possible fit and finish.' },
      ]
    },
    {
      title: 'Environmental Services',
      icon: Shield,
      items: [
        { name: 'Design & Engineering', desc: 'Specialized architectural and biophilic design for complex habitats and formal structures. Each design is carefully developed to balance beauty, functionality, and ecological harmony specific to the site.' },
        { name: 'Forestry & Fire Defense', desc: 'Specialized water-based fire protection systems designed to safeguard properties and forested areas while supporting overall landscape and ecosystem health.' },
        { name: 'Habitat Enhancement', desc: 'Enhancement and restoration of habitats to better support aquatic life, marginal plants, and wildlife through thoughtful additions that improve biodiversity and ecosystem resilience.' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-forest mb-6">What We Do</h1>
          <p className="text-forest/60 max-w-2xl mx-auto">
            From the initial spark of an idea to long-term environmental management, we provide a full spectrum of services for aquatic and terrestrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {serviceCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-gray-100 hover:border-teal-aqua transition-all group rounded-sm"
            >
              <cat.icon className="w-10 h-10 text-teal-aqua mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif text-forest mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map(item => (
                  <li key={item.name} className="text-sm text-forest/70 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-accent rounded-full mt-1.5 shrink-0" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Accordion */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-forest mb-12 text-center">Detailed Service Breakdown</h2>
          <div className="space-y-4">
            {serviceCategories.flatMap(c => c.items).map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left group"
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                >
                  <span className="text-lg font-medium text-forest group-hover:text-teal-aqua transition-colors">{item.name}</span>
                  {activeAccordion === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === idx ? 'auto' : 0, opacity: activeAccordion === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-forest/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
