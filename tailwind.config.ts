import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#111827',
        cream: '#FFFFFF',
        brand: {
          400: '#60C3F0',
          500: '#3BAEE9',
          600: '#2090CC',
          /** Text and links on light backgrounds (5.9:1 on white) */
          700: '#0F6A9C',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.055em',
        headline: '-0.035em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ken-burns': 'ken-burns 25s ease-in-out infinite alternate',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
