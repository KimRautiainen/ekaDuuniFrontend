import { useContext, useState } from "react";
import AuthContext from "../../store/AuthContext";
import "./Login.css";
import googleLogo from "../../assets/web_light_rd_ctn.svg"; // Use your downloaded SVG logo

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
          <form className="auth-form">
            <h2>Register</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="auth-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
              onChange={handleChange}
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
