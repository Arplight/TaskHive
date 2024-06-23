import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [toDoData, setToDoData] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet.",
      category: "Work",
      when: "Tomorrow",
      priority: "High",
      fulfillment: "Incomplete",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Consectetur adipiscing elit.",
      category: "Personal",
      when: "Next Week",
      priority: "Medium",
      fulfillment: "Incomplete",
    },
    {
      id: 2,
      title: "Task 3",
      description: "Consectetur adipiscing elit.",
      category: "Personal",
      when: "Next Week",
      priority: "Medium",
      fulfillment: "Completed",
    },
    {
      id: 2,
      title: "Task 4",
      description: "Consectetur adipiscing elit.",
      category: "Personal",
      when: "Next Week",
      priority: "Medium",
      fulfillment: "Incomplete",
    },
  ]);

  return (
    <ListContext.Provider value={{ toDoData }}>{children}</ListContext.Provider>
  );
};

export default ListProvider;
ListProvider.propTypes = {
  children: PropTypes.node,
};
