import { Navigate } from "react-router-dom";
import useUser from "../global/globalFile";
import { PropsWithChildren } from "react";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useUser();
  console.log(setState);
  return <div>{state ? <div>{children}</div> : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
