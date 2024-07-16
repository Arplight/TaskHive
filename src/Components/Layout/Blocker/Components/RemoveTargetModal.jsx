import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import MainButton from "../../../Common/Main_Button/MainButton";
import { removeTarget } from "../../../../Context/Profile_Provider/ProfileHandler";
import { ProfileContext } from "../../../../Context/Profile_Provider/ProfileProvider";

const RemoveTargetModal = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  const { currentTarget, fetchTarget } = useContext(ProfileContext);

  const [isLoading, setIsLoading] = useState(false);
  function removeHandler() {
    setIsLoading(true);
    removeTarget(currentTarget.id)
      .then((response) => {
        if (response) {
          setCurrentBlock(null);
          toast.success("Target deleted successfully");
          fetchTarget();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>{currentTarget?.name}</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <p className="text-large">
          Are you sure you want to delete this target?
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

export default RemoveTargetModal;
