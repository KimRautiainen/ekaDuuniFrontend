import "../styles/JobDetails.css";
import {
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaRegBookmark,
} from "react-icons/fa";

const JobDetails = ({ job }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("fi-FI");
  };

  return (
    <div className="jdp-container">
      {/* Poster image */}
      <div className="jdp-poster-image-container">
        <img src={job.poster_image} alt={job.company} className="jdp-poster-image" />
      </div>

      {/* Logo + title section */}
      <div className="jdp-header">
        <img src={job.logo} alt={job.company} className="jdp-logo" />

        <div className="jdp-info">
          <h2 className="jdp-title">{job.title}</h2>

          <div className="jdp-meta">
            <span className="jdp-company-name">
              {job.company}
              <FaExternalLinkAlt className="jdp-company-icon" />
            </span>

            <div className="jdp-location-dates">
              <FaMapMarkerAlt className="jdp-location-icon" />
              {job.location}
              <FaRegBookmark className="jdp-bookmark-icon" />
              {job.start_date && job.end_date && (
                <div className="jdp-date-range">
                  {" Julkaistu "}
                  {formatDate(job.start_date)}
                  {" - Päättyy "}
                  {formatDate(job.end_date)}
                </div>
              )}
            </div>

            <span className="jdp-announcement-date">{formatDate(job.date)}</span>
          </div>
        </div>

        <button className="jdp-header-apply-button">
          Hae työpaikkaa
        </button>
      </div>

      {/* Description */}
      <div className="jdp-description-section">
        <h3 className="jdp-section-title">Työpaikkakuvaus</h3>
        <br />
        <div
          className="jdp-description"
          dangerouslySetInnerHTML={{ __html: job.job_description }}
        />

        <div className="jdp-tags-container">
          {job?.Skills?.map((skill, index) => (
            <span key={index} className="jdp-tag">
              {skill.name}
            </span>
          ))}
        </div>

        <button className="jdp-apply-button-bottom">Hae työpaikkaa</button>
      </div>
    </div>
  );
};

export default JobDetails;
