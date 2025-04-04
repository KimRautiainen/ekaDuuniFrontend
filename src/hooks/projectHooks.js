import axios from "axios";
import { apiUrl } from "../utils/app-config";
import { getAuthConfig } from "../utils/auth-config";

const useProjects = () => {

    // Get logged-in user's projects
    const getLoggedInUserProjects = async () => {
        try {
            const config = getAuthConfig();
            if (!config) return null;
            const response = await axios.get(`${apiUrl}projects/`, config);
            return response.data;
        } catch (error) {
            console.error("Error fetching projects:", error.response?.data || error);
            return null;
        }
    };

    // get all projects by user id
    const getAllProjectsByUserId = async (userId) => {
        if (!userId) return console.error("❌ Missing user ID.");
        try {
            const config = getAuthConfig();
            if (!config) return null;
            const response = await axios.get(`${apiUrl}projects/${userId}`, config);
            return response.data;
        } catch (error) {
            console.error("Error fetching projects:", error.response?.data || error);
            return null;
        }
    }

    // Post a new project
    const createProject = async (projectFormData) => {
        if (!projectFormData) return console.error("❌ Missing project data.");
        try {
            const config = getAuthConfig(true); // indicate FormData/multipart
            if (!config) return null;
            const response = await axios.post(`${apiUrl}projects/`, projectFormData, config);
            return response.data;
        } catch (error) {
            console.error("Error creating project:", error.response?.data || error);
            return null;
        }
    };

    // Update a project
    const updateProject = async (projectFormData) => {
        if (!projectFormData) return console.error("❌ Missing project data.");
        try {
            const config = getAuthConfig(true); // indicate FormData/multipart
            if (!config) return null;
            const response = await axios.patch(`${apiUrl}projects/${projectFormData.id}`, projectFormData, config);
            return response.data;
        } catch (error) {
            console.error("Error updating project:", error.response?.data || error);
            return null;
        }
    }

    // Delete a project
    const deleteProject = async (id) => {
        if (!id) return console.error("❌ Missing project ID.");
        try {
            const config = getAuthConfig();
            if (!config) return null;
            const response = await axios.delete(`${apiUrl}projects/${id}`, config);
            return response.data;
        } catch (error) {
            console.error("Error deleting project:", error.response?.data || error);
            return null;
        }
    };
    return { getLoggedInUserProjects, getAllProjectsByUserId, createProject, updateProject, deleteProject };F
};
export default useProjects;