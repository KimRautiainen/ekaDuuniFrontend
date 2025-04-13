import React, { useState, useEffect, useContext, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import AuthContext from "../contexts/AuthContext";
import ProfileContext from "../contexts/ProfileContext";
import "./EditProfile.css";
import useProfile from "../hooks/profileHooks";
import useUser from "../hooks/userHooks";
import { FiEdit2, FiX } from "react-icons/fi";
import MDEditor from "@uiw/react-md-editor";

function EditProfile() {
  const { user, setUser } = useContext(AuthContext); // Get user and setUser from AuthContext
  const { profile, setProfile } = useContext(ProfileContext); // Get profile and setProfile from ProfileContext
  /*  const [coverImagePreview, setCoverImagePreview] = useState(
    profile?.profile?.cover_photo || "src/assets/images/wide.png"
  );
  const [profileImagePreview, setProfileImagePreview] = useState(
    profile?.profile?.profile_picture || "src/assets/images/profilepic.png"
  ); */
  const [projectImages, setProjectImages] = useState([]); // State to hold project images
  const [techInput, setTechInput] = useState(""); // State to hold technology input
  const [techTags, setTechTags] = useState([]); // State to hold technology tags
  const [projectDescription, setProjectDescription] = useState(""); // State to hold project description
  const [mode, setMode] = useState("edit");
  const [profileBio, setProfileBio] = useState(profile?.profile?.bio || "");
  const { updateProfile, createProfile, getProfile } = useProfile();
  const { updateUser } = useUser();
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [coverImagePreview, setCoverImagePreview] = useState(
    "src/assets/images/wide.png"
  );
  const [profileImagePreview, setProfileImagePreview] = useState(
    "src/assets/images/profilepic.png"
  );

  const coverImageRef = useRef(null);
  const profileImageRef = useRef(null);

  // MOVE THE USE EFFECT TO PROFILE WHEN IT'S READY
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile();
      if (profileData) setProfile(profileData);
    };
    if (!profile) fetchProfile();
  }, [profile, setProfile, getProfile]);

  useEffect(() => {
    if (profile?.profile) {
      setCoverImagePreview(
        profile.profile.cover_photo || "src/assets/images/wide.png"
      );
      setProfileImagePreview(
        profile.profile.profile_picture || "src/assets/images/profilepic.png"
      );
      setProfileBio(profile.profile.bio || "");
      setGithub(profile.profile.github || "");
      setPortfolio(profile.profile.portfolio || "");
    }

    if (user?.user) {
      const [first, last] = user.user.full_name?.split(" ") || ["", ""];
      setFirstName(first);
      setLastName(last);
      setEmail(user.user.email || "");
    }
  }, [profile, user]);

  console.log("User data:", user); // Debugging line
  console.log("Profile data:", profile); // Debugging line

  const handleSaveChanges = async () => {
    try {
      const fullName = `${firstName} ${lastName}`.trim();

      await updateUser({ full_name: fullName, email });

      const formData = new FormData();
      formData.append("bio", profileBio);
      formData.append("github", github);
      formData.append("portfolio", portfolio);
      console.log("Form data:", formData); // Debugging line

      if (coverImageRef.current?.files?.[0]) {
        formData.append("cover_photo", coverImageRef.current.files[0]);
      }

      if (profileImageRef.current?.files?.[0]) {
        formData.append("profile_picture", profileImageRef.current.files[0]);
      }

     
      if (profile?.profile?.id) {
        await updateProfile(formData);
      } else {
        await createProfile(formData);
      }

      alert("Tiedot tallennettu!");
    } catch (error) {
      console.error("Virhe tallennettaessa:", error);
      alert("Virhe tallennettaessa tietoja.");
    }
  };

  return (
    <div className="edit-profile-container">
      <Sidebar />
      <div className="edit-profile-main">
        <Navbar2 />

        {/* Kansikuva */}
        <div className="cover-photo-container">
          <label className="cover-photo-label">
            <img
              src={coverImagePreview}
              alt="Kansikuva"
              className="cover-photo"
            />
            <div className="cover-overlay">Lisää uusi kansikuva</div>
            <input
              ref={coverImageRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) setCoverImagePreview(URL.createObjectURL(file));
              }}
            />
          </label>
        </div>

        <div className="edit-profile-content">
          {/* Profiilikuva + linkit */}
          <div className="profile-left">
            <label className="profile-image-label profile-image-container profile-overlap">
              <img
                src={profileImagePreview}
                alt="Profiilikuva"
                className="profile-image"
              />
              <div className="profile-image-overlay">
                <FiEdit2 className="edit-icon" />
              </div>
              <input
                ref={profileImageRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) setProfileImagePreview(URL.createObjectURL(file));
                }}
              />
            </label>
            <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
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
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="https://github.com/käyttäjänimi"
                />
              </div>

              <div className="form-group full-width">
                <label>Nettisivu</label>
                <input
                  type="text"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://omatsivut.com"
                />
              </div>
            </div>
          </div>

          {/* Käyttäjätiedot + bio */}
          <div className="profile-right-wrapper">
            <h3 className="section-title">Käyttäjätiedot</h3>
            <div className="profile-right">
              <div className="profile-form">
                <div className="form-group">
                  <label>Etunimi</label>
                  <div className="input-with-icon">
                    <FiUser className="editprofile-input-icon" />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Etunimi"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Sukunimi</label>
                  <div className="input-with-icon">
                    <FiUser className="editprofile-input-icon" />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Sukunimi"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Sähköposti</label>
                  <div className="input-with-icon">
                    <FiMail className="editprofile-input-icon" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Sähköposti"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Salasana</label>
                  <div className="input-with-icon">
                    <FiLock className="editprofile-input-icon" />
                    <input type="password" placeholder="********" disabled />
                  </div>
                </div>

                {/* Bio (markdown editor) */}
                <div className="form-group full-width">
                  <label>Esittelyteksti</label>
                  <div data-color-mode="dark" className="markdown-wrapper">
                    <div className="toggle-buttons">
                      <button
                        className={mode === "edit" ? "active" : ""}
                        onClick={() => setMode("edit")}
                      >
                        Edit
                      </button>
                      <button
                        className={mode === "preview" ? "active" : ""}
                        onClick={() => setMode("preview")}
                      >
                        Preview
                      </button>
                    </div>
                    <MDEditor
                      value={profileBio}
                      onChange={setProfileBio}
                      preview={mode}
                      hideToolbar={true}
                      maxLength={200}
                    />
                    <p className="markdown-support-label">Markdown supported</p>
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
                {projectImages.map((imgObj, index) => (
                  <div key={index} className="image-thumbnail-wrapper">
                    <img
                      src={imgObj.preview}
                      alt={`project-${index}`}
                      className="project-image-preview"
                    />
                    <button
                      type="button"
                      className="remove-image-button"
                      onClick={() =>
                        setProjectImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Show "+" placeholders only if less than 3 images */}
                {projectImages.length < 3 &&
                  [...Array(3 - projectImages.length)].map((_, i) => (
                    <label
                      key={`placeholder-${i}`}
                      className="image-upload-placeholder"
                    >
                      +
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const imageUrl = URL.createObjectURL(file);
                            setProjectImages((prev) =>
                              prev.length < 3
                                ? [...prev, { file, preview: imageUrl }]
                                : prev
                            );
                          }
                          // Reset input so selecting the same image again still triggers change
                          e.target.value = null;
                        }}
                        style={{ display: "none" }}
                      />
                    </label>
                  ))}
              </div>
            </div>

            <div className="form-group full-width">
              <label>Lyhyt esittely projektista</label>
              <p className="info-subtext">
                Kerro tärkeimmät osat siitä mitä ja miten teit.
              </p>
              <textarea
                className="project-textarea"
                maxLength={1000}
                rows={6}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Kirjoita lyhyt kuvaus projektista..."
              />
            </div>

            <div className="form-group full-width">
              <label className="header-below-textbox">
                Projektissa käytetyt teknologiat
              </label>
              <p className="info-subtext">
                Lisää tähän kaikki projektissa käyttämäsi teknologiat.
              </p>

              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    (e.key === "Enter" || e.key === ",") &&
                    techInput.trim()
                  ) {
                    e.preventDefault();
                    const newTag = techInput.trim();
                    if (!techTags.includes(newTag)) {
                      setTechTags([...techTags, newTag]);
                    }
                    setTechInput("");
                  }
                }}
                placeholder="Lisää teknologia ja paina Enter tai pilkku"
                className="tech-input"
              />

              <div className="tag-container">
                {techTags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}{" "}
                    <span
                      className="remove-tag"
                      onClick={() =>
                        setTechTags((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                    >
                      ×
                    </span>
                  </span>
                ))}
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
                <input type="text" placeholder="Esimerkiksi: Metropolia AMK" />
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
            <input
              className="skill-title"
              type="text"
              placeholder="Otsikko, esim. Design"
            />
            <textarea
              className="skill-description"
              rows="4"
              placeholder="Lisätiedot, esim. Figma, Adobe XD, Canva..."
            />
          </div>

          {/* Osaamiskenttä 2 */}
          <div className="skill-box">
            <input
              className="skill-title"
              type="text"
              placeholder="Otsikko, esim. IT-taidot"
            />
            <textarea
              className="skill-description"
              rows="4"
              placeholder="Lisätiedot, esim. Windows, macOS, HTML..."
            />
          </div>

          {/* Osaamiskenttä 3 */}
          <div className="skill-box">
            <input
              className="skill-title"
              type="text"
              placeholder="Otsikko, esim. Viestintä"
            />
            <textarea
              className="skill-description"
              rows="4"
              placeholder="Lisätiedot, esim. sujuva kirjallinen viestintä..."
            />
          </div>

          {/* Osaamiskenttä 4 */}
          <div className="skill-box">
            <input
              className="skill-title"
              type="text"
              placeholder="Otsikko, esim. Kielitaito"
            />
            <textarea
              className="skill-description"
              rows="4"
              placeholder="Lisätiedot, esim. Suomi – äidinkieli, Englanti – erinomainen"
            />
          </div>
        </div>
        <div className="section-divider"></div>

        <h3 className="github-section-title">Työhistoria</h3>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <input
                className="job-title-input"
                type="text"
                placeholder="Työnimike – Yritys, Paikkakunta"
              />
              <div className="timeline-dates-row">
                <input
                  className="date-input"
                  type="text"
                  placeholder="Alku: 06/2024"
                />
                <input
                  className="date-input"
                  type="text"
                  placeholder="Loppu: -"
                />
              </div>
              <textarea
                className="job-description"
                rows="3"
                placeholder="Kuvaus tehtävistä, esim. asiakaspalvelu vilkkaassa ympäristössä."
              />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <input
                className="job-title-input"
                type="text"
                placeholder="Työnimike – Yritys, Paikkakunta"
              />
              <div className="timeline-dates-row">
                <input
                  className="date-input"
                  type="text"
                  placeholder="Alku: 09/2023"
                />
                <input
                  className="date-input"
                  type="text"
                  placeholder="Loppu: 01/2024"
                />
              </div>
              <textarea
                className="job-description"
                rows="3"
                placeholder="Kuvaus tehtävistä, esim. tekninen asiakastuki puhelimitse ja paikan päällä."
              />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <input
                className="job-title-input"
                type="text"
                placeholder="Työnimike – Yritys, Paikkakunta"
              />
              <div className="timeline-dates-row">
                <input
                  className="date-input"
                  type="text"
                  placeholder="Alku: 02/2020"
                />
                <input
                  className="date-input"
                  type="text"
                  placeholder="Loppu: 03/2021"
                />
              </div>
              <textarea
                className="job-description"
                rows="3"
                placeholder="Kuvaus tehtävistä, esim. käyttäjätestien järjestäminen ja analysointi."
              />
            </div>
          </div>
        </div>
        <div className="save-changes-container">
          <button className="save-changes-button" onClick={handleSaveChanges}>
            Tallenna muutokset
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
