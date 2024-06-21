import { Outlet, useLocation } from "react-router-dom";
import Controllers from "./Components/Controllers";
import Brand from "./Components/Brand";

const Wrapper = () => {
  const currentPath = useLocation().pathname.slice(1);
  return (
    <main className="bg-[#ffffff52] rounded-[30px] p-2 md:p-5 flex flex-col items-center gap-2">
      <Brand />
      {currentPath === "list" && <Controllers />}
      <Outlet />
    </main>
  );
};

export default Wrapper;
