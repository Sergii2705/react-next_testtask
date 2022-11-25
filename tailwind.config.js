/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   "sm": "360px",
    //   "md": "768px",
    //   "lg": "1440px",
    //   "xl": "1600px",
    // },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
    },

    container: {
      center: true,
      padding: "9px",
    },

    extend: {
      spacing: {
        "0.75": "3px",
        "3.5": "14px",
        "6.5": "26px",
        "7.25":" 29px",
        "22": "88px",
        "33": "132px",
        "34": "136px",
      },
      width: {
        "16.5": "66px",
        "21": "85px",
        "32": "128px",
        "45": "180px",
        "50": "200px",
        "55": "220px",
        "68.25": "274px",
        "75.5": "302px",
        "100.5": "402px",
        "141": "564px",
      },
      height: {
        "1/4": "1px",
        "12.5": "50px",
        "13": "52px",
        "15": "60px",
        "16.5": "66px",
        "21": "85px",
        "32.5": "130px",
        "68.25": "274px",
        "109": "436px",
      },

      minHeight: {
        "51.5": "206px",
      },

      minWidth: {
        "16.5": "66px",
        "21": "85px",
        "50": "200px",
        "75.5": "302px",
        "80": "320px",
      },

      maxHeight: {
        "12.5": "50px",
        "51.5": "206px",
        "41": "164px",
      },

      fontSize: {
        "5.25": "21px",
        "7": "28px",
      },

      lineHeight: {
        '6.25': "25px", 
        "7.5": "30px",
      },

      translate: {
        "19": "76px",
      },

      boxShadow: {
        base: "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)"
      },

      colors: {
        "light-gray": "#878D9D",
        "middle-gray": "#70778B",
        "dark-gray": "#3A4562",
        "blue-gray": "#55699E",
        "b-gray": "rgba(85, 105, 158, 0.3)",
        "b-yellow": "#FFCF00",
        "t-gray": "#E7EAF0",
        "p-gray": "rgba(56, 65, 93, 0.602109)"
  
      },

      backgroundColor: {
        "dark-gray": "#2A3047",
        "light-gray": "#384564",
        "white-gray": "rgba(161, 177, 219, 0.317343)",
        "c-yellow": "rgba(255, 207, 0, 0.15);",
        "c-dark":"#202336",
      },

      screens: {
        "3xl": "2048px",
        "4xl": "2560px",
      },

      gridTemplateColumns: {
        'detailed': '1fr auto',
      }
    },
  },
  plugins: [],
}
