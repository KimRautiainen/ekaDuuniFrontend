import { useState, useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { AiOutlineBell } from "react-icons/ai"; // Notification icon
import { FiLogOut, FiUser } from "react-icons/fi"; // User and Logout icons
import "./Navbar.css";
import defaultAvatar from "../assets/images/avatar.png"; // Default avatar

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* DevStart Button */}
      <button className="navbar-logo">&lt;DevStart/&gt;</button>

      {/* Center Box with Links */}
      <div className="navbar-center-box">
        <NavLink to="/" className="navbar-link">Etusivu</NavLink>
        <NavLink to="/about" className="navbar-link">Tietoa meistä</NavLink>
        <NavLink to="/services" className="navbar-link">Jotain muuta</NavLink>
        <NavLink to="/contact" className="navbar-link">Jotain muuta</NavLink>
      </div>

      {/* Right-Side Section */}
      <div className="navbar-right">
        {user ? (
          <>
            {/* Notification Icon */}
            <div className="notifications-icon">
              <AiOutlineBell className="nav-icon" />
            </div>

            {/* Profile Picture Dropdown */}
            <div className="profile-dropdown" ref={dropdownRef}>
              <button className="profile-picture" onClick={toggleDropdown}>
              <img src={defaultAvatar} alt="Profile" />

              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/profile" className="dropdown-item">
                    <FiUser className="dropdown-icon" /> Profile
                  </NavLink>
                  <button onClick={logout} className="dropdown-item logout">
                    <FiLogOut className="dropdown-icon" /> Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="navbar-buttons">
            <NavLink to="/register" className="navbar-small-box">Luo käyttäjä</NavLink>
            <NavLink to="/login" className="navbar-small-box">Kirjaudu</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
