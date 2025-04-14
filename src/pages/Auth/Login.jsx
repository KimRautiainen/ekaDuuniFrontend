import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import "./Login.css";
import { Link } from "react-router-dom";
import googleLogo from "../../assets/web_light_rd_ctn.svg"; // Google logo
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import DevStartLogo from "../../components/DevStartLogo";

const Login = () => {
  const { login, register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password ||
      (isRegistering && !formData.fullName)
    ) {
     setError("Täytä kaikki kentät.");
      return;
    }
    setError("");
    if (isRegistering) {
      const success = await register(formData);
      if (!success) {
        setError("Rekisteröinti epäonnistui. Yritä uudelleen.");
      }
    } else {
      const success = await login({
        email: formData.email,
        password: formData.password,
      });
      if (!success) {
        setError("Väärä salasana tai sähköposti.");
      }
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side - Image and Welcome Text */}
      <div className="auth-image">
        <h1 className="welcome-header">Welcome back</h1>
      </div>

      {/* Top Right Logo */}
      <Link to="/" className="logo-link">
        <DevStartLogo />
      </Link>
      {/* Right Side - Login / Register Form */}
      <div className="auth-form-container">
        {isRegistering ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <h1 className="login-header">Register</h1>
            <div className="login-input-container">
              <AiOutlineUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="auth-input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="login-input-container">
              <AiOutlineMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="auth-input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="login-input-container">
              <AiOutlineLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="auth-input"
                onChange={handleChange}
                required
              />
            </div>
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
            <h1 className="login-header">Log In</h1>
            {error && <p className="auth-error">{error}</p>}

            <div className="login-input-container">
              <AiOutlineMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="auth-input"
                onChange={handleChange}
                required
              />
            </div>
            <div className="login-input-container">
              <AiOutlineLock className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="auth-input"
                onChange={handleChange}
                required
              />
            </div>

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
            <p className="auth-toggle">
              Don't have an account yet?{" "}
              <span onClick={() => setIsRegistering(true)}>Register</span>
            </p>
            {/* Google Login */}
            <button type="button" className="google-button">
              <img src={googleLogo} alt="Google logo" className="google-logo" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
