import { createContext, useState } from "react";
import PropTypes from "prop-types";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // Function to start loading
  const startLoading = () => setLoading(true);

  // Function to stop loading
  const stopLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// ✅ PropTypes validation
LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};



export default LoadingContext;
