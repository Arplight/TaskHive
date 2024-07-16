import { useContext, useRef, useState } from "react";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import { Form, Formik } from "formik";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import * as Yup from "yup";
import InputField from "../../../Common/Input_Field/InputField";
import MainButton from "../../../Common/Main_Button/MainButton";
import { storeTarget } from "../../../../Context/Profile_Provider/ProfileHandler";
import { toast } from "react-toastify";
import { ProfileContext } from "../../../../Context/Profile_Provider/ProfileProvider";

const TargetModal = () => {
  // Reading state
  const { setCurrentBlock } = useContext(BlockerContext);
  const { fetchTarget } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const formikRef = useRef(null);

  // Handlers
  const handleSaveClick = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  return (
    <CenteredModal>
      <CenteredModal.CenteredModalHeader>
        <h2>Add Target</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <Formik
          innerRef={formikRef}
          initialValues={{
            target: "",
          }}
          validationSchema={Yup.object().shape({
            target: Yup.string()
              .min(3, "Target should be at least 3 characters.")
              .max(100, "Target shouldn't exceed 100 characters.")
              .trim(),
          })}
          onSubmit={(values, { resetForm }) => {
            setIsLoading(true);
            storeTarget({ name: values.target })
              .then((response) => {
                if (response.firestore) {
                  resetForm();
                  toast.success("Target added successfully");
                  fetchTarget();
                }
              })
              .finally(() => {
                setIsLoading(false);
                setCurrentBlock(null);
              });
          }}
        >
          {({ isValid, dirty }) => {
            setFormIsValid(isValid && dirty ? true : false);
            return (
              <Form>
                <InputField
                  fieldType="input"
                  inputType="text"
                  fieldName="target"
                  fieldLabel="Target"
                  fieldPlaceholder="Enter your target."
                  fieldStyle={"grow ml-1"}
                  fieldMaxLength={101}
                />
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

export default TargetModal;
