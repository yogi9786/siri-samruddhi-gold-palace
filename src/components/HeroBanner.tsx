import React from 'react';
import imggenHeroBg1781509701068 from '../assets/hero/gen_hero_bg.png';
import imgheroBride1781253799831 from '../assets/hero/hero_bride.png';
import imgmehendiBride1781253860448 from '../assets/traditions/mehendi_bride.png';
import imgreceptionBride1781253897323 from '../assets/traditions/reception_bride.png';
import imgluxuriousHeroReadmore1781338096464 from '../assets/hero/luxurious_hero_readmore.png';

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#8c6b5d] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imggenHeroBg1781509701068}
          alt="Luxury Bridal Jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay to ensure the glass card pops */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-[95vw] lg:w-[90vw] min-h-[85vh] md:h-auto md:min-h-[60vh] lg:min-h-[65vh] md:max-h-[850px] mt-[80px] min-[400px]:mt-[100px] md:mt-[100px] rounded-[3vw] md:rounded-[2vw] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex flex-col md:flex-row p-[5vw] min-[400px]:p-[6vw] md:p-[6vw] lg:p-[4vw] lg:px-[6vw] overflow-hidden gap-[6vw] min-[400px]:gap-[8vw] md:gap-[2vw] pb-[6vw] min-[400px]:pb-[8vw] md:pb-[4vw]">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left pt-[2vw] md:pt-0 z-20 flex-1">
          <h1 className="font-serif text-white mb-[3vw] md:mb-[2vw] font-medium leading-[1.15] md:leading-[1.1] text-[2.5rem] min-[400px]:text-[3.3rem] md:text-[clamp(3.5rem,5vw,6rem)]">
            Wedding Bridal<br />Collections
          </h1>

          <div className="flex items-center gap-[1.5vw] mb-[4vw] md:mb-[2vw]">
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#4a332a] hover:bg-[#fdf8f0] transition-colors duration-300 px-[6vw] md:px-[2.5vw] py-[3vw] md:py-[1vw] rounded-full font-sans text-[clamp(0.9rem,1vw,1.1rem)] font-semibold shadow-lg"
            >
              Let's Get Started
            </button>
            <button
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] min-w-[45px] min-h-[45px] bg-white rounded-full flex items-center justify-center text-[#4a332a] hover:bg-[#fdf8f0] transition-colors shadow-lg group"
            >
              <svg className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] min-w-[20px] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="font-sans text-white/90 max-w-[400px] leading-relaxed font-light text-[0.95rem] min-[400px]:text-[1.1rem] md:text-[0.95rem] lg:text-[1rem]">
            <span className="font-medium tracking-[0.2em] uppercase text-[0.8em] min-[400px]:text-[0.85em] md:text-[0.8em] text-[#d4af37] mb-[1.5vw] md:mb-[0.8vw] block">Siri Samruddhi Gold Palace</span>
            Discover our meticulously handcrafted masterpieces designed to elevate your bridal journey. Timeless elegance and modern luxury combined to make your special day truly unforgettable.
          </p>
        </div>

        {/* Right Floating Elements Area */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end justify-end md:justify-center z-10 gap-[4vw] md:gap-[4vw] lg:gap-[3vw] mt-[2vw] md:mt-0 pt-[2vw] md:pt-0">
          
          {/* Happy Clients Pill */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-[2vw] md:py-[1.2vw] px-[4vw] md:px-[2vw] flex items-center gap-[2vw] md:gap-[1vw] shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 duration-300 w-max self-start md:self-end">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img src={imgheroBride1781253799831} className="w-[12vw] h-[12vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[40px] min-h-[40px] rounded-full border-[2px] border-white object-cover" alt="client" />
              <img src={imgmehendiBride1781253860448} className="w-[12vw] h-[12vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[40px] min-h-[40px] rounded-full border-[2px] border-white object-cover" alt="client" />
              <img src={imgreceptionBride1781253897323} className="w-[12vw] h-[12vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[40px] min-h-[40px] rounded-full border-[2px] border-white object-cover" alt="client" />
              <div className="w-[12vw] h-[12vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[40px] min-h-[40px] rounded-full border-[2px] border-white bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#4a332a] font-bold text-lg shadow-inner z-10">
                +
              </div>
            </div>
            <div className="text-white ml-[1vw] hidden md:block">
              <p className="font-serif text-[1.6rem] font-bold leading-none mb-1 drop-shadow-sm">100K</p>
              <p className="font-sans text-[0.8rem] text-white/90 leading-none tracking-wide">Happy Clients</p>
            </div>
            <div className="text-white ml-[2vw] md:hidden">
              <p className="font-serif text-[1.4rem] font-bold leading-none mb-1 drop-shadow-sm">100K</p>
            </div>
          </div>

          {/* Product Highlight Card */}
          <div className="relative bg-white/95 backdrop-blur-md border border-white/50 rounded-[2.5vw] md:rounded-[1vw] p-[3vw] md:p-[1.5vw] flex items-center gap-[3vw] md:gap-[1.5vw] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-2 duration-300 w-[90vw] md:w-auto max-w-[450px] self-center md:self-end">
            <div className="w-[20vw] h-[20vw] md:w-[6vw] md:h-[6vw] min-w-[70px] min-h-[70px] rounded-[1vw] md:rounded-[0.8vw] overflow-hidden bg-[#fdf8f0] shadow-inner flex-shrink-0">
              <img src={imgluxuriousHeroReadmore1781338096464} className="w-full h-full object-cover" alt="Luxury Bridal Jewelry" />
            </div>
            <div className="flex-1 pr-[1vw]">
              <h4 className="font-serif text-[#1a1a1a] text-[clamp(1.1rem,1.3vw,1.4rem)] font-medium leading-[1.2] mb-[1.5vw] md:mb-[0.5vw]">
                Beautiful In Every Detail
              </h4>
              <button className="flex items-center gap-[0.5vw] text-[#8c6b5d] font-sans text-[0.8rem] md:text-[0.85rem] font-bold uppercase tracking-wider hover:text-[#4a332a] transition-colors group">
                Read More
                <span className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] min-w-[20px] min-h-[20px] rounded-full border-[1.5px] border-[#8c6b5d] group-hover:border-[#4a332a] group-hover:bg-[#4a332a] group-hover:text-white flex items-center justify-center transition-all">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
