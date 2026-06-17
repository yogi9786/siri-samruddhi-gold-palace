import { useState, useEffect } from 'react';
import logo from '../assets/siri-logo.png';

const navLinks = ['Tapestry of Traditions', 'Categories', 'Look Book'];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (label: string) => {
    const el = document.getElementById(label.toLowerCase().replace(/\s+/g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-[2vw] md:py-[1vw]' : 'bg-transparent py-[3vw] md:py-[1.5vw]'} px-[5vw]`}>
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">

        {/* Brand / Logo */}
        <div className="flex items-center gap-[2vw] md:gap-[1.5vw]">
          <div className="w-[45px] h-[45px] md:w-[70px] md:h-[70px] bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-2 md:p-3 flex-shrink-0">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className={`flex flex-col justify-center ${isScrolled ? 'text-[#4a332a]' : 'text-white drop-shadow-md'}`}>
            <span className="font-serif text-[1.2rem] md:text-[1.5rem] tracking-wider leading-none">
              Siri Samruddhi
            </span>
            <span className="font-sans text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.3em] font-medium mt-[0.5vw] md:mt-[0.2vw] opacity-90">
              Gold Palace
            </span>
          </div>
        </div>

        {/* Desktop Nav (Pill Style) */}
        <nav className={`hidden lg:flex items-center rounded-full p-[0.4vw] shadow-lg transition-all duration-300 ${isScrolled ? 'bg-[#fdf8f0] border border-[#d4af37]/30' : 'bg-white'}`}>
          <div className="flex items-center gap-[2.5vw] px-[2.5vw]">
            {navLinks.map((label) => (
              <button
                key={label}
                onClick={() => handleScrollTo(label)}
                className="font-sans text-[0.85rem] font-medium text-[#2a2a2a] hover:text-[#8c6b5d] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => handleScrollTo('contactus')} className="bg-[#4a332a] text-white hover:bg-[#32221c] transition-colors rounded-full px-[2vw] py-[0.8vw] font-sans text-[0.85rem] font-medium ml-[1vw]">
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`lg:hidden transition-colors p-[1vw] ${isScrolled ? 'text-[#4a332a]' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[400px] border-b border-gray-200' : 'max-h-0'}`}>
        <div className="flex flex-col p-[5vw] gap-[4vw]">
          {navLinks.map((label) => (
            <button
              key={label}
              onClick={() => handleScrollTo(label)}
              className="text-left font-sans text-[1.1rem] font-medium text-[#2a2a2a] hover:text-[#8c6b5d]"
            >
              {label}
            </button>
          ))}
          <button onClick={() => handleScrollTo('contactus')} className="bg-[#4a332a] text-white rounded-full py-[3vw] font-sans text-[1.1rem] font-medium w-full mt-[2vw]">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
