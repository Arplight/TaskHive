import { useContext } from "react";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import AddModal from "./Components/AddModal";
import EditModal from "./Components/EditModal";
import DeleteModal from "./Components/DeleteModal";

const Blocker = () => {
  const { currentBlock, setCurrentBlock } = useContext(BlockerContext);
  return (
    <div
      className={`blocker ${!currentBlock && "invisible-blocker"}`}
      onClick={() => setCurrentBlock(null)}
    >
      {currentBlock === "addModal" ? (
        <AddModal />
      ) : currentBlock === "deleteModal" ? (
        <DeleteModal />
      ) : (
        currentBlock === "editModal" && <EditModal />
      )}
    </div>
  );
};

export default Blocker;
