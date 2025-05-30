import axios from "axios";
import { apiUrl } from "../utils/app-config";
import { getAuthConfig } from "../utils/auth-config";

const useJobs = () => {
  const jobUrl = `${apiUrl}jobs`;

  // ✅ Get all jobs
  const getJobs = async () => {
    try {
      
      const response = await axios.get(jobUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching jobs:", error.response?.data || error);
      return null;
    }
  };

  // ✅ Get job by ID
  const getJob = async (id) => {
    if (!id) return console.error("❌ Missing job ID.");
    try {
      const config = getAuthConfig();
      if (!config) return null;
      const response = await axios.get(`${jobUrl}/${id}`, config);
      return response.data;
    } catch (error) {
      console.error("Error fetching job:", error.response?.data || error);
      return null;
    }
  };

  // ✅ Create a new job
  const createJob = async (jobFormData) => {
    if (!jobFormData) return console.error("❌ Missing job data.");
    try {
      const config = getAuthConfig(true); // indicate FormData/multipart
      if (!config) return null;
      const response = await axios.post(jobUrl, jobFormData, config);
      return response.data;
    } catch (error) {
      console.error("Error creating job:", error.response?.data || error);
      return null;
    }
  };

  // ✅ Update a job
  const updateJob = async (job) => {
    if (!job || !job.id) return console.error("❌ Missing job ID or data.");
    try {
      const config = getAuthConfig();
      if (!config) return null;
      const response = await axios.patch(`${jobUrl}/${job.id}`, job, config);
      return response.data;
    } catch (error) {
      console.error("Error updating job:", error.response?.data || error);
      return null;
    }
  };

  // ✅ Delete a job
  const deleteJob = async (id) => {
    if (!id) return console.error("❌ Missing job ID.");
    try {
      const config = getAuthConfig();
      if (!config) return null;
      const response = await axios.delete(`${jobUrl}/${id}`, config);
      return response.data;
    } catch (error) {
      console.error("Error deleting job:", error.response?.data || error);
      return null;
    }
  };

  // ✅ Get jobs by employer
  const getJobsByEmployer = async (employerId) => {
    if (!employerId) return console.error("❌ Missing employer ID.");
    try {
      const config = getAuthConfig();
      if (!config) return null;
      const response = await axios.get(
        `${jobUrl}/by-employer?employerId=${employerId}`,
        config
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching jobs by employer:",
        error.response?.data || error
      );
      return null;
    }
  };

  // ✅ Search jobs with query params
  const searchJobs = async (searchTerm) => {
    if (!searchTerm) return console.error("❌ Missing search term.");
    try {
      const config = getAuthConfig();
      if (!config) return null;
      const response = await axios.get(
        `${jobUrl}/search?query=${encodeURIComponent(searchTerm)}`,
        config
      );
      return response.data;
    } catch (error) {
      console.error("Error searching jobs:", error.response?.data || error);
      return null;
    }
  };

  return {
    getJobs,
    createJob,
    updateJob,
    getJob,
    deleteJob,
    getJobsByEmployer,
    searchJobs,
  };
};

export default useJobs;
