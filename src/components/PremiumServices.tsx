import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Palette, ShieldCheck, Gem, Crown, Clock } from 'lucide-react';
import imggenBridalStudio1781509340528 from '../assets/services/gen_bridal_studio.png';
import imggenCustomArtistry1781509353937 from '../assets/services/gen_custom_artistry.png';
import imggenDiamondCert1781509366680 from '../assets/services/gen_diamond_cert.png';
import imggenHeritageRestoration1781509388864 from '../assets/services/gen_heritage_restoration.png';
import imggenEternalCare1781509402323 from '../assets/services/gen_eternal_care.png';
import imggenEngraving1781509415318 from '../assets/services/gen_engraving.png';

const services = [
  {
    title: 'Bridal Studio',
    description: 'Exclusive private suites for personalized bridal jewelry curation and styling sessions with our master consultants.',
    icon: <Crown className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenBridalStudio1781509340528,
    highlight: 'group-hover:border-[#d4af37]'
  },
  {
    title: 'Custom Artistry',
    description: 'Collaborate with our master craftsmen to bring your bespoke heirloom jewelry to life, from initial sketch to final polish.',
    icon: <Palette className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenCustomArtistry1781509353937,
    highlight: 'group-hover:border-[#b58c2a]'
  },
  {
    title: 'Diamond Certification',
    description: 'Every precious stone is meticulously graded and accompanied by internationally recognized certification for your peace of mind.',
    icon: <Gem className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenDiamondCert1781509366680,
    highlight: 'group-hover:border-[#d4af37]'
  },
  {
    title: 'Heritage Restoration',
    description: 'Breathe new life into ancestral pieces with our specialized restoration services, preserving history for future generations.',
    icon: <Clock className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenHeritageRestoration1781509388864,
    highlight: 'group-hover:border-[#b58c2a]'
  },
  {
    title: 'Eternal Care',
    description: 'Complimentary maintenance, ultrasonic cleaning, precise polishing, and secure lifetime buyback privileges on all purchases.',
    icon: <ShieldCheck className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenEternalCare1781509402323,
    highlight: 'group-hover:border-[#d4af37]'
  },
  {
    title: 'Personalized Engraving',
    description: 'Immortalize your special moments with complimentary bespoke engraving services by our skilled artisans.',
    icon: <Sparkles className="w-[5vw] h-[5vw] md:w-[2vw] md:h-[2vw] min-w-[24px]" strokeWidth={1.5} />,
    image: imggenEngraving1781509415318,
    highlight: 'group-hover:border-[#b58c2a]'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 20 }
  }
};

const PremiumServices = () => {
  return (
    <section className="bg-[#fdf8f0] text-[#1a1a1a] py-[10vw] md:py-[6vw] px-[5vw] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      {/* Highlight Color Blobs */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-[#d4af37]/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-[#b58c2a]/5 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-[90vw] md:max-w-[60vw] mb-[6vw] md:mb-[5vw]"
      >
        <p className="font-sans text-[#b58c2a] mb-[1.5vw] uppercase tracking-[0.25em] text-[clamp(0.7rem,0.9vw,0.9rem)] font-semibold">
          The Siri Samruddhi Experience
        </p>
        <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5rem)] mb-[2vw] font-light text-[#1a1a1a] leading-tight">
          Bespoke <span className="italic text-[#b58c2a]">Services</span>
        </h2>
        <div className="w-[10vw] md:w-[6vw] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-[2.5vw]" />
        <p className="font-sans text-[#5a5a5a] text-[clamp(0.95rem,1.1vw,1.15rem)] leading-relaxed font-light">
          Elevate your jewelry journey with our exclusive suite of services. From the moment you step into our boutique to the lifetime of care your pieces will receive, we are dedicated to providing an unparalleled luxury experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6vw] md:gap-[3vw] max-w-[95vw] lg:max-w-[85vw] mx-auto relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col group bg-white rounded-[2vw] md:rounded-[1vw] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-700 ease-out border border-transparent ${service.highlight} hover:-translate-y-2 relative overflow-hidden text-left`}
          >
            {/* Image Section */}
            <div className="relative h-[55vw] md:h-[18vw] w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Floating Icon */}
              <div className="absolute top-[4vw] right-[4vw] md:top-[1.5vw] md:right-[1.5vw] w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] min-w-[45px] min-h-[45px] rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#b58c2a] shadow-[0_5px_15px_rgba(0,0,0,0.1)] group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-500 z-10 scale-100 group-hover:scale-110">
                {service.icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-[6vw] md:p-[2.5vw] flex flex-col flex-grow relative bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#fdf8f0] transition-colors duration-500">
              <h3 className="font-serif text-[clamp(1.4rem,1.8vw,1.8rem)] mb-[1.5vw] md:mb-[1vw] text-[#1a1a1a] font-medium group-hover:text-[#b58c2a] transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-sans text-[clamp(0.95rem,1vw,1.05rem)] text-[#6a6a6a] leading-relaxed font-light group-hover:text-[#4a4a4a] transition-colors duration-500">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button className="mt-[10vw] md:mt-[6vw] border border-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37] hover:text-white px-[8vw] md:px-[4.5vw] py-[3.5vw] md:py-[1.2vw] font-sans text-[clamp(0.85rem,1vw,1rem)] uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_4px_15px_rgba(212,175,55,0.1)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] bg-white relative overflow-hidden group rounded-sm">
          <span className="relative z-10 group-hover:text-white transition-colors duration-500 font-medium">Reserve an Appointment</span>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#d4af37] to-[#b58c2a] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </button>
      </motion.div>
    </section>
  );
};

export default PremiumServices;
