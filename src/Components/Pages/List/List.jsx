import { useContext } from "react";
import { ListContext } from "../../../Context/List_Provider/ListProvider";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import SmallTable from "./Tables/SmallTable";
import LargeTable from "./Tables/LargeTable";

const List = () => {
  const { toDoData } = useContext(ListContext);
  const { setCurrentBlock } = useContext(BlockerContext);

  return (
    <div className="page-container w-full overflow-x-scroll">
      {/* large table */}
      <LargeTable toDoData={toDoData} setCurrentBlock={setCurrentBlock} />
      {/* small table */}
      <SmallTable toDoData={toDoData} setCurrentBlock={setCurrentBlock} />
    </div>
  );
};

export default List;
