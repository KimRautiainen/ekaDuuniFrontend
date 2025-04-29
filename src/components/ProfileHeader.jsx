import React, { useEffect, useState } from 'react';
import './ProfileHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const ProfileHeader = () => {
  const [activeTab, setActiveTab] = useState('esittely');

  const sections = [
    { id: 'esittely', label: 'Esittely' },
    { id: 'projektit', label: 'Projektit' },
    { id: 'osaaminen', label: 'Muu osaaminen' },
    { id: 'tyohistoria', label: 'Työhistoria' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = 'esittely';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 160) {
            current = section.id;
          }
        }
      }

      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="ph-profile-wrapper">
      <div className="ph-banner">
        <div className="ph-tabs">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`ph-tab ${activeTab === section.id ? 'ph-active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ph-profile-details">
        <img
          src="src/assets/images/profilepic.png"
          alt="Profiilikuva"
          className="ph-avatar"
        />
        <div className="ph-info">
          <h2>Erika Esimerkki</h2>
          <p>Tietotekniikan insinööriopiskelija</p>
        </div>
        <div className="ph-extras">
          <span className="ph-experience">1 vuoden kokemus</span>
          <div className="ph-icons">
            <a className="ph-icon-link" href="https://github.com/kayttajanimi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="ph-icon-link" href="https://esimerkki.fi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </div>
          <button className="ph-contact-btn">Ota yhteyttä</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
