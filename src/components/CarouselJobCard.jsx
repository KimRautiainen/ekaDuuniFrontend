import React from "react";
import PropTypes from "prop-types";
import "./CarouselJobCard.css";

const CarouselJobCard = ({ job }) => {
  return (
    <div className="Carousel-job-card">
      <img
        src={job.logo}
        alt={job.company}
        className="Carousel-job-card-logo"
      />
      <div className="Carousel-job-card-info">
        <strong>{job.title}</strong> - {job.company}, {job.location}
        <p>{job.date}</p>
        <div className="Carousel-job-card-tags">
          {job.tags &&
            job.tags.map((tag, idx) => (
              <span key={idx} className="Carousel-job-card-tag">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

CarouselJobCard.propTypes = {
  job: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CarouselJobCard;
