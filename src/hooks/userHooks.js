import axios from "axios";
import { apiUrl } from "../utils/app-config";
import { getAuthConfig } from "../utils/auth-config";


const useUser = () => {
    // get user with token
    const getUserWithToken = async() => {
        try {
            const config = getAuthConfig(); // get auth config
            if (!config) return console.error("❌ Missing auth config."); // check if config is null
            const response = await axios.get(apiUrl + "auth/me", config); // make GET request to user endpoint
            return response.data; // return user data
        } catch (error) {
            console.error("Error fetching user:", error.response?.data || error); // log error
            return null;
        }
    }
    // Get user by ID
    const getUserById = async (userId) => {
        if (!userId) return console.error("❌ Missing user ID."); // check if userId is null
        try {
            const config = getAuthConfig(); // get auth config
            if (!config) return null; // check if config is null
            const response = await axios.get(apiUrl + "users/" + userId, config); // make GET request to user endpoint
            return response.data; // return user data
        } catch (error) {
            console.error("Error fetching user:", error.response?.data || error); // log error
            return null;
        }
    };
    // Update user
    const updateUser = async (user) => {
        if (!user || !user.id) return console.error("❌ Missing user ID or data."); // check if user is null
        try {
            const config = getAuthConfig(); // get auth config
            if (!config) return null; // check if config is null
            const response = await axios.patch(apiUrl + "users/update", user, config); // make PATCH request to user endpoint
            return response.data; // return user data
        } catch (error) {
            console.error("Error updating user:", error.response?.data || error); // log error
            return null;
        }
    };

    // Delete user account
    const deleteUser = async() => {
        try {
            const config = getAuthConfig(); // get auth config
            if (!config) return null; // check if config is null
            const response = await axios.delete(apiUrl + "users/delete", config); // make DELETE request to user endpoint
            return response.data; // return user data
        } catch (error) {
            console.error("Error deleting user:", error.response?.data || error); // log error
            return null;
        }
    }

    return {
        getUserWithToken,
        getUserById,
        updateUser,
        deleteUser,
    };
}

export default useUser;