// ✅ Helper function to get token dynamically (avoiding stale token issues)
export const getAuthConfig = (isMultipart = false) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("❌ No authentication token found!");
    return null;
  }

  return {
    headers: {
      ...(isMultipart
        ? {} // Let axios set Content-Type automatically for multipart
        : { "Content-Type": "application/json" }),
      Authorization: `Bearer ${token}`,
    },
  };
};