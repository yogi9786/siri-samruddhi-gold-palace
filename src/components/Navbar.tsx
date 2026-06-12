import { useState } from 'react';
import logo from '../assets/siri-samruddhi-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Tapestry of Traditions', 'Categories', 'Look Book'];

  const handleScroll = (label: string) => {
    const el = document.getElementById(label.toLowerCase().replace(/\s+/g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f0]/95 backdrop-blur-md shadow-sm border-b border-gold-200/30">
      <div className="flex items-center justify-between px-[5vw] py-[1.5vw] md:py-[1vw]">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Siri Samruddhi" className="h-[6vw] md:h-[3.5vw] min-h-[40px] max-h-[70px] object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[3vw]">
          {navLinks.map((label) => (
            <button
              key={label}
              onClick={() => handleScroll(label)}
              className="font-sans text-[0.95rem] tracking-[0.08em] text-charcoal hover:text-[#7c1b2e] transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#7c1b2e] after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-charcoal hover:text-[#7c1b2e] transition-colors p-[1vw]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col bg-[#fdf8f0] px-[5vw] pb-[4vw] pt-[1vw] border-t border-gold-200/30">
          {navLinks.map((label) => (
            <button
              key={label}
              onClick={() => handleScroll(label)}
              className="text-left font-sans text-[1rem] tracking-wide py-[3vw] border-b border-gold-200/20 text-charcoal hover:text-[#7c1b2e]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
