import { useContext } from "react";
import AuthContext, { AuthProvider } from "../store/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>

      {user ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Hello, {user.name} 👋</h2>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/profile"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View Profile
          </Link>
          <Link
            to="/jobs"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
