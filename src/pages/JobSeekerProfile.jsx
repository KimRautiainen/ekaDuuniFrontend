import React from 'react';
import "../styles/JobSeekerProfile.css";
import Navbar2 from '../components/Navbar2';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import ProjectSection from '../components/ProjectSection';
import OtherSkills from '../components/OtherSkills'; 
import WorkHistory from '../components/WorkHistory';

const JobSeekerProfile = () => {
  return (
    <div className="jobseeker-page">
      <Navbar2 />
      <main className="jobseeker-main">
        <ProfileHeader />

        <section id="esittely">
          <ProfileInfo />
        </section>

        <section id="projektit">
          <ProjectSection />
        </section>

        <section id="osaaminen">
          <OtherSkills /> {/* ← Uusi komponentti */}
        </section>

        <section id="tyohistoria">
  <WorkHistory />
</section>
      </main>
    </div>
  );
};

export default JobSeekerProfile;
