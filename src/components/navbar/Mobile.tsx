//react icons
import { IoHomeSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

//hooks
import useToggle from "../../hooks/useToggle.ts";
import DropDownMenu from "./DropDownMenu.tsx";

const Mobile = () => {
  const { toggle: menu, handleToggle: handleMenu } = useToggle();

  return (
    <nav className="h-12 flex items-center justify-between lg:hidden px-2 text-xl">
      <button>
        <IoHomeSharp />
      </button>
      <h1>Shananhsu</h1>
      <button onClick={handleMenu}>
        <IoMenu />
      </button>
      {menu && <DropDownMenu handleToggle={handleMenu} />}
    </nav>
  );
};
export default Mobile;
