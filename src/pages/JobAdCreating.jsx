import { useState } from "react";
import useJobs from "../hooks/jobHooks";
import "./JobAdCreating.css";
import Navbar2 from "../components/Navbar2";

const JobAdCreating = () => {
  const { createJob } = useJobs();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    start_date: "",
    end_date: "",
    work_type: "remote",
    employment_type: "internship",
    salary_type: "",
    min_salary: "",
    max_salary: "",
    salary_details: "",
    job_description: "",
    skills: "",
    apply_type: "internal",
    logo: "",
    poster_image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Optional preview
      setForm((prev) => ({
        ...prev,
        [field]: previewUrl,
        [`${field}File`]: file, // Store actual File for upload
      }));
    }
  };
  const handleSubmit = async () => {
    const formData = new FormData();
  
    formData.append("title", form.title);
    formData.append("company", form.company);
    formData.append("location", form.location);
    formData.append("start_date", form.start_date);
    formData.append("end_date", form.end_date);
    formData.append("work_type", form.work_type);
    formData.append("employment_type", form.employment_type);
    formData.append("salary_type", form.salary_type);
    formData.append("min_salary", form.min_salary);
    formData.append("max_salary", form.max_salary);
    formData.append("salary_details", form.salary_details);
    formData.append("job_description", form.job_description);
    formData.append("apply_type", form.apply_type);
    formData.append("skills", JSON.stringify(
      form.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s)
    ));
  
    // Append actual image files (not blob URLs!)
    if (form.logoFile) formData.append("logo", form.logoFile);
    if (form.posterImageFile) formData.append("poster_image", form.posterImageFile);
  
    const result = await createJob(formData);
    if (result) alert("Job created successfully!");
    else alert("Failed to create job.");
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
              <label>Ilmoituksen otsikko</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Työnantajan nimi</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div className="logo-section">
            <h3>
              Työnantajan logo{" "}
              <span className="optional-text">(vapaaehtoinen)</span>
            </h3>
            <div className="logo-container">
              <div className="logo-preview">
                {form.logo ? (
                  <img
                    src={form.logo}
                    alt="Logo"
                    className="full-preview-image"
                  />
                ) : (
                  <span className="placeholder-text">Esikatselu</span>
                )}
              </div>
              <div className="logo-info">
                <p>
                  Tämä on ilmoituksen yhteydessä näytettävä kuva. <br />
                  Suositeltava kuvamuoto .png ja leveys vähintään 400 px.
                </p>
                <div className="button-group">
                  <input
                    type="file"
                    id="logoUpload"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "logo")}
                    hidden
                  />
                  <label htmlFor="logoUpload" className="upload-button">
                    Lataa laitteelta
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Poster Image Upload */}
          <div className="ad-image-section">
            <h3>
              Ilmoituksen kuva{" "}
              <span className="optional-text">(vapaaehtoinen)</span>
            </h3>
            <div className="ad-image-container">
              <div className="ad-image-preview">
                {form.poster_image ? (
                  <img
                    src={form.poster_image}
                    alt="Poster"
                    className="full-preview-image"
                  />
                ) : (
                  <span className="placeholder-text">Esikatselu</span>
                )}
              </div>
              <div className="logo-info">
                <p>
                  Tämä on ilmoituksen yhteydessä näytettävä kuva. <br />
                  Suositeltava kuvamuoto .jpg ja koko vähintään 1200 x 630
                  pikseliä. Liitteiden enimmäiskoko on 20 Mt.
                </p>
                <div className="button-group">
                  <input
                    type="file"
                    id="adImageUpload"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "poster_image")}
                    hidden
                  />
                  <label htmlFor="adImageUpload" className="upload-button">
                    Lataa laitteelta
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="job-description-section">
            <h3>Ilmoituksen sisältö</h3>
            <textarea
              className="job-description-input"
              name="job_description"
              value={form.job_description}
              onChange={handleChange}
              placeholder="Kuvaus..."
            />
          </div>

          <div className="input-group">
            <label>Työpaikan sijainti</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Työn aloitus- ja päättymispäivä</label>
            <input
              type="date"
              name="start_date"
              value={form.start_date}
              onChange={handleChange}
            />
            <input
              type="date"
              name="end_date"
              value={form.end_date}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Taidot (pilkulla erotettuna)</label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Työaika</label>
            <select
              name="work_type"
              value={form.work_type}
              onChange={handleChange}
            >
              <option value="remote">Etätyö</option>
              <option value="hybrid">Hybridi</option>
              <option value="onsite">Läsnätyö</option>
            </select>
          </div>

          <div className="input-group">
            <label>Työsuhteen tyyppi</label>
            <select
              name="employment_type"
              value={form.employment_type}
              onChange={handleChange}
            >
              <option value="internship">Harjoittelu</option>
              <option value="fixed">Määräaikainen</option>
              <option value="permanent">Vakituinen</option>
              <option value="part_time">Osa-aikainen</option>
              <option value="contract">Sopimustyö</option>
            </select>
          </div>

          <div className="input-group">
            <label>Palkkatyyppi</label>
            <select
              name="salary_type"
              value={form.salary_type}
              onChange={handleChange}
            >
              <option value="">-</option>
              <option value="monthly">Kuukausipalkka</option>
              <option value="hourly">Tuntipalkka</option>
              <option value="yearly">Vuotuinen</option>
            </select>
          </div>

          <div className="input-container">
            <div className="input-group">
              <label>Minimipalkka</label>
              <input
                type="number"
                name="min_salary"
                value={form.min_salary}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Maksimipalkka</label>
              <input
                type="number"
                name="max_salary"
                value={form.max_salary}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Palkan lisätiedot</label>
            <input
              type="text"
              name="salary_details"
              value={form.salary_details}
              onChange={handleChange}
              placeholder="Esim. bonukset, osakkeet..."
            />
          </div>

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
