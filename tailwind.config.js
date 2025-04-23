/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        brand: {
          primary: '#00f784',
          'primary-dark': '#00d46e',
          secondary: '#006636',
          'secondary-dark': '#005a2e',
          'active-bg': '#3e3e3e',
          'active-light': '#a4a4a4',
          'active-dark': '#4a4a4a'
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Light theme background colors
        light: {
          bg: {
            primary: '#fcfcfc',    // Main background
            secondary: '#f5f5f5',  // Secondary background
            tertiary: '#9e9d9d',   // Tertiary background
            nav: '#222224',        // Navigation background
            divider: '#000000',    // Divider color
            toggle: '#e5e7eb'      // Toggle background
          },
          border: {
            primary: '#e5e7eb',    // Main border
            secondary: '#d1d5db',  // Secondary border
          },
        },
        // Dark theme background colors
        dark: {
          bg: {
            primary: '#000000',    // Main background
            secondary: '#222224',  // Secondary background
            tertiary: '#374151',   // Tertiary background
            nav: '#222224',        // Navigation background
            divider: '#ffffff',    // Divider color
            toggle: '#374151'      // Toggle background
          },
          border: {
            primary: '#374151',    // Main border
            secondary: '#4b5563',  // Secondary border
          },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} 