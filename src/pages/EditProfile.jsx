import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import "./EditProfile.css";

function EditProfile() {
  return (
    <div className="edit-profile-container">
      <Sidebar />
      <div className="edit-profile-main">
        <Navbar2 />

        {/* Kansikuva */}
        <div className="cover-photo-container">
          <label htmlFor="cover-upload" className="cover-photo-label">
            <img
              src="src/assets/images/cover.png"
              alt="Kansikuva"
              className="cover-photo"
            />
            <div className="cover-overlay">Lisää uusi kansikuva</div>
          </label>
          <input
            id="cover-upload"
            type="file"
            accept="image/*"
            className="cover-upload-input"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                document.querySelector(".cover-photo").src = imageUrl;
              }
            }}
          />
        </div>

        {/* Profiilin sisältö */}
        <div className="edit-profile-content">
          {/* Vasen puoli */}
          <div className="profile-left">
            <div className="profile-image-container profile-overlap">
              <img
                src="src/assets/images/profilepic.png"
                alt="Profiilikuva"
                className="profile-image"
              />
              <button className="edit-button">✏️</button>
            </div>
            <h2 className="profile-name">Erika Esimerkki</h2>
            <p className="profile-subtitle">
              Tietotekniikan insinööriopiskelija
            </p>

            <div className="profile-extra-info">
              <p className="info-heading">Haluatko jakaa muuta?</p>
              <p className="info-subtext">
                Linkitä profiiliin omat sivusi tai GitHub-profiilisi.
              </p>

              <div className="form-group full-width">
                <label>GitHub</label>
                <input
                  type="text"
                  placeholder="https://github.com/käyttäjänimi"
                />
              </div>

              <div className="form-group full-width">
                <label>Nettisivu</label>
                <input
                  type="text"
                  placeholder="https://omatsivut.com"
                />
              </div>
            </div>
          </div>

          {/* Oikea puoli */}
          <div className="profile-right-wrapper">
            <h3 className="section-title">Käyttäjätiedot</h3>
            <div className="profile-right">
              <div className="profile-form">
                <div className="form-group">
                  <label>Etunimi</label>
                  <div className="input-with-icon">
                    <FiUser className="editprofile-input-icon" />
                    <input type="text" defaultValue="Erika" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Sukunimi</label>
                  <div className="input-with-icon">
                    <FiUser className="editprofile-input-icon" />
                    <input type="text" defaultValue="Esimerkki" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Sähköposti</label>
                  <div className="input-with-icon">
                    <FiMail className="editprofile-input-icon" />
                    <input
                      type="email"
                      defaultValue="erika.esimerkki@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Salasana</label>
                  <div className="input-with-icon">
                    <FiLock className="editprofile-input-icon" />
                    <input type="password" defaultValue="*********" />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Esittelyteksti</label>
                  <div className="input-with-icon">
                    <textarea
                      rows="4"
                      defaultValue="Frontend-kehittäjä | UX/UI-suunnittelija 🚀"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* GitHub-projektit otsikko */}
        <h3 className="github-section-title">GitHub-projektit</h3>

        <div className="github-projects-wrapper">
          <div className="github-projects-section">
            <div className="form-group full-width">
              <label>Lisää projekti</label>
              <p className="info-subtext">
                Lisää tähän linkki GitHub-projektiisi. Varmista, että projekti
                on julkinen.
              </p>
              <input
                type="text"
                placeholder="https://github.com/ErikaEsimerkki/weather-app"
              />
            </div>

            <div className="form-group full-width">
              <label>Lisää projektille nimi</label>
              <input type="text" placeholder="Weather App" />
            </div>

            <div className="form-group full-width">
              <label>Lisää kuvia</label>
              <p className="info-subtext">
                Lisää selkeitä ja edustavia kuvia projektistasi.
              </p>
              <div className="image-upload-grid">
                <img
                  src="src/assets/images/demo-project-image.png"
                  alt="Project"
                  className="project-image-preview"
                />
                <div className="image-upload-placeholder">+</div>
                <div className="image-upload-placeholder">+</div>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Lyhyt esittely projektista</label>
              <p className="info-subtext">
                Kerro tärkeimmät osat siitä mitä ja miten teit.
              </p>
              <textarea rows="6" maxLength={300}></textarea>
            </div>

            <div className="form-group full-width">
              <label>Projektissa käytetyt teknologiat</label>
              <p className="info-subtext">
                Lisää tähän kaikki projektissa käyttämäsi teknologiat.
              </p>
              <div className="tag-container">
                <span className="tag">TypeScript ×</span>
                <span className="tag">Node.JS ×</span>
                <span className="tag">Node.JS ×</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

       {/* Koulutus-otsikko */}
