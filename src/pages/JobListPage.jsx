import { useState } from "react";
import Navbar from "../components/Navbar";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";
import "../styles/JobListPage.css";

const JobListPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <>
            <Navbar />
            <main className="job-list-page">
                <h1>Työpaikat</h1>
                <div className="job-page-container">
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
