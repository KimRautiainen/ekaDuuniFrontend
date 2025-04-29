import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
  return (
    <div className="pi-wrapper">
      <div className="pi-info">
        <div className="pi-content">
          <div className="pi-heading-row">
            <h3><span className="pi-accent">//</span> Nopea esittely minusta</h3>
            <p className="pi-text">
              Frontend-kehittäjä | UX/UI–suunnittelija 🚀<br/>
              Olen erikoistunut Reactiin, TypeScriptiin ja moderniin web-kehitykseen.
              Vahva osaaminen API-integraatioista, tilanhallinnasta ja interaktiivisista käyttöliittymistä.
              Panostan suorituskykyyn, käytettävyyteen ja visuaalisesti viimeisteltyyn designiin.
              Innostun selkeistä käyttöliittymistä, tykkään ratkoa haastavia ongelmia ja nautin siitä, kun saa tehdä asiat paitsi toimiviksi myös kauniiksi.
              Olen intohimoinen käyttäjäkeskeisen suunnittelun kannattaja ja pyrin aina luomaan ratkaisuja, jotka parantavat käyttäjäkokemusta.
              Nautin tiimityöskentelystä ja olen jatkuvasti valmis oppimaan uusia teknologioita ja työtapoja, jotka vievät taitoni uudelle tasolle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
