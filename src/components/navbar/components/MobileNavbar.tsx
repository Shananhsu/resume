//react icons
import { IoMenu, IoEarthOutline } from "react-icons/io5";

//type
import { mobileNavbarProps } from "../type";

const MobileNavbar = ({
  handlePageMenu,
  handleLangMenu,
}: mobileNavbarProps) => {
  return (
    <div className="flex items-center w-1/3 justify-end lg:hidden">
      <button className="mr-4" onClick={handleLangMenu}>
        <IoEarthOutline />
      </button>
      <button onClick={handlePageMenu}>
        <IoMenu />
      </button>
    </div>
  );
};
export default MobileNavbar;
