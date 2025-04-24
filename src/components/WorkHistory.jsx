import React from 'react';
import './WorkHistory.css';

const workItems = [
  {
    title: 'Myyjä - Prisma, Helsinki',
    time: '06/2021 – 08/2023',
    description: 'Asiakaspalvelu ja kassatyöskentely vilkkaassa ympäristössä.'
  },
  {
    title: 'IT-tukihenkilö - TechHelp Oy, Espoo',
    time: '09/2023 – 01/2024',
    description: 'Asiakastuki tietoteknisissä ongelmissa (puhelimitse ja paikan päällä).'
  },
  {
    title: 'UX/UI Trainee - Digisuunnittelu Oy, Vantaa',
    time: '02/2024 –',
    description: 'Käyttäjätestien järjestäminen ja analysointi.'
  }
];

const WorkHistory = () => {
  return (
    <section id="tyohistoria" className="work-history-wrapper">
      <div className="work-history-content">
        <h2 className="work-history-title">Työhistoria</h2>
        <div className="work-timeline">
          {workItems.map((item, index) => (
            <div className="work-timeline-item" key={index}>
              <div className="work-timeline-dot" />
              <div className="work-timeline-content">
                <h5>{item.title}</h5>
                <p className="work-timeline-time">{item.time}</p>
                <p className="work-timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
