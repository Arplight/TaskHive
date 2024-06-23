import Edit from "/Icons/edit.svg";
import Delete from "/Icons/trash.svg";
import PropTypes from "prop-types";
import Completed from "/Icons/completed.svg";
import Incomplete from "/Icons/incomplete.svg";

const SmallTable = ({ toDoData, setCurrentBlock }) => {
  return (
    toDoData &&
    toDoData.map((item) => (
      <table
        className="md:hidden small-table shadow-[#00000030] shadow-lg"
        key={item.id}
      >
        <caption className="text-large font-primary font-bold	 italic mb-0.5">
          <div className="w-[26px] h-[26px] bg-[#ffffff] shadow-[#00000040] shadow-md p-[4px] rounded-sm cursor-pointer mb-0.5">
            {item.fulfillment === "Completed" ? (
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
          {item.title}
        </caption>
        <tbody>
          {/* List items */}

          <tr key={`${item.id}-description`}>
            <td className="text-large" title={item.description}>
              Description
            </td>
            <td className="text-small" title={item.description}>
              {item.description}
            </td>
          </tr>
          <tr key={`${item.id}-category`}>
            <td className="text-large" title={item.category}>
              Category
            </td>
            <td className="text-small" title={item.category}>
              {item.category}
            </td>
          </tr>
          <tr key={`${item.id}-when`}>
            <td className="text-large" title={item.when}>
              When
            </td>
            <td className="text-small" title={item.when}>
              {item.when}
            </td>
          </tr>
          <tr key={`${item.id}-priority`}>
            <td className="text-large" title={item.priority}>
              Priority
            </td>
            <td className="text-small" title={item.priority}>
              {item.priority}
            </td>
          </tr>
          <tr key={`${item.id}-fulfillment`}>
            <td className="text-large" title={item.fulfillment}>
              Fulfillment
            </td>
            <td className="text-small" title={item.fulfillment}>
              {item.fulfillment}
            </td>
          </tr>
          <tr key={`${item.id}-actions`}>
            <td className="text-large" title={item.fulfillment}>
              Actions
            </td>
            <td className="flex gap-2 items-center" title={item.fulfillment}>
              <div onClick={() => setCurrentBlock("editModal")}>
                <img src={Edit} alt="edit-task" />
              </div>
              <div onClick={() => setCurrentBlock("deleteModal")}>
                <img src={Delete} alt="remove-task" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ))
  );
};

export default SmallTable;
SmallTable.propTypes = {
  toDoData: PropTypes.array,
  setCurrentBlock: PropTypes.func,
};
