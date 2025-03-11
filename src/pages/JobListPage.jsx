import { useState } from "react";
import JobList from "../components/JobList";
import { NavLink } from "react-router-dom";
import JobDetails from "../components/JobDetails";
import "../styles/JobListPage.css";

const JobListPage = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const Navbar = () => {
        return (
            <nav className="navbar">
                {/* DevStart Button (No Background) */}
                <button className="navbar-logo">&lt;DevStart/&gt;</button>

                {/* Center Box with Links */}
                <div className="navbar-center-box">
                    <NavLink to="" className="navbar-link">Työpaikat</NavLink>
                    <NavLink to="/about" className="navbar-link">Työnhakijalle</NavLink>
                    <NavLink to="/services" className="navbar-link">Työnantajalle</NavLink>
                    <NavLink to="/contact" className="navbar-link">Suosikit</NavLink>
                    <NavLink to="/contact" className="navbar-link">Kesätyöt 2025</NavLink>
                </div>

                {/* Right-Side Buttons */}
                <div className="navbar-buttons">
                    <NavLink to="/search" className="navbar-small-box"></NavLink>
                    <NavLink to="/notifications" className="navbar-small-box"></NavLink>
                    <NavLink to="/profile" className="navbar-small-box"></NavLink>
                </div>
            </nav>
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
