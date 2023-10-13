import FirstHeader from "../static/FirstHeader";
import { Outlet } from "react-router-dom";

const FirstLayout = () => {
  return (
    <div>
      <FirstHeader />
      <Outlet />
    </div>
  );
};

export default FirstLayout;
