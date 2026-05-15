import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1628',
          800: '#152035',
          700: '#1A2A45',
          600: '#213356',
        },
        gold: {
          DEFAULT: '#C4963A',
          light: '#D4A84B',
          dark: '#A87E2E',
          pale: '#F0E6C8',
        },
        cream: '#F7F4EF',
        stone: '#E8E4DC',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.9s ease-out forwards',
        'ticker': 'ticker 40s linear infinite',
        'ticker-slow': 'ticker 60s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(196, 150, 58, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(196, 150, 58, 0)' },
        },
      },
      boxShadow: {
        'gold': '0 0 0 1px rgba(196, 150, 58, 0.3)',
        'gold-lg': '0 4px 24px rgba(196, 150, 58, 0.15)',
        'card': '0 1px 3px rgba(11, 22, 40, 0.08), 0 4px 16px rgba(11, 22, 40, 0.04)',
        'card-hover': '0 4px 24px rgba(11, 22, 40, 0.12), 0 12px 48px rgba(11, 22, 40, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
