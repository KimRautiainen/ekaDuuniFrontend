import { useState } from "react";
import "./JobAdCreating.css";
import Navbar2 from "../components/Navbar2";

const JobAdCreating = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedAdImage, setSelectedAdImage] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [skills, setSkills] = useState("");
  const [workTime, setWorkTime] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [minSalary, setMinSalary] = useState(""); // Minimipalkka
  const [maxSalary, setMaxSalary] = useState(""); // Maksimipalkka

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    alert("Ilmoitus lähetetty!");
  };

  return (
    <div className="page-container">
      <Navbar2 />
      <div className="content-container">
        <div className="container">
          <h1>Jätä työpaikkailmoitus</h1>
          <p1>
            Hyvä työpaikkailmoitus paitsi tavoittaa pätevät henkilöt
            <span className="block-text">
              myös houkuttelee heidät hakemaan avointa työpaikkaa.
            </span>
          </p1>
        </div>
        <h2>Ilmoituksen tiedot</h2>
        <div className="container-info">
          <div className="input-container">
            <div className="input-group">
              <label htmlFor="job-title">Ilmoituksen otsikko</label>
              <input type="text" id="job-title" placeholder="Esimerkiksi: Ohjelmistokehittäjä" />
            </div>
            <div className="input-group">
              <label htmlFor="employer-name">Työnantajan nimi</label>
              <input type="text" id="employer-name" placeholder="Esimerkiksi: Yritys Oy" />
            </div>
          </div>
 {/* Työnantajan logo */}
 <div className="logo-section">
            <h3>Työnantajan logo <span className="optional-text">(vapaaehtoinen)</span></h3>
            <div className="logo-container">
              <div className="logo-preview">
                {selectedLogo ? (
                  <img src={selectedLogo} alt="Logo" className="full-preview-image" />
                ) : (
                  <span className="placeholder-text">Esikatselu</span>
                )}
              </div>
              <div className="logo-info">
                <p>Tämä on ilmoituksen yhteydessä näytettävä kuva. <br /> Suositeltava kuvamuoto .png ja leveys vähintään 400 px.</p>
                <div className="button-group">
                  <input type="file" id="logoUpload" accept="image/*" onChange={(e) => handleImageChange(e, setSelectedLogo)} hidden />
                  <label htmlFor="logoUpload" className="upload-button">Lataa laitteelta</label>
                </div>
              </div>
            </div>
          </div>

          {/* Ilmoituksen kuva */}
          <div className="ad-image-section">
            <h3>Ilmoituksen kuva <span className="optional-text">(vapaaehtoinen)</span></h3>
            <div className="ad-image-container">
              <div className="ad-image-preview">
                {selectedAdImage ? (
                  <img src={selectedAdImage} alt="Ilmoituksen kuva" className="full-preview-image" />
                ) : (
                  <span className="placeholder-text">Esikatselu</span>
                )}
              </div>
              <div className="logo-info">
                <p>Tämä on ilmoituksen yhteydessä näytettävä kuva. <br /> Suositeltava kuvamuoto .jpg ja koko vähintään 
                  1200 x 630 pikseliä. 
                  Liitteiden enimmäiskoko on 20 Mt. 
                </p>
                <div className="button-group">
                  <input type="file" id="adImageUpload" accept="image/*" onChange={(e) => handleImageChange(e, setSelectedAdImage)} hidden />
                  <label htmlFor="adImageUpload" className="upload-button">Lataa laitteelta</label>
                </div>
              </div>
            </div>
          </div>

          {/* Ilmoituksen sisältö */}
          <div className="job-description-section">
            <h3>Ilmoituksen sisältö</h3>
            <textarea
              className="job-description-input"
              placeholder="Vältä kliseitä ja kerro konkreettisia esimerkkejä siitä, mitä työntekijä pääsee tekemään..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Työpaikan sijainti */}
          <div className="input-group">
            <label htmlFor="job-location">Työpaikan sijainti</label>
            <p className="helper-text">
              Mahdollisuus etätyöhön? Mainitse tämä ilmoituksen kuvauksessa, niin hakijat kyllä löytävät ilmoituksen.
            </p>
            <input
              type="text"
              id="job-location"
              placeholder="Esimerkiksi: Helsinki, Suomi"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </div>

          {/* Viimeinen hakupäivä */}
          <div className="input-group">
            <label htmlFor="application-deadline">Viimeinen hakupäivä</label>
            <input
              type="date"
              id="application-deadline"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
            />
          </div>

          {/* Taidot */}
          <div className="input-group">
            <label htmlFor="skills">Taidot</label>
            <input
              type="text"
              id="skills"
              placeholder="Esimerkiksi: React, Node.js, SQL"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          {/* Työaika */}
          <div className="input-group">
            <label htmlFor="work-time">Työaika</label>
            <input
              type="text"
              id="work-time"
              placeholder="Esimerkiksi: Kokoaikainen, osa-aikainen"
              value={workTime}
              onChange={(e) => setWorkTime(e.target.value)}
            />
          </div>

          {/* Työsuhde */}
          <div className="input-group">
            <label htmlFor="employment-type">Työsuhde</label>
            <input
              type="text"
              id="employment-type"
              placeholder="Esimerkiksi: Vakituinen, määräaikainen, harjoittelu"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            />
          </div>

          {/* Palkkahaarukka */}
          <div className="input-container">
            <div className="input-group">
              <label htmlFor="min-salary">Minimipalkka</label>
              <input
                type="number"
                id="min-salary"
                placeholder="Esimerkiksi: 3000"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="max-salary">Maksimipalkka</label>
              <input
                type="number"
                id="max-salary"
                placeholder="Esimerkiksi: 5000"
                value={maxSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />
            </div>
          </div>

          {/* Lähetä ilmoitus -nappi */}
          <div className="button-container">
            <button className="submit-button" onClick={handleSubmit}>
              Lähetä ilmoitus
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobAdCreating;
