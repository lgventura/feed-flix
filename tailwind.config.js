/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "instagram-bg": "#fafafa",
        "instagram-border": "#dbdbdb",
        "instagram-text": "#262626",
        "instagram-secondary": "#8e8e8e",
        "instagram-blue": "#0095f6",
        "instagram-red": "#ed4956",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
      },
      animation: {
        scale: "scale 0.4s ease",
      },
    },
  },
  plugins: [],
};
