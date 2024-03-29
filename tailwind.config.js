/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors:{
        'purple-100':"#830FE7",
        'grey-100':"#3A3A3A",
        'grey-600':"#333333",
        'yellow':'#FFD200',
      },
      fontFamily:{
        montsAlt:['var(--font-mont-alt)'],
        mono:['var(--font-mono)']
      }
    },
  },
  plugins: [],
};
