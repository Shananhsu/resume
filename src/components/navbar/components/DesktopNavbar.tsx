//react router dom
import { NavLink } from "react-router-dom";

//i18n
import { useTranslation } from "react-i18next";

//react icons
import { IoLocationOutline, IoEarthOutline } from "react-icons/io5";

//靜態資料
import { menuData } from "../data/menuData.ts"; //導覽列選項
import { languageData } from "../data/languageData.ts"; //語言選項

const DesktopNavbar = () => {
  //i18n
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="lg:flex items-center w-10/12 text-sm hidden justify-between">
      <div className="flex">
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
      <div className="w-2/12 flex justify-end items-center">
        <div className="flex items-center border px-2 py-1 rounded border-gray-400 text-gray-400 bg-neutral-800 hover:border-green-400  hover:text-green-400 cursor-pointer">
          <IoEarthOutline />
          <select
            className="bg-neutral-800 outline-none mx-2 cursor-pointer"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            {languageData.map((item) => (
              <option key={item.id} value={item.lang}>
                {t(item.title)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default DesktopNavbar;
