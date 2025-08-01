const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
