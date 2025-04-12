import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { authUrl } from "../utils/app-config";
import useUser from "../hooks/userHooks";

const AuthContext = createContext(); // Create a context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Create a state to store the user
  const navigate = useNavigate(); // Create a navigate function
  const { getUserWithToken } = useUser(); // Import the getUserWithToken function from userHooks

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const fullUser = await getUserWithToken(); // fetch full user data from backend
        console.log("Full user data:", fullUser); // Debugging line
        if (fullUser) setUser(fullUser);
      }
    };

    loadUser();
  }, []);

  // Register function
  const register = async (userData) => {
    try {
      console.log("Registering user:", userData);
      const res = await axios.post(authUrl + "register", userData, {
        headers: { "Content-Type": "application/json" },
      });

      // Store token in localStorage
      localStorage.setItem("token", res.data.token);

      // Set user state
      setUser(res.data.user);
     

      // Navigate to dashboard
      navigate("/dashboard");
      return true;
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.message || error.message
      );
      return false;
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      console.log("Logging in with credentials:", credentials);
      const res = await axios.post(authUrl + "login", credentials, {
        headers: { "Content-Type": "application/json" }, // Ensure JSON format
      });

      // Store token in localStorage
      localStorage.setItem("token", res.data.token);

      // Set user from backend response
      setUser(res.data.user);
      console.log("User registered successfully:", res.data.user);

      navigate("/dashboard"); // Redirect to dashboard
      return true;
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from the local storage
    setUser(null); // Set the user state to null
    navigate("/login"); // Navigate to the login page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
