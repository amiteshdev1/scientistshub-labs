/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Map Tailwind utilities to CSS variables
        primary: {
          DEFAULT: 'var(--brand-primary-blue)',
          light: '#f8fafc', // Slate-50 for light mode backgrounds
          dark: 'var(--brand-primary-blue)', // Deep blue for dark mode
        },
        brand: {
          primary: 'var(--brand-primary-blue)',
          secondary: 'var(--brand-secondary-blue)',
          sky: 'var(--brand-sky-blue)',
          green: 'var(--brand-green)',
          red: 'var(--brand-red)',
          yellow: 'var(--brand-yellow)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          success: 'var(--accent-success)',
          warning: 'var(--accent-warning)',
          danger: 'var(--accent-danger)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
