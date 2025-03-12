import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import "./Login.css";
import googleLogo from "../../assets/web_light_rd_ctn.svg"; // Use your downloaded SVG logo

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Track login errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", formData); // ✅ Debugging

    if (
      !formData.email ||
      !formData.password ||
      (isRegistering && !formData.fullName)
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log(isRegistering ? "Registering..." : "Logging in..."); // ✅ Debugging
    if (isRegistering) {
      console.log("Calling register function..."); // ✅ Debugging
      const success = await register(formData);
      console.log("Register function response:", success); // ✅ Debugging
      if (!success) {
        setError("Registration failed. Try again.");
      }
    } else {
      console.log("Calling login function..."); // ✅ Debugging
      const success = await login({
        email: formData.email,
        password: formData.password,
      });
      console.log("Login function response:", success); // ✅ Debugging
      if (!success) {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side - Image and Welcome Text */}
      <div className="auth-image">
        <h1>Welcome Back</h1>
      </div>

      {/* Right Side - Login / Register Form */}
      <div className="auth-form-container">
        {isRegistering ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>Register</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="auth-input"
              onChange={handleChange} // ✅ Fix: Ensure input updates formData
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
              onChange={handleChange} // ✅ Fix
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
              onChange={handleChange} // ✅ Fix
              required
            />
            <button type="submit" className="auth-button">
              Register
            </button>

            {/* Separator */}
            <div className="auth-separator">
              <span>or</span>
            </div>

            {/* Google Login */}
            <button type="button" className="google-button">
              <img src={googleLogo} alt="Google logo" className="google-logo" />
            </button>

            <p className="auth-toggle">
              Already have an account?{" "}
              <span onClick={() => setIsRegistering(false)}>Login</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>Log In</h2>
            {error && <p className="auth-error">{error}</p>}{" "}
            {/* Display error if exists */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
              onChange={handleChange}
              required
            />
            <div className="auth-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
            </div>
            <button type="submit" className="auth-button">
              Login
            </button>
            {/* Separator */}
            <div className="auth-separator">
              <span>or</span>
            </div>
            {/* Google Login */}
            <button type="button" className="google-button">
              <img src={googleLogo} alt="Google logo" className="google-logo" />
            </button>
            <p className="auth-toggle">
              Don't have an account yet?{" "}
              <span onClick={() => setIsRegistering(true)}>Register</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
