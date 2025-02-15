import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import "./LandingPage.css";
import logo from "../assets/devstart.svg"; // Import Logo

const technologies = [
  "JavaScript", "React", "Node.js", "Python", "SQL", 
  "Docker", "TypeScript", "GraphQL", "Tailwind CSS", "Next.js"
];

const LandingPage = () => {
  return (
    <>
      {/* Include Navbar */}
      <Navbar />
      
      <div className="landing-container">
        {/* Logo Image */}
        <img src={logo} alt="DevStart Logo" className="landing-logo" />

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Etsi työpaikkoja..." />
          <button>Hae työpaikkoja</button>
        </div>

        {/* Technology List (Static) */}
        <div className="technology-carousel">
          <span className="text-gray-400">Tutustu teknologioihin:</span>
          <div className="technology-list">
            {technologies.map((tech, index) => (
              <span key={index} className="technology-item">{tech}</span>
            ))}
          </div>
        </div>

        {/* Info Sections */}
        <div className="info-section">
          <h2>Löydä unelmiesi työpaikka</h2>
          <p>DevStart yhdistää junior-kehittäjät ja työnantajat. Luo profiili, selaa työpaikkoja ja hae helposti!</p>
        </div>

        <div className="info-section">
          <h2>Näytä taitosi</h2>
          <p>Lisää projektejasi ja kokemustasi, jotta työnantajat voivat nähdä potentiaalisi.</p>
        </div>

        {/* Link to Job Listings */}
        <Link to="/jobs" className="jobs-link">Selaa työpaikkoja</Link>
      </div>
    </>
  );
};

export default LandingPage;
