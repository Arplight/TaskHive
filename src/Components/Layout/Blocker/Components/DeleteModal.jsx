import { useContext, useState } from "react";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import MainButton from "../../../Common/Main_Button/MainButton";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import { ListContext } from "../../../../Context/List_Provider/ListProvider";
import { removeTask } from "../../../../Context/List_Provider/ListHandler";
import { toast } from "react-toastify";

const DeleteModal = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  const { currentTodo, fetchTasks } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(false);
  function removeHandler() {
    setIsLoading(true);
    removeTask(currentTodo.id)
      .then((response) => {
        if (response) {
          setCurrentBlock(null);
          toast.success("Task deleted successfully");
          fetchTasks();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>{currentTodo.name}</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <p className="text-large">
          Are you sure you want to delete this to-do?
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
export default DeleteModal;
