import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import JobAdCreating from "./pages/JobAdCreating";
import EditProfile from "./pages/EditProfile";
import JobListPage from "./pages/JobListPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobListPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/jobadcreating" element={<JobAdCreating />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
