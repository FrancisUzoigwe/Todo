import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/screen/HomeScreen";
import SigninScreen from "../pages/auth/SigninScreen";

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
    element: <LandingScreen />,
  },
  {
    path: "/signin",
    element: <SigninScreen />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
