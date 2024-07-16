import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
LoadingProvider.propTypes = {
  children: PropTypes.node,
};
