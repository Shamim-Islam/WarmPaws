import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import register from "../pages/register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: '/services',
        Component: Services
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: register
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
