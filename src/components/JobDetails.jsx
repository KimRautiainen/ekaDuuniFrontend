import "../styles/JobDetails.css";

const JobDetails = ({ job }) => {
    if (!job) {
        return <div className="job-details">Valitse työpaikka nähdäksesi lisätiedot</div>;
    }

    return (
        <div className="job-details-card">
            <div className="job-header">
                <img src={job.logo} alt={`${job.company} logo`} className="job-details-logo" />
                <h2>{job.title}</h2>
            </div>

            <p className="job-company">{job.company} - 📍 {job.location}</p>
            <p className="job-date">📅 {job.date}</p>
            <p className="job-description">{job.description}</p>

            <div className="job-tags">
                {job.tags.map((tag, index) => (
                    <span key={index} className="job-tag">{tag}</span>
                ))}
            </div>

            <button className="apply-button">Hae työpaikkaa</button>
        </div>
    );
};

export default JobDetails;
