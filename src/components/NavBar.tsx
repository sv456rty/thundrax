import AppConfigs from "@/configs/AppConfigs";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 rounded-box">
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
