import { motion } from 'motion/react';
import { Shield, Palette, Mountain, Bird, Home, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Priorities() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const priorities = [
    {
      id: 'habitat-remediation',
      title: 'Waterway & Natural Habitat Remediation',
      icon: Shield,
      desc: 'Restoring the health of rivers, lakes, and wetlands through advanced biological management and structural restoration. We combine science with creative design to revive ecosystems that are ecologically resilient and visually breathtaking.',
      img: 'https://i.imgur.com/54OWrWP.jpg',
      tags: ['Restoration', 'Ecological Resilience']
    },
    {
      id: 'rock-work',
      title: 'Rock work & artistry',
      icon: Palette,
      desc: 'Crafting custom stonework and rock features that blend artistic vision with structural integrity. Each piece is sculpted to feel organic to the landscape, delivering realistic beauty that lasts.',
      img: 'https://i.imgur.com/BHAvw0k.jpg',
      tags: ['Craftsmanship', 'Artistic Integrity']
    },
    {
      id: 'erosion-control',
      title: 'Erosion Control & Slope Stabilization',
      icon: Mountain,
      desc: 'Utilizing natural forms and engineering to stabilize slopes and protect water quality from sedimentation. Our solutions restore balance between land and water, creating elegant, secure transitions that stand the test of time.',
      img: 'https://i.imgur.com/D3MXPRY.jpg',
      link: 'https://drive.google.com/file/d/1JZR8UgkaZeRRVffx-5-Q5kRL4MvbpDPQ/view?usp=sharing',
      tags: ['Structural Stability', 'Slope Protection']
    },
    {
      id: 'zoological-conservation',
      title: 'Zoological & Aquaria Conservation',
      icon: Bird,
      desc: 'Designing immersive, life-sustaining habitats that promote animal welfare and conservation education. We create environments where wildlife truly thrives, forging meaningful connections between people and the natural world.',
      img: 'https://i.imgur.com/souw1Ku.jpg',
      tags: ['Conservation', 'Biodiversity']
    },
    {
      id: 'living-spaces',
      title: 'Eco-Design for Living Spaces',
      icon: Home,
      desc: 'Integrating natural swimming ponds, water features, and biophilic elements into residential architecture. We help clients achieve a holistic lifestyle where built spaces exist in harmony with nature.',
      img: 'https://i.imgur.com/dVuak7y.jpg',
      link: 'https://drive.google.com/file/d/1AuFVknEax2Az1Oz7eyTMFmJs14CQ8F1w/view?usp=sharing',
      tags: ['Biophilic Design', 'Natural Harmony']
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Our Priorities</h1>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            At AQUA~ENVIRONS, our work is guided by a set of core priorities that ensure every project contributes positively to the environment and the community.
          </p>
        </div>

        <div className="space-y-32">
          {priorities.map((item, idx) => (
            <motion.div 
              key={item.title}
              id={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center scroll-mt-32`}
            >
              <div className="flex-1">
                <item.icon className="w-12 h-12 text-teal-aqua mb-8" />
                <h2 className="text-3xl md:text-4xl font-serif mb-6">{item.title}</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-teal-aqua text-forest rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all mb-10 group shadow-lg shadow-teal-aqua/10"
                  >
                    See More
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}

                <div className="flex gap-4">
                  {item.tags.map(tag => (
                    <div key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative aspect-video overflow-hidden rounded-sm group">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
