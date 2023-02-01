import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("@views/Dashboard"));
const Register = lazy(() => import("@views/Auth/Register"));
const Login = lazy(() => import("@views/Auth/Login"));
const Ingridient = lazy(() => import("@views/Ingridient"));

const Router = createBrowserRouter([
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "ingridients",
    element: <Ingridient />,
  },
  {
    path: "/",
    element: "Welcome",
  },
]);

export default Router;
