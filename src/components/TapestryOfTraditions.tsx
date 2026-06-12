import { useRef } from 'react';

const traditions = [
  { id: 1, title: 'Shaadi', image: '/wedding_day_bride_1781253871704.png' },
  { id: 2, title: 'Sangeet', image: '/sangeet_bride_1781253825147.png' },
  { id: 3, title: 'Reception', image: '/reception_bride_1781253897323.png' },
  { id: 4, title: 'Mehendi', image: '/mehendi_bride_1781253860448.png' },
  { id: 5, title: 'Engagement', image: '/engagement_bride_1781253813223.png' },
];

const TapestryOfTraditions = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * trackRef.current.clientWidth * 0.3, behavior: 'smooth' });
    }
  };

  return (
    <section id="tapestry-of-traditions" className="py-[6vw] bg-[#fdf8f0] text-center overflow-hidden">
      <h2 className="font-serif text-charcoal mb-[1vw]" style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)' }}>
        Tapestry of Traditions
      </h2>
      <p className="font-sans text-charcoal-light mb-[0.2vw]" style={{ fontSize: 'clamp(0.8rem,1vw,1rem)' }}>
        Sacred rituals bloom into an eternal promise.
      </p>
      <p className="font-sans text-charcoal-light mb-[4vw]" style={{ fontSize: 'clamp(0.8rem,1vw,1rem)' }}>
        The very essence of an Indian wedding, a journey woven with threads of tradition.
      </p>

      <div className="relative w-full max-w-[90vw] mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[0] md:left-[-2vw] z-10 w-[3.5vw] h-[3.5vw] min-w-[44px] min-h-[44px] rounded-full border border-orange-200 bg-white/80 flex items-center justify-center text-charcoal hover:border-gold-500 transition-colors shadow-sm"
        >
          <svg className="w-[1.2vw] h-[1.2vw] min-w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-[2vw] overflow-x-auto snap-container px-[1vw] py-[1vw]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {traditions.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 snap-item group cursor-pointer img-hover-zoom overflow-hidden"
              style={{ width: 'clamp(280px, 26vw, 400px)', height: 'clamp(300px, 30vw, 450px)' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />
              <h3
                className="absolute bottom-[2vw] left-0 right-0 font-serif text-white text-center group-hover:text-gold-300 transition-colors"
                style={{ fontSize: 'clamp(1.5rem,2vw,2rem)' }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-[0] md:right-[-2vw] z-10 w-[3.5vw] h-[3.5vw] min-w-[44px] min-h-[44px] rounded-full border border-orange-200 bg-white/80 flex items-center justify-center text-charcoal hover:border-gold-500 transition-colors shadow-sm"
        >
          <svg className="w-[1.2vw] h-[1.2vw] min-w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TapestryOfTraditions;
