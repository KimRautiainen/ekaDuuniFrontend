import { useState, useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { FaSearch, FaBars } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";
import "./Navbar3.css";
import defaultAvatar from "../assets/images/profilepic.png";

const Navbar3 = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <nav className="navbar3-navbar">
      <div className="navbar3-left">
        <Link to="/" className="navbar3-logo">
          &lt;DevStart<span className="navbar3-highlight">/</span>&gt;
        </Link>

        <ul className={`navbar3-nav-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/jobs">Työpaikat</NavLink></li>
          <li><a href="#">Työnhakijalle</a></li>
          <li><NavLink to="/jobadcreating">Työnantajille</NavLink></li>
          <li><a href="#">Suosikit</a></li>
          <li><a href="#">Kesätyöt 2025</a></li>
        </ul>
      </div>

      <div className="navbar3-nav-right">
        {searchOpen && (
          <input
            type="text"
            className="navbar3-search-input"
            placeholder="Hae..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        <FaSearch className="navbar3-icon" onClick={() => setSearchOpen(!searchOpen)} />

        {user ? (
          <div className="navbar3-profile-dropdown" ref={dropdownRef}>
            <img
              src={defaultAvatar}
              alt="Profile"
              className="navbar3-user-img"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="navbar3-dropdown-menu">
                <NavLink to="/profile" className="navbar3-dropdown-item">
                  <FiUser className="navbar3-dropdown-icon" /> Profiili
                </NavLink>
                <button onClick={logout} className="navbar3-dropdown-item navbar3-logout">
                  <FiLogOut className="navbar3-dropdown-icon" /> Kirjaudu ulos
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login" className="navbar3-small-box">
            Kirjaudu
          </NavLink>
        )}

        <FaBars className="navbar3-menu-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
};

export default Navbar3;
