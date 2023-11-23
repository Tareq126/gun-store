/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009bcd",

          secondary: "#ff8500",

          accent: "#009855",

          neutral: "#160703",

          "base-100": "#f1ffff",

          info: "#6bc5ff",

          success: "#34e254",

          warning: "#ff9b00",

          error: "#ff96b3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
