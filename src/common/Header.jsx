import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Home/alumniLogo.png';
import { useAuth } from '../context/AuthProvider';
import Loading from '../components/Loading/Loading';


const Header = () => {
    const {user,loading, logOut}= useAuth();
    const navigate=useNavigate();
    if (loading || user) {
       <Loading />;
    }
    const handleLogout = () => {
      logOut();
      navigate('/')
    };

  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Event</Link></li>
    <li><Link to="/volunteer">Volunteer</Link></li>
    <li><Link to="/">Alumni</Link></li>
    <li><Link to="/">Job</Link></li>
    <li><Link to="/">Communities</Link></li>
    <li><Link to="/">About</Link></li>
    <li><Link to="/give-now">Give Now</Link></li>

  </>
  return (
    <>
      <div className="navbar bg-[#14998a] lg:text-white font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <img src={logo} className="w-[70px] ml-8" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm  ">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
        {user && <li className="text-center flex flex-row items-center mx-2 ">Welcome, {user.username}</li>}
            {
                user ? 
                
                <>
                 <div className="dropdown dropdown-end">
     
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
     
        <div className="w-8 rounded-full border-2 navbar-end">
          
          <img
            alt="Tailwind CSS Navbar component"
            src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
          />   
         </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-28">
        <li>
          <Link to="/profile" className="justify-between">Profile</Link>
        </li>
        <li>
          <Link onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
            </div>
                </>
                 :<Link to="/login" className="btn btn-sm btn-success py-2 mr-12 text-white  ">Login</Link>
            }
      

          
        </div>
      </div>
    </>
  );
};

export default Header;