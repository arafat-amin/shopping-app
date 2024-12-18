/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // This ensures Tailwind scans all files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
