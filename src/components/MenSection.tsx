import React from 'react';

const menCategories = [
  {
    title: "Men's Bracelets",
    subtitle: "Bold & sophisticated statement pieces",
    image: "/mens_bracelet_luxury_1781338610044.png",
    link: "https://sirisamruddhigold.in/product-category/bracelets/"
  },
  {
    title: "Luxury Watches",
    subtitle: "Timeless elegance for the modern gentleman",
    image: "/mens_watch_luxury_1781338621865.png",
    link: "https://sirisamruddhigold.in/product-category/watch/"
  },
  {
    title: "Men's Jewelry",
    subtitle: "Signature rings & premium accessories",
    image: "/mens_jewelry_luxury_1781338641952.png",
    link: "https://sirisamruddhigold.in/product-category/mens-jewelry/"
  },
  {
    title: "Gold Chains",
    subtitle: "Thick, heavy, 24k classic craftsmanship",
    image: "/mens_chain_luxury_1781338652333.png",
    link: "https://sirisamruddhigold.in/product-category/gold-chains-2/"
  }
];

const MenSection = () => {
  return (
    <section className="bg-[#1a1a1a] py-[8vw] md:py-[6vw] px-[5vw] text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#d4af37]/5 rounded-full blur-3xl -mt-[10vw] -mr-[10vw]"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#d4af37]/5 rounded-full blur-3xl -mb-[10vw] -ml-[10vw]"></div>

      <div className="relative z-10 flex flex-col items-center text-center mb-[8vw] md:mb-[5vw]">
        <p className="font-sans text-[#b58c2a] mb-[2vw] md:mb-[1vw] uppercase tracking-[0.25em] text-[clamp(0.8rem,1vw,0.9rem)] font-medium">
          The Gentleman's Edit
        </p>
        <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] mb-[3vw] md:mb-[2vw] font-light leading-tight">
          Men's <span className="italic text-[#d4af37]">Collection</span>
        </h2>
        <div className="w-[15vw] md:w-[6vw] h-[1px] bg-[#d4af37]/40 mb-[4vw] md:mb-[2.5vw]" />
        <p className="font-sans text-gray-300 max-w-[90vw] lg:max-w-[50vw] leading-relaxed font-light" style={{ fontSize: 'clamp(0.95rem,1.1vw,1.1rem)' }}>
          Discover our exclusive range of masculine elegance. Meticulously crafted premium gold chains, bracelets, rings, and watches designed for distinction.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2.5vw] max-w-[90vw] mx-auto">
        {menCategories.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-[2vw] md:rounded-[1vw] overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-[0_10px_30px_rgba(0,0,0,0.5)] block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-[6vw] md:p-[3vw] flex flex-col items-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-serif text-[clamp(1.5rem,2vw,2.2rem)] font-medium text-white mb-[1vw] md:mb-[0.5vw]">
                {item.title}
              </h3>
              <p className="font-sans text-[clamp(0.85rem,1vw,1rem)] text-gray-300 font-light mb-[3vw] md:mb-[1.5vw] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {item.subtitle}
              </p>
              <div className="flex items-center gap-[1.5vw] md:gap-[0.8vw] text-[#d4af37] font-sans font-medium uppercase tracking-widest text-[clamp(0.7rem,0.8vw,0.8rem)] group-hover:text-white transition-colors">
                Explore Collection
                <svg className="w-[4vw] h-[4vw] md:w-[1.2vw] md:h-[1.2vw] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MenSection;
