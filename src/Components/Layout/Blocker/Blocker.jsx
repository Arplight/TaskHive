import { useContext } from "react";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import AddModal from "./Components/AddModal";
import EditModal from "./Components/EditModal";
import DeleteModal from "./Components/DeleteModal";
import ProfileModal from "./Components/ProfileModal";
import TargetModal from "./Components/TargetModal";
import RemoveTargetModal from "./Components/RemoveTargetModal";
import RemoveImageModal from "./Components/RemoveImageModal";

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
      ) : currentBlock === "editModal" ? (
        <EditModal />
      ) : currentBlock === "profileModal" ? (
        <ProfileModal />
      ) : currentBlock === "targetModal" ? (
        <TargetModal />
      ) : currentBlock === "removeTargetModal" ? (
        <RemoveTargetModal />
      ) : (
        currentBlock === "removeImageModal" && <RemoveImageModal />
      )}
    </div>
  );
};

export default Blocker;
