//react router dom
import { Link } from "react-router-dom";

//導覽列資料
import { menuData } from "./data";

//type
interface handleToggleType {
  handleToggle: () => void;
}

const DropDownMenu = ({ handleToggle }: handleToggleType) => {
  return (
    <div className="fixed w-full h-screen bg-mask bg-opacity-50 left-0 top-0 flex items-start">
      <div className="w-10/12 bg-black mx-auto mt-12">
        {menuData.map((item) => (
          <div key={item.id}>
            <Link to={item.link} className="block py-4 text-white text-center">
              {item.title}
            </Link>
          </div>
        ))}
        <button className="w-full text-center py-4" onClick={handleToggle}>
          close
        </button>
      </div>
    </div>
  );
};
export default DropDownMenu;
