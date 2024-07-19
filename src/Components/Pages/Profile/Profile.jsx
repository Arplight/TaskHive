import { TbTargetArrow } from "react-icons/tb";
import { BiTargetLock } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import ProfilePic from "/Icons/Profile.svg";
import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../../Context/Profile_Provider/ProfileProvider";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Cookies from "js-cookie";

import { LoadingContext } from "../../../Context/Loading_Provider/LoadingProvider";
const Profile = () => {
  // Loading state
  const { setIsLoading } = useContext(LoadingContext);
  // Reading state
  const {
    professionData,
    targetData,
    profileImage,
    setCurrentTarget,
    fetchProfession,
    fetchTarget,
    fetchProfileImage,
    isFulFilled,
  } = useContext(ProfileContext);
  const { setCurrentBlock } = useContext(BlockerContext);
  // Fetching data
  useEffect(() => {
    fetchProfession();
    fetchTarget();
    fetchProfileImage();
  }, []);
  // Handlers
  function profileEditHandler(currentModal) {
    setCurrentBlock(currentModal);
  }
  function targetRemoveHandler(target) {
    setCurrentBlock("removeTargetModal");
    setCurrentTarget(target);
  }
  // Loading handler
  useEffect(() => {
    if (isFulFilled) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [isFulFilled]);
  return (
    <div className="page-container w-full lg:w-1/2 mx-auto relative">
      <button
        className="absolute top-[10px] right-[10px]"
        data-testid="edit-button"
        onClick={() => profileEditHandler("profileModal")}
      >
        <FaRegEdit
          className="text-[#517ff6]"
          size={26}
          data-testid="edit-icon"
        />
      </button>

      <div className="bg-[#517ff6] h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] rounded-full border-4 border-white mx-auto shadow-lg shadow-black/30 overflow-hidden mt-1 relative">
        <img
          src={profileImage ? profileImage : ProfilePic}
          alt="profile-picture"
          className="w-full h-full object-cover object-center"
        />
        {profileImage && (
          <button
            className="absolute bottom-[-1px] left-[45%] bg-[#ffffff] rounded-t-sm"
            onClick={() => setCurrentBlock("removeImageModal")}
          >
            <TiDelete className="text-[18px] text-[#517ff6]" />
          </button>
        )}
      </div>
      <div className="text-center mt-2">
        <h2 className="font-primary italic tracking-wider">
          {Cookies.get("userData") &&
            JSON.parse(Cookies.get("userData"))?.displayName}
        </h2>
        <h3 className="font-primary text-hero italic tracking-wider leading-[40px] mt-0.5">
          {professionData && professionData}
        </h3>
        <div className="flex gap-1 items-center justify-center mt-2">
          <TbTargetArrow className="text-[28px]" />
          <h2>Targets</h2>
        </div>
        <ul className=" w-full lg:w-4/5 m-auto mt-1">
          {targetData &&
            targetData?.map((target, index) => (
              <li
                key={index}
                className="bg-white/60 px-1 py-0.5 mb-1 rounded text-start border-2 border-[#517ff6]/50 flex gap-1 items-center"
                style={{ boxShadow: "3px 3px 2px 0px #517ff650" }}
              >
                <BiTargetLock className="text-[22px] font-primary" />
                <p className="text-small font-primary italic">{target.name}</p>
                <button
                  className="text-[18px] font-primary ml-auto"
                  onClick={() => targetRemoveHandler(target)}
                  data-testid="remove-target"
                >
                  <IoIosRemoveCircleOutline />
                </button>
              </li>
            ))}
          <button
            className="p-0.5 w-full bg-[#ffffff]/70 rounded-full font-primary text-large border border-[#517ff6] flex items-center justify-center gap-0.5 mt-2"
            onClick={() => profileEditHandler("targetModal")}
            data-testid="add-target"
          >
            <IoAdd />
            Add new target
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
