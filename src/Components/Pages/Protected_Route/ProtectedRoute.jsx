import { useContext } from "react";
import { AuthContext } from "../../../Context/Auth_Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
