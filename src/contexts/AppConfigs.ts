import { HiCube as LogoIcon } from "react-icons/hi2";

/* ************************************************* 
 -- START CONFIGURATION FROM THIS POINT FORWARD --
****************************************************/

// what is the app name ?
// NOTE: This should be a short name such as Thundrax or DashThis
const appName = "Thundrax";

// what is the app logo icon ?
// NOTE: The app logo icon must be a SVG icon type, not Image type
// You can find many SVG icons in the "react-icons" package
// See SVG Icon Repo Ex: https://react-icons.github.io/react-icons/icons?name=hi2
const appLogoIcon = LogoIcon;

// what is the minimum device width (in pixel) in order to use the app ?
const minDeviceWidth = "320px";

// what are the standard breakpoints to use in the app ?
// NOTE 1 - Standard Breakpoint Names provided here (such as sm | md, etc) must be exacted matched - including cases to those found in tailwind.config.js here >> https://tailwindcss.com/docs/screens
// NOTE 2 - Standard Breakpoint Widths (such as 640px) provided here (such as 640px) are copied from tailwind.config.js here >> https://tailwindcss.com/docs/screens. There should not be any reason for you to change these width values unless if you would like to use different width than the standard tailwind breakpoint width. If you do use different widths, do make sure that these widths here are the same with the widths you customize in tailwind.config.js
const standardBreakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// what are the active theme list to use ?
// NOTE: Theme names provided here must be exact matched - including cases to those found in tailwind.config.js daisyUI > themes. Ex: light | dark | cyberpunk | demo, etc
const activeThemeList = ["light", "dark", "cyberpunk", "valentine", "demo"];

/* ************************************************* 
 -- STOP - DO NOT MAKE ANY CHANGE DOWN BELOW 
    UNELSS IF YOU KNOW WHAT YOU ARE DOING --
****************************************************/

const AppConfigs = {
  site: {
    appName: appName,
    appLogoIcon: LogoIcon,
    minDeviceWidth: minDeviceWidth,
  },
  themes: {
    activeList: activeThemeList,
    standardBreakPoints: standardBreakPoints,
  },
};

export default AppConfigs;
