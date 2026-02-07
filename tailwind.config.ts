import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: '#e0fffe',
          100: '#b3fffc',
          200: '#80fff9',
          300: '#4dfff6',
          400: '#1afff3',
          500: '#00CED1',
          600: '#00a8aa',
          700: '#008B8B',
          800: '#006666',
          900: '#004444',
        },
        gold: {
          400: '#FFD700',
          500: '#DAA520',
          600: '#B8860B',
        },
        void: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1) blur(0px)' },
          '100%': { filter: 'brightness(1.3) blur(2px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
