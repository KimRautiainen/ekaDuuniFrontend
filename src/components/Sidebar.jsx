import "./Sidebar.css";
import { FaUserEdit } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { BiLock, BiHelpCircle } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div className="sidebar">
      <nav>
        <SidebarItem icon={<FaUserEdit />} text="Muokkaa profiilia" isOpen={isOpen} />
        <SidebarItem icon={<BiLock />} text="Yksityisyys" isOpen={isOpen} />
        <SidebarItem icon={<BiHelpCircle />} text="Ohje ja tuki" isOpen={isOpen} />
        <SidebarItem icon={<IoMdLogOut />} text="Kirjaudu ulos" isOpen={isOpen} isLogout />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen, isLogout }) => (
  <div className={`sidebar-item ${isLogout ? "logout" : ""}`}>
    <span className="icon">{icon}</span>
    {isOpen && <span className="sidebar-text">{text}</span>}
  </div>
);

export default Sidebar;
