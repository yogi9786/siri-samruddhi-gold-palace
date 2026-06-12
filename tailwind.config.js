/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50:  '#fdf8f0',
          100: '#faf0e0',
          200: '#f5e0c0',
          300: '#edd4a0',
          DEFAULT: '#f5efe6',
        },
        burgundy: {
          DEFAULT: '#7c1b2e',
          light: '#a8294a',
          dark: '#5a1220',
        },
        charcoal: {
          DEFAULT: '#2d2d2d',
          light: '#4a4a4a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      screens: {
        xs: '400px',
      },
      animation: {
        'scroll-x':      'scrollX 40s linear infinite',
        'fade-in-up':    'fadeInUp 0.8s ease-out forwards',
        'fade-in':       'fadeIn 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'shimmer':       'shimmer 2s ease-in-out infinite',
        'float':         'float 3s ease-in-out infinite',
        'pulse-gold':    'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        scrollX: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(3vw)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-3vw)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '-200% center' },
          '50%':      { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-0.8vw)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%':      { boxShadow: '0 0 0 0.5vw rgba(212,175,55,0)' },
        },
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #d4af37, #f5d77e, #c8951c, #f5d77e, #d4af37)',
        'hero-gradient':  'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
        'card-gradient':  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
        'cream-gradient': 'linear-gradient(135deg, #fdf8f0 0%, #faf0e0 100%)',
      },
      spacing: {
        'section': '8vw',
      },
    },
  },
  plugins: [],
}
