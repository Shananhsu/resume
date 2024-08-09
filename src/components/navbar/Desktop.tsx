//react router dom
import { menuData } from "./menuData.ts";

//i18n
import { useTranslation } from "react-i18next";

//hooks
import useChangeLanguage from "../../hooks/useChangeLanguage.ts";

//react icons
import { IoEarthOutline, IoLocationOutline } from "react-icons/io5";

//導覽列資料
import { NavLink } from "react-router-dom";

//語系選單資料
import { languageData } from "./languageData.ts";

const Desktop = () => {
  const { t } = useTranslation();

  const { changeLanguage } = useChangeLanguage();

  return (
    <nav className="hidden lg:flex py-2 px-4 items-center">
      <h1 className="w-2/12">{t("navbar.shananhsu")}</h1>
      <div className="flex items-center justify-center w-8/12">
        {menuData.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `${isActive ? "text-green-400" : "text-gray-400"}`
            }
          >
            {({ isActive }) => (
              <div className="mx-2 flex justify-center items-center">
                {isActive && (
                  <IoLocationOutline className="text-2xl animate-bounce" />
                )}
                <p className={`w-full mx-2 ${!isActive && "hover:text-white"}`}>
                  {t(item.title)}
                </p>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <div className="w-2/12 flex justify-end">
        {languageData.map((item) => (
          <button
            className="mx-4 hover:text-red-600"
            onClick={() => changeLanguage(item.lang)}
            key={item.id}
          >
            {item.title}
          </button>
        ))}
        <button className="hover:text-green-400">
          <IoEarthOutline />
        </button>
      </div>
    </nav>
  );
};
export default Desktop;
