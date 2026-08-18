/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4A7C3C",
          "green-hover": "#3C6630",
          dark: "#25381C",
          light: "#EAF3E7",
          bg: "#FAF7F2",
          surface: "#F0EBE2",
          charcoal: "#1C1C1A",
          muted: "#6B6B65",
          accent: "#D4A359",
        }
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        accent: ['"Instrument Serif"', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(28, 28, 26, 0.08)',
        'elevated': '0 20px 40px -15px rgba(28, 28, 26, 0.12)',
        'brand': '0 12px 25px -5px rgba(74, 124, 60, 0.3)',
      },
      animation: {
        'ken-burns': 'kenburns 20s infinite alternate ease-in-out',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
