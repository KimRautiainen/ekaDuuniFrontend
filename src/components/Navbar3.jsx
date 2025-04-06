import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { AiOutlineBell } from "react-icons/ai";
import { FiLogOut, FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import "./Navbar3.css";
import defaultAvatar from "../assets/images/avatar.png";

const Navbar3 = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar3">
      <Link to="/" className="logo">
        &lt;DevStart<span className="highlight">/</span>&gt;
      </Link>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/jobs">Työpaikat</NavLink>
        </li>
        <li>
          <NavLink to="/jobadcreating">Työnantajille</NavLink>
        </li>
        <li>
          <NavLink to="/editprofile">Profiili</NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <AiOutlineBell className="icon" />

        {user ? (
          <div className="profile-dropdown" ref={dropdownRef}>
            <img
              src={defaultAvatar}
              alt="Profile"
              className="user-img"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/profile" className="dropdown-item">
                  <FiUser className="dropdown-icon" /> Profiili
                </NavLink>
                <button onClick={logout} className="dropdown-item logout">
                  <FiLogOut className="dropdown-icon" /> Kirjaudu ulos
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="navbar-small-box">
              Kirjaudu
            </NavLink>
          </>
        )}

        <FaBars
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar3;
