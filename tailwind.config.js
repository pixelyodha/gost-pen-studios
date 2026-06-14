/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   "#0EA5E9",
          pink:   "#EC4899",
          lime:   "#84CC16",
          gold:   "#F59E0B",
          dark:   "#0F0F1A",
          slate:  "#1E1E35",
          muted:  "#8B8BAA",
          light:  "#F0F0FF",
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
        accent:  ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0EA5E9 0%, #EC4899 50%, #84CC16 100%)',
        'gradient-blue-pink': 'linear-gradient(135deg, #0EA5E9, #EC4899)',
        'gradient-pink-lime': 'linear-gradient(135deg, #EC4899, #84CC16)',
        'gradient-dark-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(14,165,233,0.2) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(236,72,153,0.2) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-blue':  '0 0 20px 4px rgba(14,165,233,0.4)',
        'glow-pink':  '0 0 20px 4px rgba(236,72,153,0.4)',
        'glow-lime':  '0 0 15px 3px rgba(132,204,22,0.5)',
        'glow-gold':  '0 0 15px 3px rgba(245,158,11,0.5)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        }
      }
    }
  },
  plugins: [],
}
