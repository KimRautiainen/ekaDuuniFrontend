import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from ("../store/AuthContext");

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>DevConnect</NavLink>
      </div>
      <div>
        <NavLink to="/jobs" className={({ isActive }) => isActive ? "underline mr-4" : "mr-4"}>Jobs</NavLink>
        {user ? (
          <>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "underline mr-4" : "mr-4"}>Dashboard</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "underline mr-4" : "mr-4"}>Profile</NavLink>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? "underline" : ""}>Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
