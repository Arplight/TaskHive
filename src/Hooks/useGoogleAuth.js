import { toast } from "react-toastify";
import { GoogleSignIn } from "../Context/Auth_Provider/AuthHandler";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth_Provider/AuthProvider";

const useGoogleAuth = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  function googleHandler() {
    GoogleSignIn().then((response) => {
      if (response.user) {
        toast.success(`Welcome back ${response.user?.displayName}`);
        setIsAuthenticated(true);
      }
    });
  }

  return { googleHandler };
};

export default useGoogleAuth;
