import React from 'react';
import './ProjectList.css';

const projects = [
  {
    title: 'Weather App',
    role: 'Developer',
    timeline: 'From explorations to final product in 2 weeks.',
    description: 'Kehitin Weather-sovelluksen front-endin käyttämällä Reactia ja TypeScriptiä, hyödyntäen OpenWeather APIa reaaliaikaisten säätietojen hakemiseen. Toteutin responsiivisen käyttöliittymän Tailwind CSS:llä varmistaen, että sovellus toimii sujuvasti eri laitteilla.',
    image: 'src/assets/images/elisa-logo.jpg',
    tags: ['TypeScript', 'React', 'Tailwind', 'OpenWeather API']
  },
  {
    title: 'Marketing CRM',
    role: 'Developer',
    timeline: 'From explorations to final product in 4 weeks.',
    description: 'Kehitin Marketing CRM -sovelluksen front-endin Reactilla ja TypeScriptillä, hyödyntäen Next.js:n server-side renderöintiä suorituskyvyn parantamiseksi. Käytin Zustandia tilanhallintaan ja integroin sovelluksen RESTful APIin asiakastietojen ja kampanjadatan hakemiseksi.',
    image: 'src/assets/images/metropolia-logo.png',
    tags: ['TypeScript', 'React', 'Next.js', 'Zustand']
  }
];

const ProjectList = () => {
  return (
    <div className="pl-list">
      {projects.map((project, index) => (
        <div className={`pl-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <img src={project.image} alt={project.title} className="pl-image" />
          <div className="pl-info">
            <div className="pl-header">
              <h3 className="pl-title">{project.title}</h3>
            </div>

            <div className="pl-meta">
              <p><strong>Rooli:</strong> {project.role}</p>
              <p><strong>Aikajana:</strong> {project.timeline}</p>
              <p><strong>Mitä tein:</strong> {project.description}</p>
            </div>

            <div className="pl-tags">
              {project.tags.map((tag, i) => (
                <span className="pl-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="pl-github-button-wrapper">
        <a
          href="https://github.com/kayttajatunnuksesi" // ← Vaihda tämä omaan GitHub-osoitteeseesi
          target="_blank"
          rel="noopener noreferrer"
          className="pl-github-button"
        >
          Lisää projekteja GitHubissa
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
