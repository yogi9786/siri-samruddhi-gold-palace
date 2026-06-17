import { useRef } from 'react';
import imgheroBride1781253799831 from '../assets/hero/hero_bride.png';
import imggoldJewelrySet1781253913771 from '../assets/categories/necklaces/gold_jewelry_set.png';
import imglookbookGoldBride1781253936927 from '../assets/lookbook/lookbook_gold_bride.png';
import imgpolkiNecklaceProduct1781253961668 from '../assets/categories/necklaces/polki_necklace_product.png';
import imglookbookSangeetLook1781253950121 from '../assets/lookbook/lookbook_sangeet_look.png';
import imgkundanEarringsProduct1781253994400 from '../assets/categories/earrings/kundan_earrings_product.png';
import imgmehendiBride1781253860448 from '../assets/traditions/mehendi_bride.png';
import imgmeenakariBangles1781253972778 from '../assets/categories/bangles/meenakari_bangles.png';
import imgreceptionBride1781253897323 from '../assets/traditions/reception_bride.png';
import imgmaangTikkaProduct1781254005481 from '../assets/categories/accessories/maang_tikka_product.png';

const lookbookItems = [
  {
    id: 1,
    num: '01',
    brideImg: imgheroBride1781253799831,
    productImg: imggoldJewelrySet1781253913771,
    title: 'The Gold Bride',
    subtitle: 'Featuring intricately layered gold silhouettes perfect for a regal look',
    tag: 'Wedding Day',
  },
  {
    id: 2,
    num: '02',
    brideImg: imglookbookGoldBride1781253936927,
    productImg: imgpolkiNecklaceProduct1781253961668,
    title: 'Sangeet Look',
    subtitle: 'A captivating blend of polki, diamond, and created Russian emerald stone',
    tag: 'Sangeet',
  },
  {
    id: 3,
    num: '03',
    brideImg: imglookbookSangeetLook1781253950121,
    productImg: imgkundanEarringsProduct1781253994400,
    title: 'Kundan Royale',
    subtitle: 'Heritage kundan craftsmanship with ruby drops and uncut diamonds',
    tag: 'Wedding Day',
  },
  {
    id: 4,
    num: '04',
    brideImg: imgmehendiBride1781253860448,
    productImg: imgmeenakariBangles1781253972778,
    title: 'Mehendi Muse',
    subtitle: 'Vibrant meenakari work with turquoise stones for the joyful Mehendi day',
    tag: 'Mehendi',
  },
  {
    id: 5,
    num: '05',
    brideImg: imgreceptionBride1781253897323,
    productImg: imgmaangTikkaProduct1781254005481,
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
      <div className="flex flex-col items-start md:items-center text-left md:text-center px-[5vw] mb-[5vw] md:mb-[4vw]">
        <p className="font-sans text-[#b58c2a] mb-[1.5vw] md:mb-[1vw] uppercase tracking-[0.25em] text-[clamp(0.8rem,1vw,0.9rem)] font-medium">
          Editorial
        </p>
        <h2 className="font-serif text-[clamp(2.8rem,5vw,5rem)] mb-[2vw] font-light text-[#1a1a1a] leading-tight">
          Wedding <span className="italic text-[#b58c2a]">Look</span> Book
        </h2>
        <div className="w-[15vw] md:w-[8vw] h-[1px] bg-[#d4af37]/60 mb-[3vw]" />
        <p className="font-sans text-[#5a5a5a] max-w-[90vw] lg:max-w-[50vw] leading-relaxed font-light" style={{ fontSize: 'clamp(1rem,1.1vw,1.1rem)' }}>
          Discover uniquely crafted pieces that celebrate heritage craftsmanship and contemporary aesthetics for today's bride
        </p>
      </div>

      {/* ── Auto-scrolling track ── */}
      <div className="relative w-full overflow-hidden">

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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingLookBook;
