import { useState, useContext, useEffect } from "react";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";
import "../styles/JobListPage.css";
import Navbar2 from "../components/Navbar2";
import SearchBar from "../components/Searchbar";
import JobContext from "../contexts/JobContext";
import { useLocation } from "react-router-dom";

const JobListPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { jobs } = useContext(JobContext);
  const { state } = useLocation();
  const focusedJobId = state?.focusedJobId;

  // Aseta automaattisesti ensimmäinen työ
  useEffect(() => {
    // if carousel sent us a focusedJobId, use that one first
    if (jobs && jobs.length > 0 && focusedJobId) {
      const jobToFocus = jobs.find((j) => j.id === focusedJobId);
      if (jobToFocus) {
        setSelectedJob(jobToFocus);
        return;
      }
    }

    // otherwise fall back to first in list (only if nothing is selected yet)
    if (jobs && jobs.length > 0 && !selectedJob) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs, selectedJob, focusedJobId]);

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
          onSearch={() => {}} // jos haluat painikkeen tehdä jotain, lisää tähän logiikkaa
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
