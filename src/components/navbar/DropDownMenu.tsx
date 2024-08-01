//react router dom
import { NavLink, useNavigate } from "react-router-dom";

//導覽列資料
import { menuData } from "./data";

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
          <div key={item.id} className="w-full text-center">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-gray-400"}`
              }
              onClick={() => handleLinkClick(item.link)}
            >
              <p className="py-4">{item.title}</p>
            </NavLink>
          </div>
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
