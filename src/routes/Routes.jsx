import { createBrowserRouter } from "react-router-dom";
import OpenLayOut from "../layout/OpenLayOut";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/Signup/Signup";
import AlumniDirectory from "../pages/AlumniDirectory/AlumniDirectory";
import AddProfile from "../pages/AlumniDirectory/AddProfile";
import Dashboard from "../layout/Dashboard";
import AddNewsFeed from "../pages/Dashboard/Alumni/AddNewsFeed/AddNewsFeed";
import AlumniHome from "../pages/Dashboard/Alumni/AlumniHome/AlumniHome";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Announcement from "../pages/Dashboard/Alumni/AddNewsFeed/Announcement";
import AddAnnoucement from "../pages/Dashboard/Admin/Announcements/AddAnnouncement";
import Library from "../pages/Library/Library";
import ManageResources from "../pages/Dashboard/Admin/Library/ManageResources";
import Chat from "../pages/Chat/Chat";


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
      {
        path: "/alumni-directory",
        element: <AlumniDirectory></AlumniDirectory>,
      },
      {
        path: "/alumni-directory/addprofile",
        element: <AddProfile></AddProfile>,
      },
      {
        path: "/news-feed",
        element: <NewsFeed></NewsFeed>,
      },
      {
        path: "/library",
        element: <Library></Library>,
      },
      {
        path: "/chats",
        element: <Chat></Chat>,
      },
    ],
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[

        {
            path:'alumnihome',
            element:<AlumniHome></AlumniHome>
        },
        {
            path:'newsfeed',
            element:<AddNewsFeed/>
        },
        {
            path:'announcement',
            element:<Announcement/>
        },
        {
            path:'add-announcement',
            element:<AddAnnoucement/>
        },
        {
            path:'resources',
            element:<ManageResources/>
        },
        
       
    

  ]

  }
]);
