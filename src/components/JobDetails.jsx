import "../styles/JobDetails.css";
import {
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaRegBookmark,
} from "react-icons/fa";

const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      {/* Poster image */}
      <div className="poster-image-container">
        <img src={job.poster_image} alt={job.company} className="poster-image" />
      </div>

      {/* Logo + title section */}
      <div className="job-header">
        <img src={job.logo} alt={job.company} className="job-logo" />

        <div className="job-info">
          <h2 className="job-title">{job.title}</h2>

          <div className="job-meta">
            <span className="company-name">
              {job.company}
              <FaExternalLinkAlt className="company-icon" />
            </span>
            <span className="location">
              <FaMapMarkerAlt className="location-icon" />
              {job.location}
            </span>
            <span className="announcement-date">
              {job.date}
              <FaRegBookmark className="bookmark-icon" />
            </span>
          </div>
        </div>

        <button className="apply-button header-apply-button">
          Hae työpaikkaa
        </button>
      </div>

      {/* Description */}
      <div className="job-description-section">
        <h3 className="section-title">Työnkuvaus</h3>
        <div
          className="job-description"
          dangerouslySetInnerHTML={{ __html: job.job_description }}
        />

        <div className="job-tags-container">
          {job?.Skills?.map((skill, index) => (
            <span key={index} className="job-tag">
              {skill.name}
            </span>
          ))}
        </div>

        <button className="apply-button">Hae työpaikkaa</button>
      </div>
    </div>
  );
};

export default JobDetails;
