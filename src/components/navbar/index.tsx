//react router dom
import { NavLink } from "react-router-dom";

//i18n
import { useTranslation } from "react-i18next";

//react icons
import { IoHomeSharp } from "react-icons/io5";

//hooks
import useToggle from "../../hooks/useToggle.ts";
import useChangeLanguage from "../../hooks/useChangeLanguage.ts";

//導覽列資料
import { menuData } from "./data/menuData.ts";
import { languageData } from "./data/languageData.ts";

//components
import MobileNavbar from "./components/MobileNavbar.tsx"; //手機導覽列
import DropDownMenu from "./components/DropDownMenu.tsx"; //手機下拉選單
import DesktopNavbar from "./components/DesktopNavbar.tsx"; //電腦導覽列
import LanguageMenu from "./components/LanguageMenu.tsx"; //語言選單

const Navbar = () => {
  //i18n
  const { t } = useTranslation();

  //調用 hook
  const { toggle: pageMenu, handleToggle: handlePageMenu } = useToggle();
  const { toggle: langMenu, handleToggle: handleLangMenu } = useToggle();
  const { changeLanguage } = useChangeLanguage();

  return (
    <header className="bg-neutral-800 text-white">
      <nav className="h-12 flex items-center justify-between px-2 text-xl">
        <NavLink to={"/"} className="w-1/3 lg:hidden">
          <IoHomeSharp />
        </NavLink>
        <h1 className="w-1/3 text-sm lg:w-2/12 text-center">
          {t("navbar.shananhsu")}
        </h1>
        <MobileNavbar
          handlePageMenu={handlePageMenu}
          handleLangMenu={handleLangMenu}
        />
        <DesktopNavbar
          menuData={menuData}
          languageData={languageData}
          changeLanguage={changeLanguage}
        />
        {pageMenu && (
          <DropDownMenu menuData={menuData} handlePageMenu={handlePageMenu} />
        )}
        {langMenu && (
          <LanguageMenu
            languageData={languageData}
            handleLangMenu={handleLangMenu}
            changeLanguage={changeLanguage}
          />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
