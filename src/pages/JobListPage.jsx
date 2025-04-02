import { useState } from "react";
import JobList from "../components/JobList";
import { NavLink } from "react-router-dom";
import JobDetails from "../components/JobDetails";
import Navbar2 from "../components/Navbar2"
import "../styles/JobListPage.css";

const JobListPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const Navbar = () => {
        return (
          <Navbar2/>
        );
    }

    return (
        <>
            <Navbar>    </Navbar>
            <main className="job-list-page">
                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Työnimike" />
                    <button>Etsi työpaikkoja</button> 
                </div>
                {/* Job List */}
                <div className="job-list-container">
                    {/* Vasemman puolen työpaikkalista */}
                    <JobList setSelectedJob={setSelectedJob} />
                    {/* Oikean puolen työpaikkakuvaus */}
                    <div className="job-details-container">
                        {selectedJob ? <JobDetails job={selectedJob} /> : <p>Valitse työpaikka nähdäksesi lisätiedot</p>}
                    </div>
                </div>
            </main>
        </>
    );
};

export default JobListPage;
