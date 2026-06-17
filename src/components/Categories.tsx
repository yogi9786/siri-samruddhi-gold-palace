import { useState, useRef } from 'react';
import imgpolkiNecklaceProduct1781253961668 from '../assets/categories/necklaces/polki_necklace_product.png';
import imgheroBannerJewelry1781254018669 from '../assets/categories/necklaces/hero_banner_jewelry.png';
import imggoldJewelrySet1781253913771 from '../assets/categories/necklaces/gold_jewelry_set.png';
import imglookbookGoldBride1781253936927 from '../assets/lookbook/lookbook_gold_bride.png';
import imgpremiumBridalBangles1781335037021 from '../assets/categories/bangles/premium_bridal_bangles.png';
import imgmehendiBride1781253860448 from '../assets/traditions/mehendi_bride.png';
import imgsangeetBride1781253825147 from '../assets/traditions/sangeet_bride.png';
import imggenBangles11781509436906 from '../assets/categories/bangles/gen_bangles_1.png';
import imggenBangles21781509450569 from '../assets/categories/bangles/gen_bangles_2.png';
import imgpremiumBridalRing1781335021776 from '../assets/categories/rings/premium_bridal_ring.png';
import imgheroBride1781253799831 from '../assets/hero/hero_bride.png';
import imgreceptionBride1781253897323 from '../assets/traditions/reception_bride.png';
import imggenRings11781509468914 from '../assets/categories/rings/gen_rings_1.png';
import imggenRings21781509490143 from '../assets/categories/rings/gen_rings_2.png';
import imgkundanEarringsProduct1781253994400 from '../assets/categories/earrings/kundan_earrings_product.png';
import imglookbookSangeetLook1781253950121 from '../assets/lookbook/lookbook_sangeet_look.png';
import imgweddingDayBride1781253871704 from '../assets/traditions/wedding_day_bride.png';
import imgmaangTikkaProduct1781254005481 from '../assets/categories/accessories/maang_tikka_product.png';
import imggenWeddingAcc11781509504854 from '../assets/categories/accessories/gen_wedding_acc_1.png';
import imggenWeddingAcc21781509517708 from '../assets/categories/accessories/gen_wedding_acc_2.png';
import imggenWeddingAcc31781509531778 from '../assets/categories/accessories/gen_wedding_acc_3.png';

// Define image pools for different categories
const categoryData = {
  Necklaces: [
    { id: 1, image: imgpolkiNecklaceProduct1781253961668, span: false },
    { id: 2, image: imgheroBannerJewelry1781254018669, span: true },
    { id: 3, image: imggoldJewelrySet1781253913771, span: false },
    { id: 4, image: imglookbookGoldBride1781253936927, span: false },
  ],
  Bangles: [
    { id: 1, image: imgpremiumBridalBangles1781335037021, span: false },
    { id: 2, image: imgmehendiBride1781253860448, span: true },
    { id: 3, image: imgsangeetBride1781253825147, span: false },
    { id: 4, image: imggenBangles11781509436906, span: false },
    { id: 5, image: imggenBangles21781509450569, span: true },
  ],
  Rings: [
    { id: 1, image: imgpremiumBridalRing1781335021776, span: false },
    { id: 2, image: imgheroBride1781253799831, span: true },
    { id: 3, image: imgreceptionBride1781253897323, span: false },
    { id: 4, image: imggenRings11781509468914, span: false },
    { id: 5, image: imggenRings21781509490143, span: true },
  ],
  Earrings: [
    { id: 1, image: imgkundanEarringsProduct1781253994400, span: false },
    { id: 2, image: imglookbookSangeetLook1781253950121, span: true },
    { id: 3, image: imgreceptionBride1781253897323, span: false },
    { id: 4, image: imgweddingDayBride1781253871704, span: false },
  ],
  'Wedding Accessories': [
    { id: 1, image: imgmaangTikkaProduct1781254005481, span: false },
    { id: 2, image: imgweddingDayBride1781253871704, span: true },
    { id: 3, image: imglookbookGoldBride1781253936927, span: false },
    { id: 4, image: imggenWeddingAcc11781509504854, span: false },
    { id: 5, image: imggenWeddingAcc21781509517708, span: true },
    { id: 6, image: imggenWeddingAcc31781509531778, span: false },
  ],
};

