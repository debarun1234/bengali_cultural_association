// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],  // Using a modern, plush font
      },
      colors: {
        primary: '#007bff',  // Rich blue for the primary action
        secondary: '#ff6b6b',  // Vibrant pink for secondary accents
        background: '#f8f9fa',  // Light background to maintain a pleasant experience
      },
      spacing: {
        '128': '32rem', // Large spacers for plush padding and margin
      },
      boxShadow: {
        plush: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
