import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { MdTune } from "react-icons/md"; // ⬅️ Right side icon

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="search-bar-input"
          placeholder="Työnimike, yritys tai sijainti"
        />
        <button className="search-bar-button" onClick={onSearch}>
          Etsi työpaikkoja
        </button>
      </div>

      {/* Right-side icon */}
      <div className="filter-icon-container">
        <MdTune className="filter-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
