import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import Dashboard from "../components/Pages/dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

export default router;