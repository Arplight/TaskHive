import { useContext, useEffect } from "react";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import SmallTable from "./Tables/SmallTable";
import LargeTable from "./Tables/LargeTable";
import { ListContext } from "../../../Context/List_Provider/ListProvider";
import NoTasks from "/Icons/no-task.png";
import { LoadingContext } from "../../../Context/Loading_Provider/LoadingProvider";

const List = () => {
  // Reading state
  const { setCurrentBlock } = useContext(BlockerContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { todoData, fetchTasks, setCurrentTodo, isFulFilled } =
    useContext(ListContext);
  // Fetching
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
  // Loading Handler
  useEffect(() => {
    if (isFulFilled) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [todoData]);
  return (
    <div className="page-container w-full overflow-x-scroll">
      {todoData && todoData.length > 0 ? (
        <>
          {/* large table */}
          <LargeTable
            toDoData={todoData}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
          {/* small table */}
          <SmallTable
            toDoData={todoData}
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
