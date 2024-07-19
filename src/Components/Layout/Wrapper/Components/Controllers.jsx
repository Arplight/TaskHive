import React, { useContext } from "react";
import MainButton from "../../../Common/Main_Button/MainButton";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import { ListContext } from "../../../../Context/List_Provider/ListProvider";

const Controllers = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  const { setCurrentFilter, currentFilter } = useContext(ListContext);
  return (
    <section
      className="flex justify-between w-full flex-wrap gap-y-1"
      data-testid="controllers"
    >
      <span className="flex w-full md:w-max justify-center">
        <MainButton
          buttonLabel={"Add a new to-do"}
          isLarge={true}
          isPrimary={false}
          onClick={() => setCurrentBlock("addModal")}
          testId="add-button"
        />
      </span>
      <span className="flex gap-1 items-center w-full md:w-auto justify-center md:justify-start flex-wrap">
        {["All", "To-Do", "Completed"].map((button, index) => (
          <MainButton
            key={index}
            buttonLabel={button}
            isLarge={false}
            isPrimary={currentFilter === button}
            onClick={() => setCurrentFilter(button)}
            testId="filter-button"
          />
        ))}
      </span>
    </section>
  );
};

export default Controllers;
