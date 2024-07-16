import { useContext, useEffect } from "react";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import SmallTable from "./Tables/SmallTable";
import LargeTable from "./Tables/LargeTable";
import { ListContext } from "../../../Context/List_Provider/ListProvider";
import NoTasks from "/Icons/no-task.png";

const List = () => {
  // Reading state
  const { setCurrentBlock } = useContext(BlockerContext);
  const { todoData, fetchTasks, setCurrentTodo } = useContext(ListContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handlers
  const deleteHandler = (item) => {
    setCurrentBlock("deleteModal");
    setCurrentTodo(item);
  };
  const editHandler = (item) => {
    setCurrentBlock("editModal");
    setCurrentTodo(item);
  };
  return (
    <div className="page-container w-full overflow-x-scroll">
      {todoData.length > 0 ? (
        <>
          {/* large table */}
          <LargeTable
            toDoData={todoData}
            setCurrentBlock={setCurrentBlock}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
          {/* small table */}
          <SmallTable
            toDoData={todoData}
            setCurrentBlock={setCurrentBlock}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        </>
      ) : (
        <div className="m-auto h-full flex flex-col gap-1 justify-center items-center">
          <img src={NoTasks} alt="No tasks available" />
          <h2 className="font-primary font-bold italic">No tasks yet.</h2>
        </div>
      )}
    </div>
  );
};

export default List;
