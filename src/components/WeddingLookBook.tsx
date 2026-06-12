import { useRef } from 'react';

const lookbookItems = [
  {
    id: 1,
    num: '01',
    brideImg: '/hero_bride_1781253799831.png',
    productImg: '/gold_jewelry_set_1781253913771.png',
    title: 'The Gold Bride',
    subtitle: 'Featuring intricately layered gold silhouettes perfect for a regal look',
    tag: 'Wedding Day',
  },
  {
    id: 2,
    num: '02',
    brideImg: '/lookbook_gold_bride_1781253936927.png',
    productImg: '/polki_necklace_product_1781253961668.png',
    title: 'Sangeet Look',
    subtitle: 'A captivating blend of polki, diamond, and created Russian emerald stone',
    tag: 'Sangeet',
  },
  {
    id: 3,
    num: '03',
    brideImg: '/lookbook_sangeet_look_1781253950121.png',
    productImg: '/kundan_earrings_product_1781253994400.png',
    title: 'Kundan Royale',
    subtitle: 'Heritage kundan craftsmanship with ruby drops and uncut diamonds',
    tag: 'Wedding Day',
  },
  {
    id: 4,
    num: '04',
    brideImg: '/mehendi_bride_1781253860448.png',
    productImg: '/meenakari_bangles_1781253972778.png',
    title: 'Mehendi Muse',
    subtitle: 'Vibrant meenakari work with turquoise stones for the joyful Mehendi day',
    tag: 'Mehendi',
  },
  {
    id: 5,
    num: '05',
    brideImg: '/reception_bride_1781253897323.png',
    productImg: '/maang_tikka_product_1781254005481.png',
    title: 'Reception Glow',
    subtitle: 'Contemporary diamond elegance for a breathtaking reception night',
    tag: 'Reception',
  },
];

// Duplicate for seamless infinite scroll
const doubled = [...lookbookItems, ...lookbookItems];

const WeddingLookBook = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.45, behavior: 'smooth' });
  };

  return (
    <section id="look-book" className="bg-white py-[6vw] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between px-[5vw] mb-[3.5vw] gap-[2vw]">
        <div>
          <p className="section-eyebrow">Editorial</p>
          <h2
            className="section-title text-charcoal mt-[0.5vw]"
            style={{ fontSize: 'clamp(1.6rem,3.5vw,3.5rem)' }}
          >
            Wedding{' '}
            <span className="italic text-burgundy">Look</span>{' '}
            Book
          </h2>
          <div className="gold-divider mt-[1.5vw] ml-0" style={{ width: '5vw' }} />
          <p
            className="font-sans text-charcoal-light mt-[1.5vw] max-w-[35vw] leading-relaxed"
            style={{ fontSize: 'clamp(0.75rem,1vw,1rem)' }}
          >
            Discover uniquely crafted pieces that celebrate heritage craftsmanship and
            contemporary aesthetics for today's bride
          </p>
        </div>
      </div>

      {/* ── Auto-scrolling track ── */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[5vw] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[5vw] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Infinite scroll strip */}
        <div className="lookbook-track" aria-label="Wedding look book carousel">
          {doubled.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex gap-[1vw] flex-shrink-0"
              style={{ minWidth: 'clamp(260px, 30vw, 400px)' }}
            >
              {/* Bride portrait */}
              <div
                className="relative img-hover-zoom rounded-[1vw] overflow-hidden shadow-lg flex-shrink-0"
                style={{ width: 'clamp(120px,14vw,190px)', height: 'clamp(220px,25vw,350px)' }}
              >
                {/* Large numbered label */}
                <span
                  className="absolute top-[1vw] left-[0.5vw] font-serif font-light text-white/30 select-none leading-none z-10"
                  style={{ fontSize: 'clamp(2rem,5vw,5rem)' }}
                >
                  {item.num}
                </span>
                <img
                  src={item.brideImg}
                  alt={item.title + ' bride'}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Product card */}
              <div className="flex flex-col flex-shrink-0" style={{ width: 'clamp(110px,13vw,180px)' }}>
                {/* Product image */}
                <div
                  className="img-hover-zoom rounded-[1vw] overflow-hidden shadow-md mb-[1vw]"
                  style={{ height: 'clamp(120px,14vw,190px)' }}
                >
                  <img
                    src={item.productImg}
                    alt={item.title + ' jewellery'}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <span
                  className="bg-gold-100 text-gold-700 font-sans rounded-full px-[0.8vw] py-[0.3vw] w-fit mb-[0.5vw]"
                  style={{ fontSize: 'clamp(0.45rem,0.6vw,0.6rem)', letterSpacing: '0.12em' }}
                >
                  {item.tag}
                </span>
                <h4
                  className="font-serif font-semibold text-charcoal leading-tight"
                  style={{ fontSize: 'clamp(0.8rem,1.1vw,1.05rem)' }}
                >
                  {item.title}
                </h4>
                <p
                  className="font-sans text-charcoal-light mt-[0.4vw] leading-snug"
                  style={{ fontSize: 'clamp(0.6rem,0.75vw,0.75rem)' }}
                >
                  {item.subtitle}
                </p>
                <button
                  className="mt-[0.8vw] font-sans text-burgundy hover:text-gold-600 transition-colors text-left flex items-center gap-[0.3vw]"
                  style={{ fontSize: 'clamp(0.6rem,0.75vw,0.75rem)', letterSpacing: '0.05em' }}
                >
                  Explore
                  <svg className="w-[0.8vw] h-[0.8vw] min-w-[10px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-[0.8vw] mt-[3vw]">
        {lookbookItems.map((_, i) => (
          <span
            key={i}
            className={`rounded-full block transition-all duration-300 ${
              i === 0
                ? 'bg-gold-500 w-[2vw] min-w-[16px] h-[0.5vw] min-h-[5px]'
                : 'bg-gold-300 w-[0.5vw] min-w-[5px] h-[0.5vw] min-h-[5px]'
            }`}
          />
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-[3vw]">
        <button className="btn-outline-gold px-[3vw] py-[1vw] rounded-full font-sans text-[clamp(0.6rem,0.85vw,0.85rem)] border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white transition-all duration-300">
          View Full Look Book
        </button>
      </div>
    </section>
  );
};

export default WeddingLookBook;