<h3 className="github-section-title">Koulutus</h3>

<div className="github-projects-wrapper">
  <div className="github-projects-section">
    {/* Koulu & Tutkinto */}
    <div className="form-group-row">
      <div className="form-group">
        <label>Koulu</label>
        <input
          type="text"
          placeholder="Esimerkiksi: Metropolia AMK"
        />
      </div>
      <div className="form-group">
        <label>Tutkinto</label>
        <input
          type="text"
          placeholder="Esimerkiksi: Tietotekniikan insinööri (AMK)"
        />
      </div>
    </div>

    {/* Vuodet */}
    <div className="form-group-row">
      <div className="form-group">
        <label>Alkamisvuosi</label>
        <input type="text" placeholder="Esimerkiksi: 2014" />
      </div>
      <div className="form-group">
        <label>Päättymisvuosi</label>
        <input type="text" placeholder="Esimerkiksi: 2017" />
      </div>
    </div>

    <div
      className="add-more-education"
      onClick={() => alert("Tähän lisätään dynaaminen kenttä.")}
    >
      + Lisää koulutuksia
    </div>
  </div>
</div>
        <div className="section-divider"></div>
        <h3 className="github-section-title">Muu osaaminen</h3>

<div className="skills-grid">
  {/* Osaamiskenttä 1 */}
  <div className="skill-box">
    <input className="skill-title" type="text" placeholder="Otsikko, esim. Design" />
    <textarea className="skill-description" rows="4" placeholder="Lisätiedot, esim. Figma, Adobe XD, Canva..." />
  </div>

  {/* Osaamiskenttä 2 */}
  <div className="skill-box">
    <input className="skill-title" type="text" placeholder="Otsikko, esim. IT-taidot" />
    <textarea className="skill-description" rows="4" placeholder="Lisätiedot, esim. Windows, macOS, HTML..." />
  </div>

  {/* Osaamiskenttä 3 */}
  <div className="skill-box">
    <input className="skill-title" type="text" placeholder="Otsikko, esim. Viestintä" />
    <textarea className="skill-description" rows="4" placeholder="Lisätiedot, esim. sujuva kirjallinen viestintä..." />
  </div>

  {/* Osaamiskenttä 4 */}
  <div className="skill-box">
    <input className="skill-title" type="text" placeholder="Otsikko, esim. Kielitaito" />
    <textarea className="skill-description" rows="4" placeholder="Lisätiedot, esim. Suomi – äidinkieli, Englanti – erinomainen" />
  </div>
</div>
<div className="section-divider"></div>

<h3 className="github-section-title">Työhistoria</h3>

<div className="timeline">
  <div className="timeline-item">
    <div className="timeline-dot" />
    <div className="timeline-content">
      <input className="job-title-input" type="text" placeholder="Työnimike – Yritys, Paikkakunta" />
      <div className="timeline-dates-row">
        <input className="date-input" type="text" placeholder="Alku: 06/2024" />
        <input className="date-input" type="text" placeholder="Loppu: -" />
      </div>
      <textarea className="job-description" rows="3" placeholder="Kuvaus tehtävistä, esim. asiakaspalvelu vilkkaassa ympäristössä." />
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot" />
    <div className="timeline-content">
      <input className="job-title-input" type="text" placeholder="Työnimike – Yritys, Paikkakunta" />
      <div className="timeline-dates-row">
        <input className="date-input" type="text" placeholder="Alku: 09/2023" />
        <input className="date-input" type="text" placeholder="Loppu: 01/2024" />
      </div>
      <textarea className="job-description" rows="3" placeholder="Kuvaus tehtävistä, esim. tekninen asiakastuki puhelimitse ja paikan päällä." />
    </div>
  </div>

  <div className="timeline-item">
    <div className="timeline-dot" />
    <div className="timeline-content">
      <input className="job-title-input" type="text" placeholder="Työnimike – Yritys, Paikkakunta" />
      <div className="timeline-dates-row">
        <input className="date-input" type="text" placeholder="Alku: 02/2020" />
        <input className="date-input" type="text" placeholder="Loppu: 03/2021" />
      </div>
      <textarea className="job-description" rows="3" placeholder="Kuvaus tehtävistä, esim. käyttäjätestien järjestäminen ja analysointi." />
    </div>
  </div>
</div>
<div className="save-changes-container">
  <button className="save-changes-button">Tallenna muutokset</button>
</div>

      </div>
    </div>
  );
}

export default EditProfile;
