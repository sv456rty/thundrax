// Check if the device width is met with the app's required minimum device width.
// When the app first loads or whenever the window is resized, this function checks whether the current device width meets the required minium device width.

"use client";

import { useState, useEffect } from "react";
import { metRequiredMinDeviceWidth } from "@/utils/tailwind";

const useMinimumDeviceWidthCheck = () => {
  //
  const [metWidth, setMetWidth] = useState<boolean | null>(null);

  useEffect(() => {
    //

    // https://www.geeksforgeeks.org/how-to-wait-resize-end-event-and-then-perform-an-action-using-javascript/

    // timeOutFunctionId stores a numeric ID which is
    // used by clearTimeOut to reset timer
    let timeOutFunctionId: any;

    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      const result: number | null = metRequiredMinDeviceWidth();
      if (result == null) setMetWidth(null);
      else if (result < 0) {
        setMetWidth(false);
      } else {
        setMetWidth(true);
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () =>
      window.removeEventListener("resize", function () {
        // clearTimeOut() resets the setTimeOut() timer
        // due to this the function in setTimeout() is
        // fired after we are done resizing
        clearTimeout(timeOutFunctionId);

        // setTimeout returns the numeric ID which is used by
        // clearTimeOut to reset the timer
        timeOutFunctionId = setTimeout(handleResize, 500);
      });
  }, []);

  return metWidth;
};

export default useMinimumDeviceWidthCheck;
