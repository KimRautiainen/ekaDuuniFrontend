import { useState, useContext, useEffect } from "react";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";
import "../styles/JobListPage.css";
import Navbar2 from "../components/Navbar2";
import SearchBar from "../components/Searchbar";
import JobContext from "../contexts/JobContext";

const JobListPage = () => {
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const { jobs } = useContext(JobContext);

  // Aseta automaattisesti ensimmäinen työ
  useEffect(() => {
    if (jobs && jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0]);

    }
  }, [jobs, selectedJob]);

  // 🔍 Suodata työpaikat hakusanan mukaan
  const filteredJobs = jobs.filter((job) => {
    const keyword = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword)
    );
  });

  return (
    <>
        <Navbar2 />
      <main className="job-list-page">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={() => {
          }} // jos haluat painikkeen tehdä jotain, lisää tähän logiikkaa
        />
        <div className="job-list-container">
          <JobList
            jobs={filteredJobs}
            setSelectedJob={setSelectedJob}
            selectedJob={selectedJob}
          />
          <div className="job-details-container">
            {selectedJob && <JobDetails job={selectedJob} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default JobListPage;
