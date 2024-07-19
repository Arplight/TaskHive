import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Controllers from "./Components/Controllers";
import Brand from "./Components/Brand";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/Auth_Provider/AuthProvider";
import { LoadingContext } from "../../../Context/Loading_Provider/LoadingProvider";
import { RingLoader } from "react-spinners";

const Wrapper = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(LoadingContext);

  // Absolute route handler
  useEffect(() => {
    if (currentPath === "/") {
      navigate(isAuthenticated ? "/profile" : "/auth");
    }
  }, [isAuthenticated, currentPath, navigate]);

  return (
    <main
      className={`bg-[#ffffff52] rounded-[30px] p-1 sm:p-2 md:p-5 flex relative ${
        !isAuthenticated && "mt-4"
      }`}
    >
      <div
        className={`m-auto ${
          isLoading && isAuthenticated ? "block" : "hidden"
        }`}
      >
        <RingLoader size={window.innerWidth > 992 ? 120 : 90} color="#ffffff" />
      </div>
      <div
        className={`flex-col items-center gap-2 duration-700 ${
          isLoading && isAuthenticated ? "hidden" : "flex w-full h-full"
        }`}
      >
        <Brand />
        {currentPath === "/list" && <Controllers />}
        <Outlet />
      </div>
    </main>
  );
};

export default Wrapper;
