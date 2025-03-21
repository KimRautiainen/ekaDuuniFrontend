import React, { useState } from "react";
import "./Navbar2.css";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar2">
      <div className="nav-left">
        <div className="logo">&lt;DevStart<span className="highlight">/</span>&gt;</div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#">Työpaikat</a></li>
          <li><a href="#">Työnhakijalle</a></li>
          <li><a href="#">Työnantajille</a></li>
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
        <img src="src/assets/images/profilepic.png" alt="User" className="user-img" />
        <FaBars className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
};

export default Navbar2;
