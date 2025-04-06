import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar2.css";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import defaultAvatar from "../assets/images/avatar.png";

const Navbar2 = () => {
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
    <nav className="navbar2">
      <div className="nav-left">
        <Link to="/" className="logo">
          &lt;DevStart<span className="highlight">/</span>&gt;
        </Link>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><NavLink to="/jobs">Työpaikat</NavLink></li>
          <li><a href="#">Työnhakijalle</a></li>
          <li><NavLink to="/jobadcreating">Työnantajille</NavLink></li>
          <li><a href="#">Suosikit</a></li>
          <li><a href="#">Kesätyöt 2025</a></li>
        </ul>
      </div>

      <div className="nav-right">
        {searchOpen && (
          <input
            type="text"
            className="search-input"
            placeholder="Hae..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        <FaSearch className="icon" onClick={() => setSearchOpen(!searchOpen)} />
        <FaBell className="icon" />

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
            <NavLink to="/login" className="navbar-small-box">Kirjaudu</NavLink>
          </>
        )}

        <FaBars className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
};

export default Navbar2;
