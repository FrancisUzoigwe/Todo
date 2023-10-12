import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/screen/HomeScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import PrivateRoute from "./PrivateRoute";
import ViewScreen from "../pages/screen/ViewScreen";

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
    path: "/signin",
    element: <SigninScreen />,
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
        path: "/home/view",
        element: <ViewScreen />,
      },
    ],
  },
]);
