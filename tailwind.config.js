/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        cocoGreen: "#1F7A3D",
        cocoBeige: "#F8F3E9",
        cocoGold: "#C9A24B",
      },
      boxShadow: {
        "soft-xl": "0 28px 60px rgba(15, 23, 42, 0.18)",
        "lift-card": "0 18px 40px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

<!-- add structured data -->

<!-- TODO: fix header alignment -->
