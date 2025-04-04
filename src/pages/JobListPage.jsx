import { useState, useContext } from "react";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";
import "../styles/JobListPage.css";
import Navbar2 from "../components/Navbar2";
import SearchBar from "../components/Searchbar";
import JobContext from "../contexts/JobContext";
const JobListPage = () => {
  const [selectedJob, setSelectedJob] = useState(null); // Default to the first job in the list
  const { jobs } = useContext(JobContext); // Get jobs from context
  

  return (
    <>
      <main className="job-list-page">
        {/* Navbar */}
        <Navbar2 />
        {/* Search Bar */}
        <SearchBar />
        {/* Job List */}
        <div className="job-list-container">
          {/* Vasemman puolen työpaikkalista */}
          <JobList jobs={jobs} setSelectedJob={setSelectedJob} />
          {/* Oikean puolen työpaikkakuvaus */}
          <div className="job-details-container">
            {selectedJob ? (
              <JobDetails job={selectedJob} />
            ) : (
              <p>Valitse työpaikka nähdäksesi lisätiedot</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default JobListPage;
