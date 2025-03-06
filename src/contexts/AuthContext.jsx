import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { authUrl } from "../utils/app-config";

const AuthContext = createContext(); // Create a context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Create a state to store the user
  const navigate = useNavigate(); // Create a navigate function

  // Check if token is in the local storage when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from the local storage
    if (token) {
      const decoded = jwtDecode(token); // Decode the token
      setUser(decoded); // Set the user state
    }
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      console.log("Logging in with credentials:",
      credentials);
      const res = await axios.post(authUrl + "login", credentials, {
        headers: { "Content-Type": "application/json" }, // Ensure JSON format
      });
  
      // Store token in localStorage
      localStorage.setItem("token", res.data.token);
  
      // Set user from backend response
      setUser(res.data.user);
  
      navigate("/dashboard"); // Redirect to dashboard
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;