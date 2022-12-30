import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("@views/Dashboard"));
const Permission = lazy(() => import("@views/Permission"));
const Register = lazy(() => import("@views/Auth/Register"));
const Login = lazy(() => import("@views/Auth/Login"));

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
    path: "permission",
    element: <Permission />,
  },
  {
    path: "/",
    element: "Welcome",
  },
]);

export default Router;
