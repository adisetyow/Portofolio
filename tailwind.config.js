/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1E1E1E',
          tertiary: '#2D2D2D'
        },
        accent: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          tertiary: '#6D28D9'
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#E5E7EB',
          tertiary: '#9CA3AF',
          accent: '#A78BFA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(31, 41, 55, 0) 70%)'
      }
    },
  },
  plugins: [],
};