import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import { JobProvider } from "./contexts/JobContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <LoadingProvider>
        <JobProvider>
          <App />
        </JobProvider>
      </LoadingProvider>
    </AuthProvider>
  </BrowserRouter>
);
