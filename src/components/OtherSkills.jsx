import React from 'react';
import './OtherSkills.css';

const otherSkills = [
  {
    title: 'IT-taidot',
    description:
      'Windows ja macOS -käyttöjärjestelmät, Microsoft Office, Google Workspace, perusohjelmointi (HTML, CSS, JavaScript), IT-tuen perusteet.'
  },
  {
    title: 'Design',
    description:
      'Figma, Adobe XD, Canva, perusosaaminen Photoshopista ja Illustratorista.',
    gradient: true
  },
  {
    title: 'Viestintä',
    description:
      'Vahva asiakaspalvelukokemus, sujuva suullinen ja kirjallinen viestintä, ongelmanratkaisukyky paineen alla.'
  },
  {
    title: 'Kielitaito',
    description: (
      <ul>
        <li>Suomi – Äidinkieli</li>
        <li>Englanti – Erinomainen</li>
      </ul>
    )
  }
];

const OtherSkills = () => {
  return (
    <section id="osaaminen" className="other-skills-wrapper">
    <div className="other-skills-content">
      <h2 className="other-skills-heading">Muu osaaminen</h2>
      <div className="skill-grid">
        {otherSkills.map((skill, index) => (
          <div
            className={`skill-card ${skill.gradient ? 'gradient' : ''}`}
            key={index}
          >
            <h3>{skill.title}</h3>
            <div className="skill-description">{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default OtherSkills;
