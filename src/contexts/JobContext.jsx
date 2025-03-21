import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import useJobs from "../hooks/jobHooks";
import LoadingContext from "./LoadingContext";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const { getJobs } = useJobs();
  const [jobs, setJobs] = useState([]); // Ensure jobs is always an array
  const { startLoading, stopLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchJobs = async () => {
      startLoading();
      const jobData = await getJobs();

      console.log("JobData Response:", jobData); // Debugging line

      if (jobData && Array.isArray(jobData.jobs)) {
        setJobs(jobData.jobs); // ✅ Extract the array correctly
      } else {
        setJobs([]); // ✅ Always set an empty array if jobs data is missing
      }

      stopLoading();
    };

    fetchJobs();
  }, []);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

JobProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobContext;
