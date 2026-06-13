import React from 'react';

const PremiumServices = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#fdf8f0] text-[#1a1a1a] py-[8vw] px-[5vw] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <p className="font-sans text-[#b58c2a] mb-[1.5vw] uppercase tracking-[0.25em] text-[clamp(0.7rem,0.9vw,0.9rem)] font-medium">
        The Siri Samruddhi Experience
      </p>
      <h2 className="font-serif text-[clamp(2.5rem,4.5vw,5rem)] mb-[2vw] font-light text-[#1a1a1a] leading-tight">
        Bespoke <span className="italic text-[#b58c2a]">Services</span>
      </h2>
      <div className="w-[8vw] h-[1px] bg-[#d4af37]/60 mb-[5vw]" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] md:gap-[3vw] max-w-[95vw] lg:max-w-[85vw] mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center group bg-white p-[4vw] md:p-[3vw] rounded-tl-[3vw] rounded-br-[3vw] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] transition-all duration-700 ease-out hover:-translate-y-2 border border-transparent hover:border-[#d4af37]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[5vw] h-[5vw] bg-gradient-to-bl from-[#fdf8f0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-[18vw] h-[18vw] md:w-[7vw] md:h-[7vw] min-w-[70px] min-h-[70px] rounded-full border-[1px] border-[#d4af37]/40 flex items-center justify-center mb-[2.5vw] group-hover:bg-[#fdf8f0] group-hover:scale-110 transition-all duration-700">
            <svg className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] min-w-[32px] text-[#b58c2a] group-hover:text-[#9c7a21] transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h3 className="font-serif text-[clamp(1.4rem,2vw,2.2rem)] mb-[1.2vw] text-[#1a1a1a] font-normal group-hover:text-[#b58c2a] transition-colors duration-500">Bridal Studio</h3>
          <p className="font-sans text-[clamp(0.9rem,1.1vw,1.1rem)] text-[#5a5a5a] leading-relaxed max-w-[300px] font-light group-hover:text-[#1a1a1a] transition-colors duration-500">
            Exclusive private suites for personalized bridal jewelry curation and styling sessions.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center group bg-white p-[4vw] md:p-[3vw] rounded-tl-[3vw] rounded-br-[3vw] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] transition-all duration-700 ease-out hover:-translate-y-2 border border-transparent hover:border-[#d4af37]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[5vw] h-[5vw] bg-gradient-to-bl from-[#fdf8f0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-[18vw] h-[18vw] md:w-[7vw] md:h-[7vw] min-w-[70px] min-h-[70px] rounded-full border-[1px] border-[#d4af37]/40 flex items-center justify-center mb-[2.5vw] group-hover:bg-[#fdf8f0] group-hover:scale-110 transition-all duration-700">
            <svg className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] min-w-[32px] text-[#b58c2a] group-hover:text-[#9c7a21] transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-serif text-[clamp(1.4rem,2vw,2.2rem)] mb-[1.2vw] text-[#1a1a1a] font-normal group-hover:text-[#b58c2a] transition-colors duration-500">Custom Artistry</h3>
          <p className="font-sans text-[clamp(0.9rem,1.1vw,1.1rem)] text-[#5a5a5a] leading-relaxed max-w-[300px] font-light group-hover:text-[#1a1a1a] transition-colors duration-500">
            Collaborate with our master craftsmen to bring your bespoke heirloom jewelry to life.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center group bg-white p-[4vw] md:p-[3vw] rounded-tl-[3vw] rounded-br-[3vw] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] transition-all duration-700 ease-out hover:-translate-y-2 border border-transparent hover:border-[#d4af37]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[5vw] h-[5vw] bg-gradient-to-bl from-[#fdf8f0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-[18vw] h-[18vw] md:w-[7vw] md:h-[7vw] min-w-[70px] min-h-[70px] rounded-full border-[1px] border-[#d4af37]/40 flex items-center justify-center mb-[2.5vw] group-hover:bg-[#fdf8f0] group-hover:scale-110 transition-all duration-700">
            <svg className="w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] min-w-[32px] text-[#b58c2a] group-hover:text-[#9c7a21] transition-colors duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="font-serif text-[clamp(1.4rem,2vw,2.2rem)] mb-[1.2vw] text-[#1a1a1a] font-normal group-hover:text-[#b58c2a] transition-colors duration-500">Eternal Care</h3>
          <p className="font-sans text-[clamp(0.9rem,1.1vw,1.1rem)] text-[#5a5a5a] leading-relaxed max-w-[300px] font-light group-hover:text-[#1a1a1a] transition-colors duration-500">
            Complimentary maintenance, polishing, and secure lifetime buyback privileges.
          </p>
        </div>
      </div>
      
      <button className="mt-[6vw] md:mt-[5vw] border border-[#d4af37] text-[#1a1a1a] hover:bg-[#d4af37] hover:text-white px-[8vw] md:px-[4.5vw] py-[3vw] md:py-[1.2vw] font-sans text-[clamp(0.85rem,1vw,1rem)] uppercase tracking-[0.2em] transition-all duration-500 shadow-md hover:shadow-xl hover:-translate-y-1 bg-white">
        Reserve an Appointment
      </button>
    </section>
  );
};

export default PremiumServices;
