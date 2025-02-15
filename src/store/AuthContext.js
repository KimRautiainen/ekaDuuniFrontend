import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../../utils/app-config";

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
      const res = await axios.post(apiUrl + "login", credentials); // Make a POST request to the login endpoint
      localStorage.setItem("token", res.data.token); // Store the token in the local storage
      setUser(jwtDecode(res.data.token)); // Set the user state
      navigate("/dashboard"); // Navigate to the dashboard
    } catch (error) {
      console.log(error); // Log the error
      // TODO - Handle error 
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
