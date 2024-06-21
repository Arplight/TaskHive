import { useContext } from "react";
import { ListContext } from "../../../Context/List_Provider/ListProvider";
import Edit from "/Icons/edit.svg";
import Delete from "/Icons/trash.svg";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";

const List = () => {
  const { toDoData } = useContext(ListContext);
  const { setCurrentBlock } = useContext(BlockerContext);

  return (
    <div className="page-container w-full overflow-x-scroll">
      <table className="">
        <thead>
          <tr>
            {[
              "ID",
              "Task",
              "Description",
              "Category",
              "When",
              "Priority",
              "Fulfillment",
              "Actions",
            ].map((header, index) => (
              <th className="text-large" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* List items */}
          {toDoData &&
            toDoData.map((item) => (
              <tr key={item.id}>
                <td className="text-small" title={item.id}>
                  {item.id}
                </td>
                <td className="text-small" title={item.title}>
                  {item.title}
                </td>
                <td className="text-small" title={item.description}>
                  {item.description}
                </td>
                <td className="text-small" title={item.category}>
                  {item.category}
                </td>
                <td className="text-small" title={item.when}>
                  {item.when}
                </td>
                <td className="text-small" title={item.priority}>
                  {item.priority}
                </td>
                <td className="text-small" title={item.fulfillment}>
                  {item.fulfillment}
                </td>
                <td className="text-small flex gap-2 justify-center items-center cursor-pointer">
                  <div onClick={() => setCurrentBlock("editModal")}>
                    <img src={Edit} alt="edit-task" />
                  </div>
                  <div>
                    <img src={Delete} alt="remove-task" />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
