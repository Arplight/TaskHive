import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Controllers from "./Components/Controllers";
import Brand from "./Components/Brand";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/Auth_Provider/AuthProvider";

const Wrapper = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  // Absolute route handler
  useEffect(() => {
    if (currentPath === "/") {
      navigate(isAuthenticated ? "/list" : "/auth");
    }
  }, [isAuthenticated, currentPath, navigate]);

  return (
    <main
      className={`bg-[#ffffff52] rounded-[30px] p-1 sm:p-2 md:p-5 flex flex-col items-center gap-2 ${
        !isAuthenticated && "mt-4"
      }`}
    >
      <Brand />
      {currentPath === "/list" && <Controllers />}
      <Outlet />
    </main>
  );
};

export default Wrapper;
