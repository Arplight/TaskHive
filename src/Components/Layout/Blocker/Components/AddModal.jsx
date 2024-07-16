import { useContext, useRef, useState } from "react";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import InputField from "../../../Common/Input_Field/InputField";
import MainButton from "../../../Common/Main_Button/MainButton";
import RangeInput from "../../../Common/Input_Field/RangeInput";
import { Form, Formik } from "formik";
import { addTask } from "../../../../Context/List_Provider/ListHandler";
import { toast } from "react-toastify";
import { taskSchema } from "./ValidationSchema";
import { ListContext } from "../../../../Context/List_Provider/ListProvider";

const AddModal = () => {
  const { setCurrentBlock } = useContext(BlockerContext);
  const { fetchTasks } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const formikRef = useRef(null);
  const handleSaveClick = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>Add a new to-do</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <Formik
          innerRef={formikRef}
          initialValues={{
            name: "",
            description: "",
            category: "",
            date: "",
            time: "",
            priority: "low",
            fulfillment: 0,
          }}
          validationSchema={taskSchema}
          onSubmit={(values, { resetForm }) => {
            setIsLoading(true);
            addTask(values)
              .then((response) => {
                if (response.firestore) {
                  resetForm();
                  toast.success("Task added successfully");
                  fetchTasks();
                }
              })
              .finally(() => {
                setIsLoading(false);
                setCurrentBlock(null);
              });
          }}
        >
          {({ values, isValid, dirty }) => {
            setFormIsValid(isValid && dirty ? true : false);
            return (
              <Form className="flex gap-x-3 gap-y-2 flex-wrap md:flex-nowrap">
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
                    fieldName="fulfillment"
                    fieldStyle={"ml-auto w-3/5 md:w-1/2"}
                    fieldLabel="Fulfillment"
                    currentValue={values.fulfillment}
                  />
                </span>
              </Form>
            );
          }}
        </Formik>
      </CenteredModal.CenteredModalBody>
      <CenteredModal.CenteredModalFooter withStyle={"flex justify-between"}>
        <MainButton
          buttonLabel={"Save"}
          isPrimary={true}
          isLarge={false}
          onClick={handleSaveClick}
          isLoading={isLoading}
          isDisabled={isLoading || !formIsValid}
        />
        <MainButton
          buttonLabel={"Cancel"}
          withBorder={true}
          isPrimary={false}
          isLarge={false}
          onClick={() => setCurrentBlock(null)}
        />
      </CenteredModal.CenteredModalFooter>
    </CenteredModal>
  );
};

export default AddModal;
