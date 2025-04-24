import React from 'react';
import './EducationList.css';

const educationData = [
  {
    degree: 'Maisteri, Tieto- ja viestintätekniikka',
    time: '06/2023 -',
    school: 'Metropolia'
  },
  {
    degree: 'Insinööri, Tieto- ja viestintätekniikka',
    time: '08/2020 - 04/2023',
    school: 'Metropolia'
  },
  {
    degree: 'Ylioppilas',
    time: '08/2014 - 06/2018',
    school: 'Lukio'
  }
];

const EducationList = () => {
  return (
    <div className="education-list">
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h5>{item.degree}</h5>
              <p className="timeline-time">{item.time}</p>
              <p className="timeline-school">{item.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
