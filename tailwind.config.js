/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#486581',
          600: '#334E68',
          700: '#243B53',
          800: '#152538',
          900: '#0B1524',
          950: '#070E1A',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#0D9488',
          600: '#0F766E',
          700: '#115E59',
          800: '#134E4A',
          900: '#042F2E',
        },
        surface: {
          warm: '#F8F9FA',
          card: '#FFFFFF',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        },
        mint: {
          50: '#F2FAF7',
          100: '#E2F6EE',
          200: '#C5EDE0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        subtle: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        modal: '0 25px 50px -12px rgba(11, 21, 36, 0.25)',
      },
      keyframes: {
        'drift-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'drift': 'drift-slow 16s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
