import { useContext } from "react";
import MainButton from "../../../Common/Main_Button/MainButton";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";

const Controllers = () => {
  const { setCurrentBlock } = useContext(BlockerContext);

  return (
    <section className="flex justify-between w-full flex-wrap gap-y-2">
      <span className="flex">
        <MainButton
          buttonLabel={"Add a new to-do"}
          isLarge={true}
          isPrimary={false}
          onClick={() => setCurrentBlock("addModal")}
        />
      </span>
      <span className="flex gap-x-2 items-center w-full md:w-auto justify-center md:justify-start">
        <MainButton
          buttonLabel={"All"}
          isLarge={false}
          isPrimary={true}
          onClick={""}
        />
        <MainButton
          buttonLabel={"To-do"}
          isLarge={false}
          isPrimary={false}
          onClick={""}
        />
        <MainButton
          buttonLabel={"Completed"}
          isLarge={false}
          isPrimary={false}
          onClick={""}
        />
      </span>
    </section>
  );
};

export default Controllers;
