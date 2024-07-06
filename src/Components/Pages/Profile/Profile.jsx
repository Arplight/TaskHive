import { TbTargetArrow } from "react-icons/tb";
import { BiTargetLock } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";

import Muhammad from "/Muhammad.jpg";

const Profile = () => {
  const objectives = ["Learn English", "Finish JavaScript course", "Get a job"];

  return (
    <div className="page-container w-full lg:w-1/2 mx-auto">
      <div className="bg-[#517ff6] h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] rounded-full border-4 border-white mx-auto shadow-lg shadow-black/30 overflow-hidden mt-1">
        <img
          src={Muhammad}
          alt="profile-picture"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-primary italic tracking-wider">Muhammad Osama</h2>
        <h3 className="font-primary text-hero italic tracking-wider">
          Software Engineer
        </h3>
        <div className="flex gap-1 items-center justify-center mt-1">
          <TbTargetArrow className="text-[28px]" />
          <h2>Targets</h2>
        </div>
        <ul className=" w-full lg:w-4/5 m-auto mt-1">
          {objectives.map((target, index) => (
            <li
              key={index}
              className="bg-white/60 px-1 py-0.5 mb-1 rounded text-start border-2 border-[#517ff6]/50 flex gap-1 items-center"
              style={{ boxShadow: "3px 3px 2px 0px #517ff650" }}
            >
              <BiTargetLock className="text-[22px] font-primary" />
              <p className="text-small font-primary italic">{target}</p>
            </li>
          ))}
          <button className="p-0.5 w-full bg-[#ffffff]/70 rounded-full font-primary text-large border border-[#517ff6] flex items-center justify-center gap-0.5 mt-2">
            <IoAdd />
            Add new target
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
