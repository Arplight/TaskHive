import React from "react";
import Edit from "/Icons/edit.svg";
import Delete from "/Icons/trash.svg";
import PropTypes from "prop-types";
// import Completed from "/Icons/completed.svg";
// import Incomplete from "/Icons/incomplete.svg";

const LargeTable = ({ toDoData, editHandler, deleteHandler }) => {
  return (
    <table className="hidden md:table large-table" data-testid="large-table">
      <thead className="border-b border-[#517ff660]">
        <tr>
          {[
            // "",
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
              {/* <td>
                <div className="w-[34px] h-[34px] bg-[#ffffff] shadow-[#00000040] shadow-md p-[6px] rounded-sm cursor-pointer ">
                  {item.fulfillment === 100 ? (
                    <img
                      src={Incomplete}
                      alt="incomplete"
                      className="w-full h-full object-contain"
                      title={"Mark as incompleted"}
                    />
                  ) : (
                    <img
                      src={Completed}
                      alt="completed"
                      className="w-full h-full object-contain"
                      title={"Mark as completed"}
                    />
                  )}
                </div>
              </td> */}
              <td className="text-small" title={item.name}>
                {item.name}
              </td>
              <td className="text-small" title={item.description}>
                {item.description}
              </td>
              <td className="text-small" title={item.category}>
                {item.category}
              </td>
              <td className="text-small" title={item.date}>
                {item.date?.split("-").join("/")} : {item.time}
              </td>
              <td className="text-small" title={item.priority}>
                {item.priority}
              </td>
              <td className="text-small" title={item.fulfillment + "%"}>
                {item.fulfillment === 100 ? "completed" : "incomplete"}
              </td>
              <td className="text-small flex gap-2 justify-center items-center">
                <div
                  onClick={() => editHandler(item)}
                  className="cursor-pointer"
                  data-testid="edit-table"
                >
                  <img src={Edit} alt="edit-task" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => deleteHandler(item)}
                  data-testid="delete-row"
                >
                  <img src={Delete} alt="remove-task" />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default LargeTable;
LargeTable.propTypes = {
  toDoData: PropTypes.array,
  setCurrentBlock: PropTypes.func,
  deleteHandler: PropTypes.func,
  editHandler: PropTypes.func,
};
