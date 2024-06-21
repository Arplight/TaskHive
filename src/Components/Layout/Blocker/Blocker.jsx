import { useContext } from "react";
import { BlockerContext } from "../../../Context/Blocker_Provider/BlockerProvider";
import CenteredModal from "../../Common/Modals/CenteredModal";
import MainButton from "../../Common/Main_Button/MainButton";
import InputField from "../../Common/Input_Field/InputField";
import RangeInput from "../../Common/Input_Field/RangeInput";

const Blocker = () => {
  const { currentBlock, setCurrentBlock } = useContext(BlockerContext);
  return (
    <div
      className={`blocker ${!currentBlock && "invisible-blocker"}`}
      onClick={() => setCurrentBlock(null)}
    >
      {currentBlock === "addModal" && (
        <CenteredModal>
          <CenteredModal.CenteredModalHeader>
            <h2>Add a new to-do</h2>
          </CenteredModal.CenteredModalHeader>
          <CenteredModal.CenteredModalBody
            withStyle={"flex gap-x-3 gap-y-1 flex-wrap md:flex-nowrap"}
          >
            <span className="flex flex-col w-full md:w-1/2 gap-1.5">
              <InputField
                fieldType="input"
                inputType="text"
                fieldName="name"
                fieldLabel="Name"
                fieldPlaceholder="Enter task name."
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                fieldMaxLength={50}
              />
              <InputField
                fieldType="textarea"
                fieldName="description"
                fieldLabel="Description"
                fieldPlaceholder="A short description of the task."
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                fieldMaxLength={120}
              />

              <InputField
                fieldType="input"
                inputType="text"
                fieldName="category"
                fieldLabel="Category"
                fieldPlaceholder="e.g. household, school, work"
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                fieldMaxLength={50}
              />
              <InputField
                fieldType="input"
                inputType="date"
                fieldName="date"
                fieldLabel="Date"
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
              />
            </span>
            <span className="flex flex-col w-full md:w-1/2 gap-1.5">
              <InputField
                fieldType="input"
                inputType="time"
                fieldName="time"
                fieldLabel="Time"
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
              />
              <InputField
                fieldType="select"
                fieldName="priority"
                fieldLabel="Priority"
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                fieldOptions={["low", "medium", "high"]}
              />
              <RangeInput
                fieldName="duration"
                fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                fieldLabel="Fulfillment"
              />
            </span>
          </CenteredModal.CenteredModalBody>
          <CenteredModal.CenteredModalFooter withStyle={"flex justify-between"}>
            <MainButton
              buttonLabel={"Cancel"}
              withBorder={true}
              isPrimary={false}
              isLarge={false}
              onClick={() => setCurrentBlock(null)}
            />
            <MainButton
              buttonLabel={"Save"}
              isPrimary={true}
              isLarge={false}
              onClick={""}
            />
          </CenteredModal.CenteredModalFooter>
        </CenteredModal>
      )}
    </div>
  );
};

export default Blocker;
