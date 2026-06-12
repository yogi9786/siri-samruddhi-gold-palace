import { useState, useRef } from 'react';

// Define image pools for different categories
const categoryData = {
  Necklaces: [
    { id: 1, image: '/polki_necklace_product_1781253961668.png', span: false },
    { id: 2, image: '/hero_banner_jewelry_1781254018669.png', span: true },
    { id: 3, image: '/gold_jewelry_set_1781253913771.png', span: false },
    { id: 4, image: '/lookbook_gold_bride_1781253936927.png', span: false },
  ],
  Bangles: [
    { id: 1, image: '/meenakari_bangles_1781253972778.png', span: false },
    { id: 2, image: '/mehendi_bride_1781253860448.png', span: true },
    { id: 3, image: '/sangeet_bride_1781253825147.png', span: false },
  ],
  Rings: [
    { id: 1, image: '/engagement_bride_1781253813223.png', span: false },
    { id: 2, image: '/hero_bride_1781253799831.png', span: true },
    { id: 3, image: '/reception_bride_1781253897323.png', span: false },
  ],
  Earrings: [
    { id: 1, image: '/kundan_earrings_product_1781253994400.png', span: false },
    { id: 2, image: '/lookbook_sangeet_look_1781253950121.png', span: true },
    { id: 3, image: '/reception_bride_1781253897323.png', span: false },
    { id: 4, image: '/wedding_day_bride_1781253871704.png', span: false },
  ],
  'Wedding Accessories': [
    { id: 1, image: '/maang_tikka_product_1781254005481.png', span: false },
    { id: 2, image: '/wedding_day_bride_1781253871704.png', span: true },
    { id: 3, image: '/lookbook_gold_bride_1781253936927.png', span: false },
  ],
};

const categoryNames = Object.keys(categoryData);

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Earrings');
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * trackRef.current.clientWidth * 0.4, behavior: 'smooth' });
    }
  };

  const images = categoryData[activeCategory as keyof typeof categoryData];

  return (
    <section id="categories" className="py-[6vw] bg-[#fdf8f0] overflow-hidden px-[5vw]">
      <h2 className="font-serif text-charcoal mb-[1vw]" style={{ fontSize: 'clamp(2rem,3.5vw,3.5rem)' }}>
        Categories
      </h2>
      <p className="font-sans text-charcoal-light mb-[2vw]" style={{ fontSize: 'clamp(0.8rem,1vw,1rem)' }}>
        Discover the magic of exquisite jewels that celebrate your special day with our endless love!
      </p>

      {/* Tabs */}
      <div className="flex gap-[2vw] mb-[3vw] text-charcoal-light font-sans" style={{ fontSize: 'clamp(0.7rem,0.9vw,0.9rem)' }}>
        {categoryNames.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-[0.3vw] transition-colors border-b ${
              activeCategory === cat ? 'text-[#0b3370] font-medium border-[#0b3370]' : 'border-transparent hover:text-charcoal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[-2vw] z-10 w-[3.5vw] h-[3.5vw] min-w-[44px] min-h-[44px] rounded-full border border-orange-200 bg-white/80 flex items-center justify-center text-charcoal hover:border-[#0b3370] transition-colors shadow-sm"
        >
          <svg className="w-[1.2vw] h-[1.2vw] min-w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-[1vw] items-end overflow-x-auto snap-container py-[1vw] scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((item, idx) => (
            <div
              key={`${activeCategory}-${item.id}-${idx}`}
              className="relative flex-shrink-0 snap-item img-hover-zoom overflow-hidden animate-fade-in"
              style={{
                width: item.span ? 'clamp(200px, 25vw, 350px)' : 'clamp(200px, 20vw, 300px)',
                height: item.span ? 'clamp(300px, 32vw, 450px)' : 'clamp(240px, 24vw, 350px)'
              }}
            >
              <img
                src={item.image}
                alt={`${activeCategory} Image`}
                className="w-full h-full object-cover object-center shadow-sm"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-[-2vw] z-10 w-[3.5vw] h-[3.5vw] min-w-[44px] min-h-[44px] rounded-full border border-orange-200 bg-white/80 flex items-center justify-center text-charcoal hover:border-[#0b3370] transition-colors shadow-sm"
        >
          <svg className="w-[1.2vw] h-[1.2vw] min-w-[16px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Categories;
