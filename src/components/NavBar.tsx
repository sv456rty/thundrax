import AppConfigs from "@/configs/AppConfigs";

import dynamic from "next/dynamic";

const LocaleSwitcher = dynamic(() => import("@/components/LocaleSwitcher"), {
  loading: () => <p>Loading...</p>,
});

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
  loading: () => <p>Loading...</p>,
});

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 rounded-t-2xl rounded-b-none">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          {AppConfigs.site.appName}
        </a>
      </div>
      <div className="flex-none">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavBar;
