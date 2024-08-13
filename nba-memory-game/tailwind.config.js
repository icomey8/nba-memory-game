/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test-pattern': "url('/src/assets/test-bball5.svg')",
      },
      gridTemplateColumns: {
        'team-col': 'repeat(6, minmax(0, 192px))',
      },
      gridTemplateRows: {
        'team-row': 'repeat(2, minmax(0, 240px))',
      },
      colors: {
        "primary-color": "var(--primary-bg)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 3s linear infinite",
      }
    },
  },
  plugins: [],
}

