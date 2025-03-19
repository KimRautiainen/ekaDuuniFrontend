// ✅ Helper function to get token dynamically (avoiding stale token issues)
export const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("❌ No authentication token found!");
    return null;
  }

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
