//react router dom
import { Outlet } from "react-router-dom";

//components
import Navbar from "./navbar"; //導覽列

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
