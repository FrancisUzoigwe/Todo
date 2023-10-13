import { createBrowserRouter } from "react-router-dom";
import RegisterScreen from "../pages/auth/RegisterScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import PrivateRoute from "./PrivateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <RegisterScreen />,
  },
]);
