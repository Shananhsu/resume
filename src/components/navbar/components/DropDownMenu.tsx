//react router dom
import { NavLink, useNavigate } from "react-router-dom";

//i18n
import { useTranslation } from "react-i18next";

//react icons
import { IoLocationOutline } from "react-icons/io5";

//type
import { dropDownMenuProps } from "../type.ts";

//靜態資料
import { menuData } from "../data/menuData.ts"; //導覽列選項

const DropDownMenu = ({ handlePageMenu }: dropDownMenuProps) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  //切換頁面時關閉選單
  const handleLinkClick = (link: string) => {
    handlePageMenu();
    navigate(link);
  };

  return (
    <div className="fixed w-full h-screen bg-mask bg-opacity-50 left-0 top-0 flex items-start">
      <div className="w-10/12 bg-black mx-auto mt-12 text-sm rounded-b-md">
        {menuData.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `${isActive ? "text-white" : "text-gray-400"}`
            }
            onClick={() => handleLinkClick(item.link)}
          >
            {({ isActive }) => (
              <div className="py-4 flex justify-center">
                <div className="w-1/2 flex items-center relative">
                  {isActive && (
                    <span className="absolute left-0">
                      <IoLocationOutline className="text-green-500 animate-bounce" />
                    </span>
                  )}
                  <p className="w-full text-center">{t(item.title)}</p>
                </div>
              </div>
            )}
          </NavLink>
        ))}
        <button
          className="w-full text-center py-4 text-white"
          onClick={handlePageMenu}
        >
          {t("navbar.close")}
        </button>
      </div>
    </div>
  );
};
export default DropDownMenu;
