import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* DevStart Button (No Background) */}
      <button className="navbar-logo">&lt;DevStart/&gt;</button>

      {/* Center Box with Links */}
      <div className="navbar-center-box">
        <NavLink to="/" className="navbar-link">Etusivu</NavLink>
        <NavLink to="/jobadcreating" className="navbar-link">Tietoa meistä</NavLink>
        <NavLink to="/services" className="navbar-link">Jotain muuta</NavLink>
        <NavLink to="/contact" className="navbar-link">Jotain muuta</NavLink>
      </div>

      {/* Right-Side Buttons */}
      <div className="navbar-buttons">
        <NavLink to="/register" className="navbar-small-box">Luo käyttäjä</NavLink>
        <NavLink to="/login" className="navbar-small-box">Kirjaudu</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
