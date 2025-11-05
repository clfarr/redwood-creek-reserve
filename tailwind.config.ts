import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f5f2',
          100: '#e8e5dd',
          200: '#d1cab9',
          300: '#b5a88f',
          400: '#9d8c6d',
          500: '#8a7a5f',
          600: '#6e6250',
          700: '#584e43',
          800: '#4a4139',
          900: '#403932',
        },
        forest: {
          50: '#f2f7f3',
          100: '#e0ebe1',
          200: '#c3d7c6',
          300: '#9bbb9f',
          400: '#6f9874',
          500: '#4f7c54',
          600: '#3c6341',
          700: '#2f4f35',
          800: '#27402c',
          900: '#213526',
        },
      },
    },
  },
  plugins: [],
};
export default config;
