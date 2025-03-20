import React, { useState, useContext } from "react";
import JobContext from "../contexts/JobContext";
import CarouselJobCard from "./CarouselJobCard";
import "./JobCarousel.css";

const JobCarousel = () => {
  const { jobs } = useContext(JobContext);
  const [isHovered, setIsHovered] = useState(false);

  if (!Array.isArray(jobs)) {
    console.error("Error: jobs is not an array", jobs);
    return null; // Prevent rendering if jobs is invalid
  }

  return (
    <div className="job-carousel">
      <div
        className={`job-carousel-list ${isHovered ? "paused" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {jobs.concat(jobs).map((job, index) => (
          <CarouselJobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobCarousel;
