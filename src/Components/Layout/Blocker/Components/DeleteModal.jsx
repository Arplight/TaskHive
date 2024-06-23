import { useContext } from "react";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import MainButton from "../../../Common/Main_Button/MainButton";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";

const DeleteModal = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>Delete this to-do</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <p className="text-large">
          Are you sure you want to delete this to-do?
        </p>
      </CenteredModal.CenteredModalBody>
      <CenteredModal.CenteredModalFooter withStyle={"flex justify-between"}>
        <MainButton
          buttonLabel={"Cancel"}
          withBorder={true}
          isPrimary={false}
          isLarge={false}
          onClick={() => setCurrentBlock(null)}
        />
        <MainButton
          buttonLabel={"Delete"}
          isPrimary={true}
          isLarge={false}
          onClick={""}
        />
      </CenteredModal.CenteredModalFooter>
    </CenteredModal>
  );
};
export default DeleteModal;
