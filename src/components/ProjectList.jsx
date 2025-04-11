import React from 'react';
import './ProjectList.css';

const projects = [
  {
    title: 'Weather App',
    description: 'Kehitin Weather-sovelluksen front-endin käyttämällä Reactia ja TypeScriptiä, hyödyntäen OpenWeather APIa reaaliaikaisten säätietojen hakemiseen. Käytin Tailwind CSS:ää responsiivisuuteen.',
    image: 'src/assets/images/elisa-logo.jpg',
    tags: ['TypeScript', 'React', 'Tailwind', 'OpenWeather API']
  },
  {
    title: 'Marketing CRM',
    description: 'Kehitin CRM-sovelluksen Reactilla ja TypeScriptillä hyödyntäen Next.js:ää ja Zustand-tilanhallintaa.',
    image: 'src/assets/images/metropolia-logo.png',
    tags: ['TypeScript', 'React', 'Next.js', 'Zustand']
  }
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span className="project-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ProjectList;
