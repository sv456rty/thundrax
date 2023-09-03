// import { IconType } from "react-icons";

type Icon = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// **********************************************************
// NOTE: The app logo parameter icon must be an SVG Icon, not an Image
// You can find various SVG Icons here >> https://react-icons.github.io/react-icons/icons?name=hi2
const AppLogoIcon = ({ icon: ChosenIcon }: Icon) => {
  return <ChosenIcon className={"h-6 w-6 text-green-500"} />;
};

// **********************************************************
const WarningIcon = () => {
  // url > https://www.tailwindtoolbox.com/icons
  return (
    <svg
      className="h-6 w-6 text-orange-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />{" "}
      <line x1="12" y1="9" x2="12" y2="13" />{" "}
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
};

// **********************************************************
const CheckDoneIcon = () => {
  // url > https://www.tailwindtoolbox.com/icons
  return (
    <svg
      className="h-6 w-6 text-green-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <polyline points="9 11 12 14 20 6" />{" "}
      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
  );
};

export { AppLogoIcon, WarningIcon, CheckDoneIcon };
