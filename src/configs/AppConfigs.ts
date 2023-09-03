//import { HiRocketLaunch as LogoIcon } from "react-icons/hi2";

import { RocketLaunchIcon as LogoIcon } from "@heroicons/react/24/solid";

/* ****************************************************** 
 -- CHANGE FROM THIS POINT FORWARD FOR YOUR APP SETUP --
*********************************************************/

// what is the app name ?
// NOTE: This should be a short name such as Thundrax or DashThis
const appName = "Thundrax";

// what is the app logo icon ?
// NOTE: The app logo must be a react-icons SVG Icon, not an Image
// The reason for this requirement is because the App Logo SVG Icon Stroke color
// will be automatically resized and changed dynamically to the primary color of the chosen theme
// You can find various react-icons SVG Icons here >> https://react-icons.github.io/react-icons/icons
const appLogoIcon = LogoIcon;

// Update your favicon
// NOTE: Favicon is a SVG icon, not an Image file
// NOTE: Upload & overwrite the default favicon.svg in /public/assets/images/favicon.svg
// Note that the file name must be favicon.svg and the location must be /public/assets/images

// To create your own Favicon SVG:
// (a) Have your SVG code ready or use Copy SVG code for HeroIcons here >> https://heroicons.com/ and save as SVG file
//     NOTE that the default size 24x24 is good enough for a FavIcon
// (b) Open the SVG file, change stroke from "currentcolor" to your RGB color (eg: #2f65cb) and save the file
// On NextJS Metadata Icons >> https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
const appFavIconPath = "/assets/images/favicons/favicon.svg";

/* ************************************************* 
 -- STANDARD STUFFS - DO NOT CHANGE UNLESS NEEDED --
****************************************************/

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
const activeThemeList = ["light", "dark", "cyberpunk", "valentine"];

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
};

export default AppConfigs;
