import React from 'react';
import './EducationList.css';

const EducationList = () => {
  return (
    <div>
      <h4 style={{ marginBottom: '16px', color: 'white' }}>Koulutus</h4>
      <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
        <li>Metropolia AMK - Tietotekniikan insinööriopiskelija</li>
        <li>Fullstack open - Helsingin yliopisto</li>
        {/* Voit lisätä tänne myöhemmin tarkempaa tietoa */}
      </ul>
    </div>
  );
};

export default EducationList;