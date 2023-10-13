import React, { PropsWithChildren } from "react";
import useUser from "../global/globalFile";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [state] = useUser();
  return (
    <div>{state ? <div>{children}</div> : <Navigate to="/register" />}</div>
  );
};

export default PrivateRoute;
