import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Lakes & Ponds', 'Rock Work', 'Water Features', 'Habitats'];

  const projects = [
    { title: 'Schist Waterfall', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/g0ZUfNP.jpg' },
    { title: 'Puerto Rico Cave', cat: 'Rock Work', img: 'https://i.imgur.com/Z1OUKEN.jpg' },
    { title: 'Parnell Water Feature', cat: 'Water Features', img: 'https://i.imgur.com/BfMmEtk.jpg' },
    { title: 'Southeast Asia Jungle Track', cat: 'Habitats', img: 'https://i.imgur.com/8n7JkyZ.jpg' },

    { title: 'Laclede Idaho Pond', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/QVSfiHq.jpg' },
    { title: 'Artificial Schist Sculpt', cat: 'Rock Work', img: 'https://i.imgur.com/9ghuW8M.jpg' },
    { title: 'Pond', cat: 'Water Features', img: 'https://i.imgur.com/haoYZpS.jpg' },
    { title: 'Otters Exhibit', cat: 'Habitats', img: 'https://i.imgur.com/82ZUJ0J.jpg' },

    { title: 'Karaka Lake Beach', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/qAhnfZr.jpg' },
    { title: 'Murray River', cat: 'Rock Work', img: 'https://i.imgur.com/kygw9cn.jpg' },
    { title: 'Remuera Stainless Bowl', cat: 'Water Features', img: 'https://i.imgur.com/9v5kpfs.jpg' },
    { title: 'Tigers Exhibit', cat: 'Habitats', img: 'https://i.imgur.com/22zO1OU.jpg' },

    { title: 'Otago Schist Waterfall', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/6yK2KZb.jpg' },
    { title: 'Basalt Columns', cat: 'Rock Work', img: 'https://i.imgur.com/gld62wH.jpg' },
    { title: 'Bubble Wall Salon', cat: 'Water Features', img: 'https://i.imgur.com/FG2lSz4.jpg' },
    { title: 'Africa Safari Track', cat: 'Habitats', img: 'https://i.imgur.com/jwNaB7e.jpg' },

    { title: 'Golf Pond Treatment', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/9zYxWnu.jpg' },
    { title: 'Scoria Rock', cat: 'Rock Work', img: 'https://i.imgur.com/eXYyJ4u.jpg' },
    { title: 'Schist Waterfall', cat: 'Water Features', img: 'https://i.imgur.com/eT0FjqC.jpg' },
    { title: 'Sunda Gharial Aquarium', cat: 'Habitats', img: 'https://i.imgur.com/yT1IWjC.jpg' },

    { title: 'Westland Schist', cat: 'Lakes & Ponds', img: 'https://i.imgur.com/dvKWggX.jpg' },
    { title: 'Spraying Shotcrete', cat: 'Rock Work', img: 'https://i.imgur.com/QZWuEWg.jpg' },
    { title: 'Water and Fire Feature', cat: 'Water Features', img: 'https://i.imgur.com/sdLc0dA.jpg' },
    { title: 'Monitor Lizard Exhibit', cat: 'Habitats', img: 'https://i.imgur.com/YelXbVY.jpg' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="pt-32 pb-24 bg-white">
      <Helmet>
        <title>Portfolio | Aqua-Environs Construction</title>
        <meta name="description" content="View our portfolio of completed projects including natural swimming ponds, rock work, water features, and zoological habitats." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-forest mb-8">Selected Projects</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all rounded-full ${
                  filter === cat ? 'bg-teal-aqua text-white' : 'bg-gray-100 text-forest hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer bg-gray-50 border border-gray-100"
              >
                {project.img && (
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className={`absolute inset-0 ${project.img ? 'bg-forest/60 opacity-0 group-hover:opacity-100' : 'bg-forest/5 group-hover:bg-forest/60'} transition-all duration-500 flex flex-col justify-end p-8`}>
                  <p className="text-gold-accent text-xs uppercase tracking-widest mb-2">{project.cat}</p>
                  <h3 className={`${project.img ? 'text-white' : 'text-forest group-hover:text-white'} text-2xl font-serif transition-colors duration-500`}>{project.title}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-teal-aqua transition-all duration-500 mt-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://drive.google.com/file/d/1Yzv7QQxK4_CxO8pdRn3WOgvtVCteYk2Y/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-teal-aqua text-forest rounded-sm text-sm font-bold uppercase tracking-[0.2em] hover:bg-forest hover:text-white transition-all group shadow-xl shadow-teal-aqua/10"
          >
            See More Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
