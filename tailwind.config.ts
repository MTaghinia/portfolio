import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          1: "#29CC96",
          2: "#1B332E",
          3: "#08C284",
          4: "#48A083",
        },
        secondary: {
          1: "#BFA49A",
          2: "#B8B2B0",
        },
        neutral: {
          1: "#1D1D1F",
          2: "#262629",
          3: "#7A7A7A",
          4: "#A3A3A3",
          5: "#B8B8B8",
          6: "#E0E0E0",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
