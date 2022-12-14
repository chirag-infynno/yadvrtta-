const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        ms: { min: "0px", max: "575px" },
        sm: "576px",
        xxl: "1440px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#1fb6ff",
        "dark-blue": "#547582",
        "white-solid": "#FAFAFA",
        cmnblue: "#23C5FF",
        darkblue: "#003F89",
        "border-blue": "#008EC0",
        "light-grey": "#AFAFAF",
        "dark-grey": "#6f7881",
        "bold-grey": "#868e96",
        grey: "#BEBEBE",
        bordergrey: "#dee2e6",
        pagintionCompBorder: "#E4E4EB",
        activeText: "#FF8800",
        "light-blue": "#23c5ff",
        "dark-blue": "#547582",
        "solid-blue": "#003F89",
        disable: "#f7f8f9",
        black: {
          bold: "#495057",
          solid: "#1C1C23",
          light: "#5C5C5C",
          medium: "#565656",
          lightgray: "#AFAFAF",
          DEFAULT: "#000000",
        },
      },
      backgroundImage: {
        "auth-background-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('../assets/img/background.png')",
        "blue-gradient":
          "linear-gradient(180deg, rgba(85, 255, 255, 0.3) 0%, rgba(0, 144, 225, 0.32) 100%)",
        "blue-back-gradiant":
          "linear-gradient(90deg, rgba(191, 255, 255, 0.3) -1.41%, rgba(185, 255, 255, 0.32) 120.64%)",
        "icon-gradient":
          "linear-gradient(180deg, rgba(21, 241, 255, 0.85) 0%, rgba(63, 197, 255, 0.85) 100%)",
        "event-background-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
        "header-background-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/header_bg_img.svg')",
        "detail-background-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
      },
      backgroundColor: {
        light: "#00000050",
        blue: {
          dark: "#005382",
          DEFAULT: "#0000FF",
          modalcart: "#d9d9d980",
          eventbox: "#E0F7FF",
          bgcomman: "#23c5ff",
        },
        gray: "#808080",
        dragdrop: "#f5f5f5",
        "bg-blue": "#87DFFF",
        "light-grey": "#f8f9fa",
        "bg-light-blue": "#E0F7FF",
        "bg-dark-blue": "#008EC0",
        "header": "#87DFFF",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "21px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["20px;", { lineHeight: "30px" }],
        xl: ["24px", { lineHeight: "36px" }],
        "base-input": ["16px", { lineHeight: "21px" }],
        "2xl": ["38px", { lineHeight: "57px" }],
        "validation-error": ["14px", { lineHeight: "16px" }],
        10: "10px",
        13: "13px",
        18: "18px",
        20: "20px",
        22: "22px",
        25: "25px",
        28: "28px",
        30: "30px",
        32: "32px",
        40: "40px",
        45: "45px",
      },
      lineHeight: {
        none: "1",
        24: "24px",
        27: "27px",
        29: "29px",
        33: "33px",
        38: "38px",
        45: "45px",
        48: "48px",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      spacing: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        22: "22px",
        23: "23px",
        25: "25px",
        26: "26px",
        28: "28px",
        30: "30px",
        33: "33px",
        34: "34px",
        35: "35px",
        36: "36px",
        37: "37px",
        38: "38px",
        40: "40px",
        42: "42px",
        44: "44px",
        45: "45px",
        48: "48px",
        49: "49px",
        50: "50px",
        55: "55px",
        59: "59px",
        60: "60px",
        62: "62px",
        65: "65px",
        69: "69px",
        72: "72px",
        80: "80px",
        81: "81px",
        85: "85px",
        90: "90px",
        94: "94px",
        99: "99px",
        100: "100px",
        109: "109px",
        115: "115px",
        116: "116px",
        125: "125px",
        127: "127px",
        139: "139px",
        145: "145px",
        190: "190px",
        194: "194px",
        200: "200px",
        290: "290px",
      },
      borderWidth: {
        0.25: "0.25px",
        0.4: "0.4px",
        0.5: "0.5px",
        0.8: "0.8px",
        1: "1px",
        2: "2px",
      },
      borderColor: {
        "eventbox-br": "#23C5FF",
        likebtn: "#23c5ff",
        tableborder: "#BABABA",
        dropdown: "#ADADAD",
        eventcreate: "#7A7A7A",
        sectionbreak: "#C2C2C2",
      },
      borderRadius: {
        5: "5px",
        6: "6px",
        10: "10px",
        15: "15px",
        25: "25px",
      },
      boxShadow: {
        DEFAULT: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        eventBox: " 0px 4px 15px rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        21: "21px",
        42: "42px",
        37.5: "37.5px",
      },

      backdropFilter: ["hover", "focus"],

      width: {
        70: "70%",
        56: "56px",
        140: "140px",
        153: "153px",
        170: "170px",
        190: "190px",
        212: "212px",
        300: "300px",
        314: "314px",
        356: "356px",
        360: "360px",
        400: "400px",
        700: "700px",
        468: "468px",
        568: "568px",
        300: "300px",
        600: "600px",
        659: "659px",
        1170: "1170px",
        54: "54%",
        65: "65%",
        35: "35%",
      },
      height: {
        1: "1px",
        15: "15px",
        24: "24px",
        30: "30px",
        33: "33px",
        35: "35px",
        42: "42px",
        43: "43px",
        56: "56px",
        70: "70px",
        72: "72px",
        100: "100px",
        110: "110px",
        123: "123px",
        181: "181px",
        232: "232px",
        250: "250px",
        390: "390px",
        550: "550px",
        578: "578px",
        662: "662px",
      },
      minHeight: {
        0: "0px",
        29: "29px",
        30: "30px",
        36: "36px",
        42: "42px",
        350: "350px",
        420: "420px",
      },
      maxHeight: {
        0.5: "0.5px",
        17: "17px",
        134: "134px",
        217: "217px",
        400: "400px",
        350: "350px",
        550: "550px",
        562: "562px",
        659: "659px",
        662: "662px",
      },
      minWidth: {
        0: "0px",
        15: "15px",
        29: "29px",
        30: "30px",
        50: "50px",
        60: "60px",
        85: "85px",
        135: "135px",
        199: "199px",
        200: "200px",
        232: "232px",
        235: "235px",
        240: "240px",
        250: "250px",
        274: "274px",
        300: "300px",
        352: "352px",
        369: "369px",
        400: "400px",
        480: "480px",
        659: "659px",
        904: "904px",
        214: "214px",
      },
      maxWidth: {
        "1/4": "25%",
        50: "50px",
        55: "55px",
        60: "60px",
        70: "70px",
        85: "85px",
        100: "100px",
        125: "125px",
        140: "140px",
        100: "100px",
        150: "150px",
        175: "175px",
        190: "190px",
        199: "199px",
        200: "200px",
        227: "227px",
        231: "231px",
        232: "232px",
        240: "240px",
        250: "250px",
        275: "275px",
        284: "284px",
        296: "296px",
        300: "300px",
        307: "307px",
        308: "308px",
        352: "352px",
        365: "365px",
        392: "392px",
        396: "396px",
        400: "400px",
        468: "468px",
        500: "500px",
        548: "548px",
        600: "600px",
        681: "681px",
        640: "640px",
        651: "651px",
        659: "659px",
        800: "800px",
        1110: "1110px",
        1076: "1076px",
        1170: "1170px",
        "2xl": "1440px",
      },

      gap: {
        2: "2px",
        3: "3px",
        8: "8px",
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        20: "20px",
        24: "24px",
        25: "25px",
        26: "26px",
        28: "28px",
        29: "29px",
        30: "30px",
        31: "31px",
        32: "32px",
        34: "34px",
        35: "35px",
        40: "40px",
        45: "45px",
        79: "79px",
      },

      zIndex: {
        auto: "auto",
        0: "0",
        1: "1",
        99: "99",
      },
    },
  },
  plugins: [],
};
