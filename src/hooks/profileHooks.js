import axios from "axios";
import { apiUrl } from "../utils/app-config";
import { getAuthConfig } from "../utils/auth-config";

const useProfile = () => {
  // get profile
  const getProfile = async () => {
    try {
      const config = getAuthConfig(); // get auth config
      if (!config) return console.error("❌ Missing auth config."); // check if config is null
      const response = await axios.get(apiUrl + "profile/", config); // make GET request to profile endpoint
      return response.data; // return profile data
    } catch (error) {
      console.error("Error fetching profile:", error.response?.data || error); // log error
      return null;
    }
  };
  // Create a new profile
  const createProfile = async (profileFormData) => {
    if (!profileFormData) return console.error("❌ Missing profile data."); // check if form data is null
    try {
      const config = getAuthConfig(true); // indicate FormData/multipart
      if (!config) return null; // check if config is null
      const response = await axios.post(apiUrl + "profile/", profileFormData, config); // make POST request to profile endpoint
      return response.data; // return profile data
    } catch (error) {
      console.error("Error creating profile:", error.response?.data || error); // log error
      return null;
    }
  }
  // Update a profile
    const updateProfile = async (profile) => {
        if (!profile ) return console.error("❌ Missing profile data."); // check if profile is null
        try {
        const config = getAuthConfig(true); // get auth config
        if (!config) return null; // check if config is null
        const response = await axios.patch(apiUrl + "profile/", profile, config); // make PATCH request to profile endpoint
        return response.data; // return profile data
        } catch (error) {
        console.error("Error updating profile:", error.response?.data || error); // log error
        return null;
        }
    };

  return {
    getProfile,
    createProfile,
    updateProfile,
  };
};
export default useProfile;
