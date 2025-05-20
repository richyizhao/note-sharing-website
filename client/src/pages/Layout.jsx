import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const Layout = () => {
  // Using navigate hook
  const navigate = useNavigate();

  // Grab the User global state
  const { user, setUser } = useContext(UserContext);

  // handle logout
  const handleLogout = () => {
    if (confirm("Confirm Logout?")) {
      // Reset the User state
      setUser({ email: null, posts: [] });
      // Remove the items from local storage
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      // Navigate to Home page
      navigate("/");
    }
  };
  return (
    <>
      <header className="text-white bg-indigo-500">
        <nav className="flex items-center justify-between max-w-screen-lg p-4 mx-auto">
          <Link 
            title="home" 
            to="/" 
            className="fa-solid fa-house-chimney nav-link"
          ></Link>

          {user.email ? (
            <div className="flex items-center gap-2">
              <Link 
                title="Create Post" 
                to="/create" 
                className="nav-link fa-solid fa-circle-plus"
              ></Link>
              <Link 
                title="Dashboard" 
                to="/dashboard" 
                className="nav-link fa-solid fa-circle-user"
              ></Link>
              <button 
                title="Logout" 
                onClick={ handleLogout } 
                className="nav-link fa-solid fa-right-from-bracket"
              ></button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                title="Login"
                to="/login" 
                className="nav-link fa-solid fa-right-to-bracket"
              ></Link>
              <Link 
                title="Register" 
                to="/register" 
                className="nav-link fa-solid fa-user-plus"
              ></Link>
            </div>
          )}
        </nav>
      </header>

      <main className='p-4'>
        <Outlet/>
      </main>
    </>
  );
};

export default Layout