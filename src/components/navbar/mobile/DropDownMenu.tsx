//react router dom
import { NavLink, useNavigate } from "react-router-dom";

//react icons
import { IoLocationOutline } from "react-icons/io5";

//導覽列資料
import { menuData } from "../menuData";

//type
interface handleToggleType {
  handleToggle: () => void;
}

const DropDownMenu = ({ handleToggle }: handleToggleType) => {
  const navigate = useNavigate();

  //切換頁面時關閉選單
  const handleLinkClick = (link: string) => {
    handleToggle();
    navigate(link);
  };

  return (
    <div className="fixed w-full h-screen bg-mask bg-opacity-50 left-0 top-0 flex items-start">
      <div className="w-10/12 bg-black mx-auto mt-12">
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
                  <p className="w-full text-center">{item.title}</p>
                </div>
              </div>
            )}
          </NavLink>
        ))}
        <button
          className="w-full text-center py-4 text-white"
          onClick={handleToggle}
        >
          close
        </button>
      </div>
    </div>
  );
};
export default DropDownMenu;
