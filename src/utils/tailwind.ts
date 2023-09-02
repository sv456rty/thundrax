/* Deals with Tailwind-related functions such as finding out the breakpoint width
   or getting active theme list, etc
*/

/* 

NOTE: Do not use the method of taping directly into the tailwindcss/resolveConfig file in order to retrieve tailwind config info. This is because doing so will  result in huge increase in file size and access speed. What we want to do is to  copy and duplicate the few values found in tailwind.config.js to be used in the app into the file /configs/AppConfigs.ts. The only downside to this copy and duplication method is that if there are any updates or new changes in tailwind.config.js, we may need to update those few matching values in /configs/AppConfigs.ts. But this is much better than having to tap directly into the tailwindcss/resolveConfig
file.

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "root/tailwind.config";
const fullConfig = resolveConfig(tailwindConfig) as any;

*/

import AppConfigs from "@/configs/AppConfigs";

// determines whether the current device width is smaller, equal or larger than the app's required minimum device width
const metRequiredMinDeviceWidth = () => {
  // cwidth - current device width
  // mwidthpx - required minimum device width in pixels
  // mwidth - required minium device width
  const cwidth = window.innerWidth; // 365, 456, 1205, etc
  const mwidthpx = AppConfigs.site.minDeviceWidth; // 320px, 360px, etc
  const mwidth = mwidthpx ? parseInt(mwidthpx, 10) : null; // 320

  if (cwidth && mwidth) {
    if (cwidth < mwidth) return -1; // current device width is smaller
    if (cwidth == mwidth) return 0; // current device width is equal
    else return 1; // current device width is larger
  }
  return null;
};

export { metRequiredMinDeviceWidth };
