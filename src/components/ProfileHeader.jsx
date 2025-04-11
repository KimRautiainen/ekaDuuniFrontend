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
    <div className="profile-wrapper">
      <div className="banner">
        <div className="tabs">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`tab ${activeTab === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="profile-details">
        <img
          src="src/assets/images/profilepic.png"
          alt="Profiilikuva"
          className="avatar"
        />
        <div className="info">
          <h2>Erika Esimerkki</h2>
          <p>Tietotekniikan insinööriopiskelija</p>
        </div>
        <div className="extras">
          <span className="experience">&gt;1 vuoden kokemus</span>
          <div className="icons">
            <a className="icon-link" href="https://github.com/kayttajanimi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon-link" href="https://esimerkki.fi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </div>
          <button className="contact-btn">Ota yhteyttä</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
