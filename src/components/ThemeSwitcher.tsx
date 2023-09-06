"use client";

import classNames from "classnames";

import { setThemeName } from "@/redux/slices/uiSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import AppConfigs from "@/configs/AppConfigs";

import { ThemeSwitcherIcon, DropDownIcon } from "@/components/icons";

type themeList = {
  name: string;
};

const ThemeSwitcher = () => {
  //
  const dispatch = useAppDispatch();
  const themeName = useAppSelector((state) => state.ui.theme.name);
  const themeList: themeList[] = AppConfigs?.themes?.activeList?.map(
    (name: string) => ({ name })
  );

  const handleClick = (themeName: string) => {
    dispatch(setThemeName(themeName));
    (document.activeElement as HTMLElement).blur(); // close theme selection drop down when clicked - https://github.com/saadeghi/daisyui/issues/1195
  };
  return (
    <div className={"bg-base-100 rounded-box hover:bg-info"}>
      <div className="z-20 dropdown dropdown-end" title="Change Theme">
        <div tabIndex={0} className="btn normal-case btn-ghost">
          <ThemeSwitcherIcon />
          <DropDownIcon />
        </div>{" "}
        <div className="dropdown-content bg-base-200 text-base-content rounded-box top-px max-h-96 w-56 overflow-y-auto shadow mt-16">
          <div
            className="grid grid-cols-1 gap-3 p-3 hover:bg-primary"
            tabIndex={0}
          >
            {themeList.map(function (row, i) {
              return (
                <button
                  key={i}
                  className="outline-base-content overflow-hidden rounded-lg text-left"
                  onClick={() => handleClick(row.name)}
                >
                  <div
                    data-theme={row.name}
                    className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                  >
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className={classNames({
                            invisible: themeName !== row.name,
                            "h-3 w-3 shrink-0": true,
                          })}
                        >
                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                        </svg>{" "}
                        <div className="flex-grow text-sm">{row.name}</div>{" "}
                        <div
                          className="flex h-full flex-shrink-0 flex-wrap gap-1"
                          data-svelte-h="svelte-izuv7l"
                        >
                          <div className="bg-primary w-2 rounded"></div>{" "}
                          <div className="bg-secondary w-2 rounded"></div>{" "}
                          <div className="bg-accent w-2 rounded"></div>{" "}
                          <div className="bg-neutral w-2 rounded"></div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
