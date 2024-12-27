import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#E1BB80",
        light: "#F2E9BB",
      },
      fontFamily: {
        cairo: ["Cairo", ...fontFamily.sans],
        cinzel: ["Cinzel", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
