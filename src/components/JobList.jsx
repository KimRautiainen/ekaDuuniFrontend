import LargeJobCard from "./LargeJobCard";
import "../styles/JobList.css";
import elisaLogo from "../assets/images/elisa-logo.jpg";
import metropoliaLogo from "../assets/images/metropolia-logo.png";

const jobs = [
    {
        id: 1,
        logo: elisaLogo,
        title: "Front end-koodari",
        company: "Elisa",
        location: "Helsinki",
        date: "Julkaistu 5.2.",
        description: "We transform multichannel customer service to omnichannel customer experience with eeedo desk.We offer a nice work environment in the center of Tampere. We transform multichannel customer service to omnichannel customer experience with eeedo desk.We offer a nice work environment in the center of Tampere. We transform multichannel customer service to omnichannel customer experience with eeedo desk.We offer a nice work environment in the center of Tampere",
        tags: ["React", "JavaScript", "CSS"],
    },
    {
        id: 2,
        logo: metropoliaLogo,
        title: "Java-kehittäjä",
        company: "Metropolia",
        location: "Helsinki",
        date: "Julkaistu 5.2.",
        description: "We offer a nice work environment in the center of Tampere...",
        tags: ["Java", "Spring", "AWS"],
    },
];

const JobList = ({ setSelectedJob }) => {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <LargeJobCard key={job.id} {...job} onClick={() => setSelectedJob(job)} />
            ))}
        </div>
    );
};

export default JobList;