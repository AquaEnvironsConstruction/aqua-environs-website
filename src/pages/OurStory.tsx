import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function OurStory() {
  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Our Story | Aqua-Environs Construction</title>
        <meta name="description" content="Learn about the history and mission of Aqua-Environs Construction. Unifying aquatic and terrestrial environments through creative design and ecological restoration." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-forest mb-6">Our Story</h1>
          <div className="w-24 h-1 bg-gold-accent mb-8" />
          <p className="text-xl text-forest/60 font-light italic tracking-wide">
            "Unifying Aquatic and Terrestrial Environments, Solving Problems & Creating renewal"
          </p>
        </div>

        {/* The Humble Start Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif text-teal-aqua mb-8">A Humble Beginning</h2>
            <div className="space-y-6 text-forest/80 leading-relaxed">
              <p>
                Aqua-Environs Construction (AEC) was founded by Darin and Ora Brenner, a husband-and-wife team whose journey in water and landscape construction began in Seattle, Washington in 1991. The formal inception of AEC followed in 2006/07, born from a shared love for natural environments and artistic expression.
              </p>
              <p>
                Our start was truly humbling. In the early days of 2006 and 2007, Darin and Ora could be found driving through neighborhoods, passing out flyers to homes as child-rearing allowed. It was a grassroots effort fueled by a vision to create something unique in the construction world.
              </p>
              <p>
                Gradually, a wide variety of opportunities presented themselves through entrepreneurial-spirited customers with ambitious plans. These projects allowed us to learn and grow while simultaneously beginning our own new family.
              </p>
            </div>
          </motion.div>
          <div className="relative w-10/12 mx-auto">
            <img 
              src="https://i.imgur.com/6z0D7zf.jpg" 
              alt="Humble Beginnings"
              className="rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-8 border-earth-beige -z-10" />
          </div>
        </div>

        {/* New Zealand & Global Reach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
            <img 
              src="https://i.imgur.com/cVMpIYC.jpg" 
              alt="Global Perspective"
              className="rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 border-8 border-teal-aqua/20 -z-10" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-serif text-teal-aqua mb-8">A Global Perspective</h2>
            <div className="space-y-6 text-forest/80 leading-relaxed">
              <p>
                In AEC’s early years, New Zealand provided a unique training ground. The wide variety of needs in the country allowed us to become competent in many different inter-related fields of work. This experience shaped our ability to solve complex problems and handle diverse project requirements.
              </p>
              <p>
                Today, we perform consultancy and specialized design and construction services for clients both close to home and across the globe. With bases in our new Sacramento, California location and our long-standing Auckland, New Zealand origin, our work stretches from local neighborhoods to country-wide projects and beyond.
              </p>
              <p>
                We cater to a broad spectrum of clients, including homeowners, commercial businesses, and the civil infrastructure sectors, always maintaining the same level of care and detail.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy & Artistry */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-forest mb-6">Craftsmanship & Artistry</h2>
            <p className="text-forest/70 italic">
              "Having a love of water and natural landscape environments and their inherent elements coupled with a natural artistic talent—these specific interests and abilities have allowed us to distinguish ourselves."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-forest/80 leading-relaxed">
            <div className="space-y-6">
              <p>
                Our visionary, experimental nature and collaborative approach with clients and designers lead to inventive and rewarding outcomes. We have carved a unique "niche" by blending proven craftsmanship with the artistry of terrestrial and aquatic elements.
              </p>
              <p>
                We have become deeply competent in the biological and chemical complexities of these environments. Through direct experience, we gain an understanding of the relationship between the elements present, utilizing bio-solutions and eco-oriented methods that cater to natural processes.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Beyond "nature" projects, AEC has undertaken high-quality formal architectural water and landscape creations. We design and fabricate everything from formal fountains and conventional swimming pools to viewing window ponds and unusual indoor/outdoor aquariums.
              </p>
              <p>
                Our work includes living walls, water-play equipment, caves, grottos, and themed buildings that enrich and harmonize homes, public spaces, and wild places. We pool together high-quality talent and skill to ensure every project benefits nature itself.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="bg-forest p-12 md:p-20 text-white rounded-sm">
          <div className="text-center mb-16">
            <h3 className="text-gold-accent uppercase tracking-widest text-sm font-bold mb-4">Our Expertise</h3>
            <h2 className="text-4xl font-serif">A Gamut of Specialized Knowledge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/70">
            <ul className="space-y-2">
              <li>• Architecture & Biophilic Design</li>
              <li>• Habitat Enhancement</li>
              <li>• Engineered Structures</li>
              <li>• Hydraulics & Bio-processes</li>
              <li>• Mechanics in Aquatic Environs</li>
            </ul>
            <ul className="space-y-2">
              <li>• Native Horticulture</li>
              <li>• Aquatic & Marginal Plants</li>
              <li>• Water Containment</li>
              <li>• Forestry & Fire Defense</li>
              <li>• Filtration & Water Circulation</li>
            </ul>
            <ul className="space-y-2">
              <li>• Chemistry, Biology & Ecology</li>
              <li>• Fish & Aquatic Life Habitats</li>
              <li>• Erosion Control & Slope Protection</li>
              <li>• Environmental Theming</li>
              <li>• Specialized Custom Construction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
