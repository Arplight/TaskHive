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
      <div className={`m-auto ${isLoading && isAuthenticated ? "visible" : "invisible absolute"}`}>
        <RingLoader size={120} color="#ffffff" />
      </div>
      <div
        className={`flex flex-col items-center gap-2 w-full h-full duration-300 ${
          isLoading && isAuthenticated
            ? "invisible absolute w-[0px] h-[0px] opacity-0 "
            : "visible opacity-100 "
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
