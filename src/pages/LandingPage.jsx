import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import JobCarousel from "../components/JobCarousel"; // Import the Job Carousel
import "./LandingPage.css";
import logo from "../assets/devstart.svg";
import info1 from "../assets/icons/portfolio.svg";
import info2 from "../assets/icons/filter.svg";
import info3 from "../assets/icons/speed-email.svg";

import person1 from "../assets/images/profilePic1.jpg";
import person2 from "../assets/images/profilePic2.jpg";
import person3 from "../assets/images/profilePic3.jpg";
import downPic from "../assets/images/downPic.png";
import manpc from "../assets/images/manpc.png";

const LandingPage = () => {
  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar />

      {/* 🔹 Background Image */}
     
      <div className="landing-man-container">
        <div className="landing-man-circle"></div>
        <img src={manpc} alt="manpc" className="manpc" />
      </div>

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

        {/* 🔹 Info Container */}
        <div className="info-container">
          <h2>Onko ensimmäisen IT-työpaikan saaminen vaikeaa?</h2>
          <p>Me tiedämme – siksi rakensimme tämän sivuston.</p>

          <div className="info-trio">
            <div className="info-item">
              <div className="image-container">
                <div className="info-ball"></div>
                <img src={info1} alt="Portfolio-pohjainen työnhaku" />
              </div>
              <h3>Portfolio-pohjainen työnhaku</h3>
              <p>Korosta taitojasi, älä vain avosalkkuasi.</p>
            </div>

            <div className="info-item">
              <div className="image-container">
                <div className="info-ball"></div>
                <img src={info2} alt="Laaja sovellus" />
              </div>
              <h3>Laaja sovellus</h3>
              <p>
                Unohda loputon scrolli – suodata työpaikkoja ohjelmointikielen,
                tason tai teknologian mukaan.
              </p>
            </div>

            <div className="info-item">
              <div className="image-container">
                <div className="info-ball"></div>
                <img src={info3} alt="Nopea työnhaku" />
              </div>
              <h3>Nopea työnhaku</h3>
              <p>Löydät työpaikat nopeammin ja vältät hakurosvat.</p>
            </div>
          </div>
        </div>

        {/* 🔹 Footer Container*/}
        <div className="footer-container">
          <div className="footers-section">
            <img src={downPic} alt="footerPic" className="footerPic" />
            <div className="footer-text">
              <h2>Ensivaikutelma on tärkeä</h2>
              <div className="testimonial">
                <p>
                  Työnhaussa ensimmäiset sekunnit ratkaisevat. Siksi panostamme
                  visuaaliseen ja selkeään työnhakuun, jossa osaamisesi ja
                  vahvuutesi tulevat heti esille. Rekrytoijat selaavat hakijoita
                  nopeasti – varmista, että jäät mieleen. Hyvin rakennettu
                  profiili ja vahva portfolio tekevät ensivaikutelmasta
                  vakuuttavan.
                </p>
              </div>
            </div>
          </div>
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
