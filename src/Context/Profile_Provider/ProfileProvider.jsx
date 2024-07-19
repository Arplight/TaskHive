import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getImage, getProfession, getTarget } from "./ProfileHandler";
// import Cookies from "js-cookie";
export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [professionData, setProfessionData] = useState(null);
  const [targetData, setTargetData] = useState(null);
  const [currentTarget, setCurrentTarget] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isFulFilled, setIsFulFilled] = useState(false);

  useEffect(() => {
    if (
      professionData !== null &&
      targetData !== null &&
      profileImage !== null
    ) {
      setIsFulFilled(true);
    } else {
      setIsFulFilled(false);
    }
  }, [professionData, profileImage, targetData]);

  async function fetchProfession() {
    try {
      const data = await getProfession();
      setProfessionData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchTarget() {
    try {
      const data = await getTarget();
      setTargetData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchProfileImage() {
    try {
      const image = await getImage();

      setProfileImage(
        image
        // ? image
        // : Cookies.get("userData")
        // ? JSON.parse(Cookies.get("userData"))?.photoURL
        // : null
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ProfileContext.Provider
      value={{
        professionData,
        targetData,
        profileImage,
        currentTarget,
        setCurrentTarget,
        fetchProfession,
        fetchTarget,
        fetchProfileImage,
        isFulFilled,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
ProfileProvider.propTypes = {
  children: PropTypes.node,
};
