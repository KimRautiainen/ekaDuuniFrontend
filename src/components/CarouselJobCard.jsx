import React from "react";
import PropTypes from "prop-types";
import "./CarouselJobCard.css";
import { FaMapMarkerAlt, FaEuroSign } from "react-icons/fa";

const CarouselJobCard = ({ job, onClick }) => {
  const { title, company, location, logo, min_salary, Skills, createdAt } = job;

  // Format the date (e.g., "Announced 5.2")
  const formattedDate = new Date(createdAt).toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "numeric",
  });

  // Determine displayed skills
  const displayedSkills = Skills
    ? Skills.length > 2
      ? [Skills[0].name, `+${Skills.length - 1}`]
      : Skills.map((s) => s.name)
    : [];

  return (
    <div className="Carousel-job-card" onClick={onClick}>
      {/* Left - Job Image */}
      <div className="Carousel-job-card-logo-container">
        <img src={logo} alt={company} className="Carousel-job-card-logo" />
      </div>

      {/* Right - Job Details */}
      <div className="Carousel-job-card-content">
        {/* Title, Salary Icon & Tags */}
        <div className="Carousel-job-card-header">
          <span className="Carousel-job-card-title">{title}</span>

          {min_salary && (
            <div className="Carousel-job-card-salary">
              <FaEuroSign className="Carousel-job-card-salary-icon" />
            </div>
          )}

          <div className="Carousel-job-card-tags">
            {displayedSkills.map((skill, idx) => (
              <span key={idx} className="Carousel-job-card-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Company Name */}
        <span className="Carousel-job-card-subtitle">{company}</span>

        {/* Location & Announcement Date */}
        <div className="Carousel-job-card-bottom">
          <div className="Carousel-job-card-location">
            <FaMapMarkerAlt className="Carousel-job-card-location-icon" />
            <span>{location}</span>
          </div>
          <span className="Carousel-job-card-date">Announced {formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

CarouselJobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    logo: PropTypes.string,
    min_salary: PropTypes.number,
    Skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarouselJobCard;
