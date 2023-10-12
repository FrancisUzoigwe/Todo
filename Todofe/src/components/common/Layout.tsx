import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
const Layout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="flex justify-between w-[99%] h-full">
        <div className="max-sm:hidden">
          <div className="w-[80px] h-screen fixed">
            <Sider />
          </div>
        </div>
        <div className="w-[93%] max-sm:w-[100%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
