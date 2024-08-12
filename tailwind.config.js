/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mask: "#3C3C3C",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "bounce-delay-1": "bounce 2s infinite 0.2s",
        "bounce-delay-2": "bounce 2s infinite 0.4s",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
