//react router dom
import { NavLink } from "react-router-dom";

//react icons
import { IoHomeSharp, IoMenu, IoEarthOutline } from "react-icons/io5";

//hooks
import useToggle from "../../hooks/useToggle.ts";
import useChangeLanguage from "../../hooks/useChangeLanguage.ts";

//導覽列資料
import { menuData } from "./data/menuData.ts";
import { languageData } from "./data/languageData.ts";

//components
import DropDownMenu from "./components/DropDownMenu.tsx"; //手機下拉選單
import DesktopNavbar from "./components/DesktopNavbar.tsx"; //電腦導覽列

const Navbar = () => {
  //調用 hook
  const { toggle, handleToggle } = useToggle();
  const { changeLanguage } = useChangeLanguage();

  return (
    <header className="bg-neutral-800 text-white">
      <nav className="h-12 flex items-center justify-between px-2 text-xl">
        <NavLink to={"/"} className="w-1/3 lg:hidden">
          <IoHomeSharp />
        </NavLink>
        <h1 className="w-1/3 text-sm lg:w-2/12 text-center">Shananhsu</h1>
        {/* 手機版與細與下拉選單 */}
        <div className="flex items-center w-1/3 justify-end lg:hidden">
          <button className="mr-4">
            <IoEarthOutline />
          </button>
          <button onClick={handleToggle}>
            <IoMenu />
          </button>
        </div>
        <DesktopNavbar
          menuData={menuData}
          languageData={languageData}
          changeLanguage={changeLanguage}
        />
        {toggle && (
          <DropDownMenu menuData={menuData} handleToggle={handleToggle} />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
