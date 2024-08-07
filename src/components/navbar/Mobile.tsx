//react icons
import { IoHomeSharp, IoMenu, IoEarthOutline } from "react-icons/io5";

//react router dom
import { NavLink } from "react-router-dom";

//components
import DropDownMenu from "./mobile/DropDownMenu.tsx";

//hooks
import useToggle from "../../hooks/useToggle.ts";

const Mobile = () => {
  const { toggle: menu, handleToggle: handleMenu } = useToggle();

  return (
    <nav className="h-12 flex items-center justify-between lg:hidden px-2 text-xl">
      <NavLink to={"/"} className="w-1/3">
        <IoHomeSharp />
      </NavLink>
      <h1 className="w-1/3 text-center">Shananhsu</h1>
      <div className="flex items-center w-1/3 justify-end">
        <button className="mr-4">
          <IoEarthOutline />
        </button>
        <button onClick={handleMenu}>
          <IoMenu />
        </button>
      </div>
      {menu && <DropDownMenu handleToggle={handleMenu} />}
    </nav>
  );
};
export default Mobile;
