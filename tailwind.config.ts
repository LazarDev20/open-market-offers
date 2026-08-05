import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f2a3f",
        "ink-soft": "#3d5568",
        teal: "#0e7c7b",
        "teal-dk": "#0a5f5e",
        amber: "#e8a33d",
        "amber-dk": "#cf8a24",
        mist: "#f4f7f8",
        line: "#dbe4e7",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
