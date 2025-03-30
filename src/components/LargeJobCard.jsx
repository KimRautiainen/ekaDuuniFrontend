import React from "react";
import PropTypes from "prop-types";
import "./LargeJobCard.css";
import { FaMapMarkerAlt, FaEuroSign } from "react-icons/fa";

const LargeJobCard = ({
  logo,
  title,
  company,
  location,
  createdAt,
  job_description,
  Skills,
  onClick,
}) => {
  return (
    <div className="large-job-card" onClick={onClick}>
      <div className="large-job-card-logo-container">
        <img
          src={logo}
          alt={`${company} logo`}
          className="large-job-card-logo"
        />
      </div>

      <div className="large-job-card-content">
        <div className="large-job-card-header">
          <span className="large-job-card-title">{title}</span>
          <div className="large-job-card-salary">
            <FaEuroSign className="large-job-card-salary-icon" />
          </div>

          <div className="large-job-card-tags">
            {Skills?.map((skill, idx) => (
              <span key={idx} className="large-job-card-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <span className="large-job-card-subtitle">{company}</span>

        <div className="large-job-card-bottom">
          <div className="large-job-card-location">
            <FaMapMarkerAlt className="large-job-card-location-icon" />
            <span>{location}</span>
          </div>
          <span className="large-job-card-date">
            {new Date(createdAt).toLocaleDateString("fi-FI", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div
          className="large-job-card-description"
          dangerouslySetInnerHTML={{ __html: job_description }}
        />
      </div>
    </div>
  );
};

LargeJobCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  job_description: PropTypes.string.isRequired,
  Skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default LargeJobCard;
