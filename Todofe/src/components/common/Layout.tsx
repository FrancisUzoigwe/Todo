import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";

const Layout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex justify-between w-[99%]">
        <div className="max-sm:hidden">
          <Sider />
        </div>
        <div className="w-[93%] max-sm:w-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
