import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Cookies.get("userData")
      ? JSON.parse(Cookies.get("userData"))?.stsTokenManager?.accessToken
      : null
  );
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