const categoryLinks: Record<string, string> = {
  Necklaces: 'https://sirisamruddhigold.in/product-category/gold/gold-necklaces/',
  Bangles: 'https://sirisamruddhigold.in/product-category/gold/gold-bangles/',
  Rings: 'https://sirisamruddhigold.in/product-category/gold/gold-rings/',
  Earrings: 'https://sirisamruddhigold.in/product-category/gold/gold-earrings/',
  'Wedding Accessories': 'https://sirisamruddhigold.in/shop/',
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
      <h2 className="font-serif text-charcoal mb-[1vw] font-medium" style={{ fontSize: 'clamp(2.2rem,3.5vw,4rem)' }}>
        Curated Categories
      </h2>
      <p className="font-sans text-charcoal-light mb-[3vw] max-w-[60vw]" style={{ fontSize: 'clamp(0.9rem,1vw,1.1rem)' }}>
        Discover the magic of exquisite jewels that celebrate your special day with timeless elegance.
      </p>

      {/* Tabs */}
      <div className="flex gap-[3vw] md:gap-[1.5vw] mb-[5vw] md:mb-[3vw] text-charcoal-light font-sans overflow-x-auto snap-x snap-mandatory pb-[2vw] md:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {categoryNames.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 snap-center px-[5vw] md:px-[2.5vw] py-[2.5vw] md:py-[1vw] rounded-[1.5vw] md:rounded-[0.5vw] border transition-all shadow-sm ${activeCategory === cat ? 'bg-[#4a332a] text-white border-[#4a332a] font-medium' : 'bg-white border-gray-200 hover:border-[#4a332a] hover:text-[#4a332a]'
              }`}
            style={{ fontSize: 'clamp(0.95rem,1.2vw,1.1rem)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[1vw] md:left-[-2vw] z-10 w-[10vw] h-[10vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[42px] min-h-[42px] rounded-full border border-orange-200 bg-white/90 flex items-center justify-center text-[#4a332a] hover:border-[#4a332a] transition-colors shadow-md"
        >
          <svg className="w-[4.5vw] h-[4.5vw] md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] md:min-w-[24px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-[1vw] items-end overflow-x-auto snap-container py-[1vw] scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((item, idx) => (
            <a
              href={categoryLinks[activeCategory] || 'https://sirisamruddhigold.in/shop/'}
              target="_blank"
              rel="noopener noreferrer"
              key={`${activeCategory}-${item.id}-${idx}`}
              className="relative flex-shrink-0 snap-item img-hover-zoom overflow-hidden animate-fade-in aspect-square group block"
              style={{
                width: 'clamp(260px, 25vw, 380px)',
                height: 'clamp(260px, 25vw, 380px)'
              }}
            >
              <img
                src={item.image}
                alt={`${activeCategory} Image`}
                className="w-full h-full object-cover object-center shadow-sm"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/95 text-[#4a332a] font-sans font-medium px-[4vw] md:px-[1.5vw] py-[2vw] md:py-[0.8vw] rounded-full text-[clamp(0.8rem,0.9vw,1rem)] uppercase tracking-widest shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-[1vw] md:right-[-2vw] z-10 w-[10vw] h-[10vw] md:w-[3.5vw] md:h-[3.5vw] min-w-[42px] min-h-[42px] rounded-full border border-orange-200 bg-white/90 flex items-center justify-center text-[#4a332a] hover:border-[#4a332a] transition-colors shadow-md"
        >
          <svg className="w-[4.5vw] h-[4.5vw] md:w-[1.2vw] md:h-[1.2vw] min-w-[20px] md:min-w-[24px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* External Links Buttons */}
      <div className="mt-[6vw] md:mt-[4vw] flex flex-col md:flex-row justify-center items-center gap-[3vw] md:gap-[2vw]">
        <a href="https://sirisamruddhigold.in/product-category/women-section/" target="_blank" rel="noopener noreferrer" className="bg-white text-charcoal border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-white transition-colors duration-300 px-[6vw] md:px-[3vw] py-[3vw] md:py-[1vw] rounded-full font-sans text-[clamp(0.9rem,1vw,1.1rem)] font-semibold shadow-sm w-full md:w-auto text-center">
          Explore Women's Section
        </a>
        <a href="https://sirisamruddhigold.in/shop/" target="_blank" rel="noopener noreferrer" className="bg-[#4a332a] text-white border border-[#4a332a] hover:bg-white hover:text-[#4a332a] transition-colors duration-300 px-[6vw] md:px-[3vw] py-[3vw] md:py-[1vw] rounded-full font-sans text-[clamp(0.9rem,1vw,1.1rem)] font-semibold shadow-md w-full md:w-auto text-center">
          Visit Complete Shop
        </a>
      </div>
    </section>
  );
};

export default Categories;
