import React, { useState } from 'react';
import './ProjectSection.css';
import ProjectList from './ProjectList';
import EducationList from './EducationList';

const ProjectSection = () => {
  const [activeView, setActiveView] = useState('projektit');

  return (
    <section id="projektit" className="project-section-wrapper">
      <div className="project-section-content">
        <div className="toggle-buttons">
          <button
            className={activeView === 'projektit' ? 'active' : ''}
            onClick={() => setActiveView('projektit')}
          >
            Projektit
          </button>
          <button
            className={activeView === 'koulutus' ? 'active' : ''}
            onClick={() => setActiveView('koulutus')}
          >
            Koulutus
          </button>
        </div>

        <div className="content-area">
          {activeView === 'projektit' ? <ProjectList /> : <EducationList />}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;