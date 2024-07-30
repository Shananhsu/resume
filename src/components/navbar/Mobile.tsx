//react icons
import { IoHomeSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Mobile = () => {
  return (
    <nav className="h-12 flex items-center justify-between">
      <button className="ml-2 text-xl">
        <IoHomeSharp />
      </button>
      <h1>Shananhsu</h1>
      <button className="mr-2 text-xl">
        <IoMenu />
      </button>
    </nav>
  );
};
export default Mobile;
