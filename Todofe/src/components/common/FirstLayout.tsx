import { Outlet } from "react-router-dom";
import FirstHeader from "../static/FirstHeader";

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader />
      <Outlet />
    </div>
  );
};

export default FirstLayout;
