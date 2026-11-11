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
        /** Cleaned by Swept accent (from the Cleaned logo's violet range) */
        cleaned: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        /** Grounds by Swept accent (from the Grounds logo's lime-to-forest range) */
        grounds: {
          50: '#F3FAE9',
          100: '#E2F3CC',
          300: '#BEF264',
          400: '#A3E635',
          500: '#43A047',
          600: '#2E7D32',
          700: '#1B5E20',
        },
        /** Washed by Swept accent (from the Washed logo's cyan-to-blue range) */
        washed: {
          50: '#EAF4FF',
          100: '#D3E8FF',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#0A84FF',
          /** White text on this passes AA (6.1:1) */
          600: '#0057E0',
          700: '#0046B8',
        },
        /** Scrubbed by Swept accent (from the Scrubbed logo's aqua-to-teal range) */
        scrubbed: {
          50: '#ECFDFA',
          100: '#CCF7F0',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14A3B8',
          /** White text on this passes AA (5.8:1) */
          600: '#0B6E88',
          700: '#0A6178',
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
