import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Bleu foncé principal
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Turquoise/Teal secondaire #37afae
        secondary: {
          50: '#f0fdfc',
          100: '#ccfbf9',
          200: '#99f6f1',
          300: '#5eebe5',
          400: '#37afae', // Couleur principale
          500: '#37afae',
          600: '#2a9d9c',
          700: '#248a89',
          800: '#1e7170',
          900: '#185c5b',
        },
        // Alias pour faciliter l'utilisation
        teal: {
          50: '#f0fdfc',
          100: '#ccfbf9',
          200: '#99f6f1',
          300: '#5eebe5',
          400: '#37afae',
          500: '#37afae',
          600: '#2a9d9c',
          700: '#248a89',
          800: '#1e7170',
          900: '#185c5b',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
