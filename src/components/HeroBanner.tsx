import React, { useState } from 'react';
import imggenHeroBg1781509701068 from '../assets/hero/gen_hero_bg.png';


const HeroBanner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqzzqyl", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen lg:min-h-0 lg:h-screen lg:max-h-screen overflow-hidden bg-[#8c6b5d] flex items-start lg:items-center justify-center pt-[140px] md:pt-[140px] lg:pt-[150px] pb-[40px] lg:pb-[60px]">
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
      <div className="relative z-10 w-[95vw] lg:w-[90vw] h-auto max-h-none lg:max-h-[85vh] mt-[20px] md:mt-0 rounded-[5vw] md:rounded-[2vw] bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] flex flex-col md:flex-row px-[6vw] py-[6vw] md:px-[4vw] md:py-[8vw] lg:pt-[2vw] lg:pb-[4vw] lg:px-[5vw] overflow-hidden gap-[6vw] md:gap-[3vw] lg:gap-[2vw] items-center">

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
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center z-10 mt-[6vw] md:mt-0">

          {/* Contact Form */}
          <div className="w-full max-w-[450px] bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[4vw] md:rounded-[1.5vw] p-[8vw] md:p-[2.5vw] lg:p-[1.5vw] lg:px-[2.5vw] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden group">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="font-serif text-white text-[2.2rem] md:text-[2rem] font-medium mb-[1.5vw] md:mb-[0.5vw] text-center leading-tight drop-shadow-md">
              Contact Us
            </h3>
            <p className="font-sans text-white/80 text-center text-[0.95rem] md:text-[0.9rem] mb-[8vw] md:mb-[1.5vw] lg:mb-[1vw] font-light tracking-wide">
              Book an appointment with our experts
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-[4vw] md:py-[2vw] text-center">
                <div className="w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] rounded-full bg-white/10 flex items-center justify-center mb-[4vw] md:mb-[1.5vw] border border-[#d4af37]">
                  <svg className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-white text-[1.5rem] md:text-[1.3rem] mb-[2vw] md:mb-[0.5vw]">Thank You!</h4>
                <p className="font-sans text-white/80 text-[1rem] md:text-[0.9rem] font-light">Your request has been received. Our team will contact you shortly.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[5vw] md:gap-[1vw]">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-[2.5vw] md:rounded-[0.5vw] px-[5vw] md:px-[1.5vw] py-[4vw] md:py-[1vw] lg:py-[0.7vw] font-sans text-[1rem] md:text-[0.9rem] text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-[2.5vw] md:rounded-[0.5vw] px-[5vw] md:px-[1.5vw] py-[4vw] md:py-[1vw] lg:py-[0.7vw] font-sans text-[1rem] md:text-[0.9rem] text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <select
                  name="branch"
                  required
                  defaultValue=""
                  className="w-full bg-white/5 border border-white/20 rounded-[2.5vw] md:rounded-[0.5vw] px-[5vw] md:px-[1.5vw] py-[4vw] md:py-[1vw] lg:py-[0.7vw] font-sans text-[1rem] md:text-[0.9rem] text-white focus:outline-none focus:border-[#d4af37] focus:bg-black/60 transition-all duration-300 appearance-none cursor-pointer [&>option]:bg-[#1a1a1a]"
                >
                  <option value="" disabled className="text-white/50">Select Branch</option>
                  <option value="Yelahanka">Yelahanka</option>
                  <option value="Kolar">Kolar</option>
                  <option value="Udupi">Udupi</option>
                </select>
                <div className="absolute inset-y-0 right-[5vw] md:right-[1.5vw] flex items-center pointer-events-none">
                  <svg className="w-5 h-5 md:w-4 md:h-4 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-white hover:from-[#c5a030] hover:to-[#9a7d25] transition-all duration-300 py-[4vw] md:py-[1vw] lg:py-[0.8vw] rounded-[2.5vw] md:rounded-[0.5vw] font-sans text-[1.1rem] md:text-[1rem] font-medium mt-[3vw] md:mt-[0.5vw] shadow-[0_8px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)] transform hover:-translate-y-[2px] uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
