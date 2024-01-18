import { FaHome } from "react-icons/fa";
import { useAuth } from "../context/AuthProvider";
import { FaUsers } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Home/alumniLogo.png";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} className="w-24 " alt="" />
          </div>
          {user.role === "admin" ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/alumnihome">
                  <FaHome></FaHome>
                  Alumni Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/newsfeed">Add Newsfeed </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-newsfeed">
                  Mange News Feed{" "}
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;