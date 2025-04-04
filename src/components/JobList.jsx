import LargeJobCard from "./LargeJobCard";
import "../styles/JobList.css";


const JobList = ({ jobs, setSelectedJob }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <LargeJobCard
          key={job.id}
          {...job}
          onClick={() => setSelectedJob(job)}
        />
      ))}
    </div>
  );
};

export default JobList;
