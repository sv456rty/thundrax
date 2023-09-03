import { AppLogoIcon } from "@/components/icons";

/* ****************************************************** 
 -- BASIC CONFIGS - CHANGE THESE TO FIT YOUR APP NEEDS --
*********************************************************/

// what is the app name ?
// NOTE: This should be a short name such as Thundrax or DashThis
const appName = "Thundrax";

// what is the app logo icon ?
// NOTE: The app logo must be a JSX SVG Component, not an Image
// NOTE: A simple way to create a JSX-SVG-Component app logo icon is to Copy JSX @ https://heroicons.com/.
// See example in "@/components/icons/AppLogoIcon" for more info
const appLogoIcon = AppLogoIcon;

// What is the app favicon ?
// NOTE: Upload & overwrite the default favicon.svg in /public/assets/images/favicon.svg
// NOTE: The file name must be favicon.svg and the location must be /public/assets/images

// To create your own Favicon SVG:
// (a) Have your SVG code ready or use Copy SVG code for HeroIcons here >> https://heroicons.com/ and save as SVG file. Note that the default size 24x24 is good enough for a FavIcon
// (b) Open the SVG file, change stroke from "currentcolor" to your RGB color (eg: #2f65cb) and save the file
// (c) Upload the favicon.svg to /public/assets/images/favicons folder
const appFavIconPath = "/assets/images/favicons/favicon.svg";

/* ************************************************* 
 -- STANDARD CONFIGS - CHANGES WHEN NEEDED ONLY --
****************************************************/

// what is the minimum device width (in pixels) in order to use the app ?
const minDeviceWidth = "320px";

// what are the active theme names to use ?
// NOTE: The theme names provided here must be case (lower case / upper case) matched with those found in tailwind.config.js >> daisyUI > themes node. Ex: light | dark | cyberpunk | valentine, etc
const activeThemeList = ["light", "dark", "cyberpunk", "valentine"];

// when the app starts up, what should be the default theme name to load ?
const defaultThemeNameToLoad = activeThemeList[0];

/* ***************************************************** 
 -- ADVANCED CONFIGS - YOU NEED MORE ADVANCED CONFIGS --
********************************************************/

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

/* ************************************************* 
 -- STOP - DO NOT MAKE ANY CHANGE DOWN BELOW 
    UNELSS IF YOU KNOW WHAT YOU ARE DOING --
****************************************************/

const AppConfigs = {
  site: {
    appName: appName,
    appLogoIcon: appLogoIcon,
    appFavIconPath: appFavIconPath,
    minDeviceWidth: minDeviceWidth,
  },
  themes: {
    activeList: activeThemeList,
    standardBreakPoints: standardBreakPoints,
  },
  redux: {
    ui: {
      theme: {
        name: defaultThemeNameToLoad,
        defaultName: defaultThemeNameToLoad,
      },
    },
  },
};

export default AppConfigs;
