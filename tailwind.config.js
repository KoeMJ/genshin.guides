/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-slow": "move 5s ease-in-out infinite",
        "move-slow2": "move 10s ease-in-out infinite",
      },
      galleryAnimate: {
        'gallery-animate': 'transition-flex duration-800 ease-in-out',
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(-50px)" },
          "50%": { transform: "translateX(50px)" },
        },
      },
      colors: {
        1: "#c52d60",
        2: "#c52d60",
        3: "#522546",
        4: "#311D3F",
        5: "#FFFFFF",
        6: "#d7d7d7",
        7: "#333",
        8: "#44444420",
        9: "#dddddd",
        10: "#c8c8c820",
        11: "#44444490",
        anemo: "#74C2A8",
        geo: "#D5B35A",
        pyro: "#FF9D44",
        electro: "#C792FF",
        hydro: "#4cc2f1",
        cryo: "#7CDAF4",
        dendro: "#A3C644",
        "dark-anemo": "#548E76",
        "dark-geo": "#9B7B44",
        "dark-pyro": "#D77F39",
        "dark-electro": "#875ECB",
        "dark-hydro": "#358BB9",
        "dark-cryo": "#64A6BF",
        "dark-dendro": "#84922E",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: '425px',
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [],
};
