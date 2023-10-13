import { createBrowserRouter } from "react-router-dom";
import LandingScreen from "../pages/auth/LandingScreen";
import FirstLayout from "../components/common/FirstLayout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import ViewScreen from "../pages/home/ViewScreen";
import PrivateRoute from "./PrivateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
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
      {
        // index: true,
      },
    ],
  },
]);
