import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import "./LandingPage.css";
import logo from "../assets/devstart.svg";
import person1 from "../assets/images/profilePic1.jpg";
import person2 from "../assets/images/profilePic2.jpg";
import person3 from "../assets/images/profilePic3.jpg";
import { useState } from "react";

// Icons
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaCode, FaCss3 } from "react-icons/fa";

const technologies = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "GraphQL", icon: <FaCode /> },
  { name: "Tailwind CSS", icon: <FaCss3 /> },
  { name: "Next.js", icon: <FaCode /> },
];

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* Include Navbar */}
      <Navbar />

      <div className="landing-container">
        {/* Logo Image */}
        <img src={logo} alt="DevStart Logo" className="landing-logo" />
        <h1 className="landing-title">Helpoin tie duuniin</h1>
        <p className="landing-subtitle">
          DevStartin tarkoituksena on saada uusia devaajia alan työpaikkoihin
          helposti ja vaivattomasti.
        </p>
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Sijainti, työnimike..." />
          <button>Hae työpaikkoja</button>
        </div>

               {/* Job Seeker & Job Posting Indicator */}
               <div className="job-indicator">
          <div className="job-images">
            <img src={person1} alt="Person 1" className="job-image job-image-1" />
            <img src={person2} alt="Person 2" className="job-image job-image-2" />
            <img src={person3} alt="Person 3" className="job-image job-image-3" />
          </div>
          <div className="job-info">
            <p className="job-seekers">💼 <strong>12,450</strong> työnhakijaa</p>
            <p className="job-postings">🏢 <strong>3,250</strong> työpaikkaa</p>
          </div>
        </div>

         {/* Technology List (Auto-scrolling Carousel) */}
         <div className="technology-carousel">
          <div
            className={`technology-list ${isHovered ? "paused" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {technologies.concat(technologies).map((tech, index) => (
              <span key={index} className="technology-item">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Info Sections */}
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

        {/* Link to Job Listings */}
        <Link to="/jobs" className="jobs-link">
          Selaa työpaikkoja
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
