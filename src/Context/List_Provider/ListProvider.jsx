import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTasks } from "./ListHandler";
export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentTodo, setCurrentTodo] = useState({});
  const [allTasks, setAllTasks] = useState([]); //All tasks refrence
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    switch (currentFilter) {
      case "Completed":
        setTodoData(allTasks.filter((item) => item.fulfillment === 100));
        break;
      case "To-Do":
        setTodoData(allTasks.filter((item) => item.fulfillment < 100));
        break;

      case "All":
        setTodoData(allTasks);
    }
  }, [currentFilter, allTasks]);

  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks();
      setAllTasks(tasksData);
      setTodoData(tasksData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
        todoData,
        setTodoData,
        fetchTasks,
        currentTodo,
        setCurrentTodo,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
ListProvider.propTypes = {
  children: PropTypes.node,
};
