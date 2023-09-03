"use client";

import type { PropsWithChildren } from "@/types/props.children";
import { useMinimumDeviceWidthCheck } from "@/hooks/useThundrax";

import AppConfigs from "@/configs/AppConfigs";

const FailedWidthAlert = () => {
  const minimumDeviceWidth = AppConfigs.site.minDeviceWidth;
  return (
    <div className="flex justify-center flex-col m-auto h-screen p-1 bg-primary">
      <div className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          This app supports devices with width {minimumDeviceWidth} or larger.
          Your Device Width is too small and therefore, it is not supported. We
          apologize for the inconvenience!
        </span>
      </div>
    </div>
  );
};

const AppProvider = (props: PropsWithChildren<{}>) => {
  const isOK = useMinimumDeviceWidthCheck();
  if (isOK == null) return null;
  else if (!isOK) return <FailedWidthAlert />;
  else return props.children;
};

export default AppProvider;
