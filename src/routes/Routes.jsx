import { createBrowserRouter } from "react-router-dom";
import OpenLayOut from "../layout/OpenLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenLayOut></OpenLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  // {
  //   path:"dashboard",
  //   element:<Dashboard></Dashboard>,
  //   children:[
  //     {
  //       path:"feedback",
  //       element:<Feedback></Feedback>
  //     },
  //     {
  //       path:"users",
  //       element:<AllUsers></AllUsers>
  //     },

  // ]

  // }
]);
