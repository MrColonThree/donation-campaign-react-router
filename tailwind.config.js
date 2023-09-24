/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg":
          "url('https://images.unsplash.com/photo-1617450365226-9bf28c04e130')",
      },
    },
  },
  plugins: [],
};
