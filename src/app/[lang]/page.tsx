// page.tsx

import AppConfigs from "@/configs/AppConfigs";
import { WarningIcon, CheckDoneIcon } from "@/components/icons";
import { type Locale, getTranslator } from "@/utils/i18n";

/*
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/NavBar"), {
  loading: () => <p>Loading...</p>,
});
*/

import NavBar from "@/components/NavBar";

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const t = await getTranslator(lang);

  return (
    <div className={"flex w-screen items-center justify-center bg-primary"}>
      <div className="rounded-box m-4 bg-white max-w-[540px]">
        <NavBar />
        <ul className="menu">
          <li className="p-2">
            {t("github.opening_text", { name: AppConfigs.site.appName })}
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              All essential packages installed
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              All essential file structures are set up
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              Tailwind + nextjs + tscofig done
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              /public/assets/images/avatars loaded
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              /app/@mocks/mock.users.json file added
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              App Logo Icon / FavIcon are set up
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              DaisyUI codes are implemented throughout the app (such as loading
              default theme, using Menu / Alert components)
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              Add window resize check to ensure minimum device width is met or
              else error alert will be shown
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              Redux is implemented with default DaisyUI Theme applied when app
              starts up. Redux-Toolkit + Redux-Persist is used (see
              /redux/store.ts).
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              i18n Translation is implemented with built-in NextJS i18n feature
              (no external i18n package is needed)
              <br />
            </a>
          </li>
          <li>
            <a>
              <CheckDoneIcon />
              Theme Switcher is implemented
              <br />
            </a>
          </li>

          <li>
            <a>
              <CheckDoneIcon />
              ~100 Google PageSpeed Performance score when deploying to Vercel
              <br />
            </a>
          </li>
          <li>
            <a>
              <WarningIcon />
              No specific page or route configs are set up yet
            </a>
          </li>
          <li className="p-2">
            This version is minimum base version + redux + i18n + theme
            switching implementation
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
