import React, { useState } from 'react';
import './ProjectSection.css';
import ProjectList from './ProjectList';
import EducationList from './EducationList';

const ProjectSection = () => {
  const [activeView, setActiveView] = useState('projektit');

  return (
    <section id="projektit" className="ps-section-wrapper">
      <div className="ps-section-content">
        <div className="ps-toggle-buttons">
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

        <div className="ps-content-area">
          {activeView === 'projektit' ? <ProjectList /> : <EducationList />}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
