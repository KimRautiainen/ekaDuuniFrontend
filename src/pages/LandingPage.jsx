import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import "./LandingPage.css";
import logo from "../assets/devstart.svg";

import person1 from "../assets/images/profilePic1.jpg";
import person2 from "../assets/images/profilePic2.jpg";
import person3 from "../assets/images/profilePic3.jpg";
import elisaLogo from "../assets/images/elisa-logo.jpg";
import metropoliaLogo from "../assets/images/metropolia-logo.png";
import { useState, useEffect } from "react";

// Dummy job data
const jobListings = [
  { id: 1, title: "Java-kehittäjä", company: "Metropolia", location: "Helsinki", date: "Julkaistu 5.2.", salary: "€", tags: ["JAVA", "JS"], logo: elisaLogo},
  { id: 2, title: "Frontend Developer", company: "Elisa", location: "Helsinki", date: "Julkaistu 6.2.", salary: "€", tags: ["React", "CSS"], logo: metropoliaLogo },
  { id: 3, title: "Full Stack Developer", company: "Futurice", location: "Tampere", date: "Julkaistu 8.2.", salary: "€", tags: ["Node.js", "MongoDB"] },
];

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [jobs, setJobs] = useState(jobListings);

  useEffect(() => {
    fetch("/api/jobs") // Vaihda API:n osoite oikeaksi
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Virhe haettaessa työpaikkoja:", err));
  }, []);

  return (
    <>
      {/* 🔹 Navbar-komponentti */}
      <Navbar />

      <div className="landing-container">
        {/* 🔹 Logo ja otsikko */}
        <img src={logo} alt="DevStart Logo" className="landing-logo" />
        <h1 className="landing-title">Helpoin tie duuniin</h1>
        <p className="landing-subtitle">
          DevStartin tarkoituksena on saada uusia devaajia alan työpaikkoihin helposti ja vaivattomasti.
        </p>

        {/* 🔹 Hakukenttä */}
        <div className="search-bar">
          <input type="text" placeholder="Sijainti, työnimike..." />
          <button>Hae työpaikkoja</button>
        </div>

        {/* 🔹 Työnhakijoiden ja työpaikkojen määrä */}
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

        {/* 🔹 Työpaikkojen karuselli */}
        <div className="job-carousel">
          <div
            className={`job-list ${isHovered ? "paused" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {jobs.concat(jobs).map((job, index) => (
              <div key={index} className="job-item">
                <img src={job.logo} alt={job.company} className="job-logo" />
                <div className="job-info">
                  <strong>{job.title}</strong> - {job.company}, {job.location}
                  <p>{job.date}</p>
                  <div className="job-tags">
                    {job.tags && job.tags.map((tag, idx) => (
                      <span key={idx} className="job-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Info-osiot */}
        <div className="info-section">
          <h2>Löydä unelmiesi työpaikka</h2>
          <p>
            DevStart yhdistää junior-kehittäjät ja työnantajat. Luo profiili, selaa työpaikkoja ja hae helposti!
          </p>
        </div>

        <div className="info-section">
          <h2>Näytä taitosi</h2>
          <p>Lisää projektejasi ja kokemustasi, jotta työnantajat voivat nähdä potentiaalisi.</p>
        </div>

        {/* 🔹 Linkki työpaikkoihin */}
        <Link to="/jobs" className="jobs-link">
          Selaa työpaikkoja
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
