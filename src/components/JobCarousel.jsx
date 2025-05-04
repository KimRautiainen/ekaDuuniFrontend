// JobCarousel.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import JobContext from "../contexts/JobContext";
import CarouselJobCard from "./CarouselJobCard";
import "./JobCarousel.css";

const JobCarousel = () => {
  const { jobs } = useContext(JobContext);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  if (!Array.isArray(jobs)) {
    console.error("Error: jobs is not an array", jobs);
    return null;
  }

  const displayedJobs = jobs.slice(0, 20);

  const handleClick = (job) => {
    // navigate to /jobs and pass job.id in location state
    navigate("/jobs", { state: { focusedJobId: job.id } });
  };

  return (
    <div className="job-carousel">
      <div
        className={`job-carousel-list ${isHovered ? "paused" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayedJobs.concat(displayedJobs).map((job, idx) => (
          <CarouselJobCard
            key={`job-${idx}`}
            job={job}
            onClick={() => handleClick(job)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCarousel;
