import { useState, useEffect } from 'react';

const images = [
  '/hero_banner_jewelry_1781254018669.png',
  '/hero_bride_1781253799831.png',
  '/wedding_day_bride_1781253871704.png'
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-[#fdf8f0] flex flex-col justify-end mt-[60px] md:mt-[40px]">
      {/* Auto scrolling background images */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Bridal Wedding Collection"
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
        {/* Bottom fade to background color */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] md:h-[25%] bg-gradient-to-t from-[#fdf8f0] via-[#fdf8f0]/60 to-transparent pointer-events-none" />
      </div>

      {/* Centered Text Overlay */}
      <div className="relative z-10 w-full text-center pb-[6vw] md:pb-[2vw] px-[4vw]">
        <h1 className="font-serif text-charcoal mb-[2vw] md:mb-[1vw] font-medium tracking-wide" style={{ fontSize: 'clamp(2.2rem, 4vw, 4.5rem)' }}>
          Wedding Jewellery
        </h1>
        <p className="font-sans text-charcoal-light mb-[4vw] md:mb-[2.5vw]" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)' }}>
          Jewellery that your heart will love for lifetimes
        </p>
        <button 
          onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#7c1b2e] text-white hover:bg-[#5a1220] transition-colors duration-300 px-[6vw] md:px-[3.5vw] py-[2.5vw] md:py-[1vw] font-sans tracking-widest uppercase rounded-sm shadow-md hover:shadow-lg" 
          style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
