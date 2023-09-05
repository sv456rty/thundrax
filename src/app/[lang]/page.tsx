// page.tsx

import AppConfigs from "@/configs/AppConfigs";

import { WarningIcon, CheckDoneIcon } from "@/components/icons";

import { type Locale, getTranslator } from "@/utils/i18n";

/*
import LocaleSwitcher from "@/components/LocaleSwitcher";
<li>
<LocaleSwitcher orientation={"vertical"} />
</li>
*/

import dynamic from "next/dynamic";

const LocaleSwitcher = dynamic(() => import("@/components/LocaleSwitcher"), {
  loading: () => <p>Loading...</p>,
});

async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const t = await getTranslator(lang);

  return (
    <div
      className={
        "flex h-screen w-screen items-center justify-center bg-primary"
      }
    >
      <ul className="menu rounded-box m-4 bg-white max-w-[540px]">
        <li>
          <LocaleSwitcher orientation={"vertical"} />
        </li>
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
            starts up. Redux-Toolkit + Redux-Persist is used. By default, only
            ui.theme node is persisted. All other reducers or associated with ui
            slice are not persisted (see /redux/store.ts).
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
          This version is minimum base version + redux + i18n implementation
        </li>
      </ul>
    </div>
  );
}

export default Home;
