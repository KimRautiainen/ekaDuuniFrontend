import "../styles/JobCard.css"

const JobCard = ({ logo, title, company, location, date, description, tags, onClick }) => {
    return (
        <div className="job-card" onClick={onClick}>
            {/* Logo */}
            <img src={logo} alt={`${company} logo`} className="job-logo" />

            {/* Työpaikan tiedot */}
            <div className="job-info">
                {/* Otsikko ja yrityksen nimi */}
                <div className="job-header">
                    <h3 className="job-title">{title}</h3>
                    <p className="job-company">{company}</p>
                </div>

                {/* Sijainti ja julkaisupäivä */}
                <div className="job-meta">
                    <p className="job-location">📍 {location}</p>
                    <p className="job-date">📅 {date}</p>
                </div>

                {/* Työpaikkakuvaus */}
                <p className="job-description">{description}</p>

                {/* Teknologiatagit */}
                <div className="job-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="job-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCard;
