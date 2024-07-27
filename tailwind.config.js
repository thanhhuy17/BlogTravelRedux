/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sea-image": "url('./assets/sea.jpg')",
      },
    },
  },
  plugins: [],
};
