import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import JobCarousel from "../components/JobCarousel"; // Import the Job Carousel
import "./LandingPage.css";
import logo from "../assets/devstart.svg";

import person1 from "../assets/images/profilePic1.jpg";
import person2 from "../assets/images/profilePic2.jpg";
import person3 from "../assets/images/profilePic3.jpg";

const LandingPage = () => {
  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar />

      <div className="landing-container">
        {/* 🔹 Logo and Title */}
        <img src={logo} alt="DevStart Logo" className="landing-logo" />
        <h1 className="landing-title">Helpoin tie duuniin</h1>
        <p className="landing-subtitle">
          DevStartin tarkoituksena on saada uusia devaajia alan työpaikkoihin
          helposti ja vaivattomasti.
        </p>

        {/* 🔹 Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Sijainti, työnimike..." />
          <button>Hae työpaikkoja</button>
        </div>

        {/* 🔹 Job Seeker & Job Posting Indicator */}
        <div className="job-indicator">
          <div className="job-images">
            <img
              src={person1}
              alt="Person 1"
              className="job-image job-image-1"
            />
            <img
              src={person2}
              alt="Person 2"
              className="job-image job-image-2"
            />
            <img
              src={person3}
              alt="Person 3"
              className="job-image job-image-3"
            />
          </div>
          <div className="job-info">
            <p className="job-seekers">
              💼 <strong>12,450</strong> työnhakijaa
            </p>
            <p className="job-postings">
              🏢 <strong>3,250</strong> työpaikkaa
            </p>
          </div>
        </div>

        {/* 🔹 Job Carousel Component */}
        <JobCarousel />

        {/* 🔹 Info Sections */}
        <div className="info-section">
          <h2>Löydä unelmiesi työpaikka</h2>
          <p>
            DevStart yhdistää junior-kehittäjät ja työnantajat. Luo profiili,
            selaa työpaikkoja ja hae helposti!
          </p>
        </div>

        <div className="info-section">
          <h2>Näytä taitosi</h2>
          <p>
            Lisää projektejasi ja kokemustasi, jotta työnantajat voivat nähdä
            potentiaalisi.
          </p>
        </div>

        {/* 🔹 Browse Jobs Link */}
        <Link to="/jobs" className="jobs-link">
          Selaa työpaikkoja
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
