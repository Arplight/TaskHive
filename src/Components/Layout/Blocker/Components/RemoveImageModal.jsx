import { useContext, useState } from "react";
import { removeImage } from "../../../../Context/Profile_Provider/ProfileHandler";
import { toast } from "react-toastify";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import { ProfileContext } from "../../../../Context/Profile_Provider/ProfileProvider";
import MainButton from "../../../Common/Main_Button/MainButton";

const RemoveImageModal = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  const { fetchProfileImage } = useContext(ProfileContext);

  const [isLoading, setIsLoading] = useState(false);
  function removeHandler() {
    setIsLoading(true);
    removeImage()
      .then((response) => {
        if (response) {
          setCurrentBlock(null);
          toast.success("Profile photo deleted successfully");
          fetchProfileImage();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>Delete profile photo</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <p className="text-large">
          Are you sure you want to delete your profile photo?
        </p>
      </CenteredModal.CenteredModalBody>
      <CenteredModal.CenteredModalFooter withStyle={"flex justify-between"}>
        <MainButton
          buttonLabel={"Delete"}
          isPrimary={true}
          isLarge={false}
          onClick={removeHandler}
          isLoading={isLoading}
        />
        <MainButton
          buttonLabel={"Cancel"}
          withBorder={true}
          isPrimary={false}
          isLarge={false}
          onClick={() => setCurrentBlock(null)}
        />
      </CenteredModal.CenteredModalFooter>
    </CenteredModal>
  );
};

export default RemoveImageModal;
