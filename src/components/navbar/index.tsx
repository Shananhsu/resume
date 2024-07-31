//components
import Mobile from "./Mobile"; //手機版
import Desktop from "./Desktop"; //電腦版

const Navbar = () => {
  return (
    <header className="bg-neutral-800 text-white">
      <Mobile />
      <Desktop />
    </header>
  );
};
export default Navbar;
