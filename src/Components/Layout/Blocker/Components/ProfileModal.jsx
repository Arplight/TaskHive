import { useContext, useRef, useState } from "react";
import CenteredModal from "../../../Common/Modals/CenteredModal";
import { Form, Formik } from "formik";
import MainButton from "../../../Common/Main_Button/MainButton";
import InputField from "../../../Common/Input_Field/InputField";
import { toast } from "react-toastify";
import { BlockerContext } from "../../../../Context/Blocker_Provider/BlockerProvider";
import * as Yup from "yup";
import {
  storeImage,
  storeProfession,
} from "../../../../Context/Profile_Provider/ProfileHandler";
import { ProfileContext } from "../../../../Context/Profile_Provider/ProfileProvider";
const ProfileModal = () => {
  // Reading state
  const { setCurrentBlock } = useContext(BlockerContext);
  const { fetchProfile, fetchProfileImage } = useContext(ProfileContext);
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
        <h2>My profile</h2>
      </CenteredModal.CenteredModalHeader>
      <CenteredModal.CenteredModalBody>
        <Formik
          innerRef={formikRef}
          initialValues={{
            profession: "",
            profilePicture: "",
          }}
          validationSchema={Yup.object().shape({
            profession: Yup.string()
              .min(3, "Profession should be at least 3 characters.")
              .max(80, "Profession shouldn't exceed 80 characters.")
              .trim(),
            profilePicture: Yup.mixed().test(
              "fileType",
              "Unsupported file format",
              (value) =>
                value
                  ? ["image/png", "image/jpg", "image/jpeg"].includes(
                      value.type
                    )
                  : true
            ),
          })}
          onSubmit={(values, { resetForm }) => {
            setIsLoading(true);
            values.profilePicture &&
              storeImage(values.profilePicture)
                .then((response) => {
                  if (response) {
                    toast.success("Profile picture updated successfully");
                    fetchProfileImage();
                  }
                })
                .finally(() => {
                  setIsLoading(false);
                  setCurrentBlock(null);
                });
            values.profession &&
              storeProfession({ profession: values.profession })
                .then((response) => {
                  if (response) {
                    resetForm();
                    toast.success("Profession updated successfully");
                    fetchProfile();
                  }
                })
                .finally(() => {
                  setIsLoading(false);
                  setCurrentBlock(null);
                });
          }}
        >
          {({ setFieldValue, isValid, dirty }) => {
            setFormIsValid(isValid && dirty ? true : false);
            return (
              <Form className="flex flex-col gap-2">
                <InputField
                  fieldType="input"
                  inputType="text"
                  fieldName="profession"
                  fieldLabel="Profession"
                  fieldPlaceholder="Type your profession."
                  fieldStyle={"grow ml-1"}
                  fieldMaxLength={81}
                />
                <InputField
                  fieldLabel="Photo"
                  fieldName="profilePicture"
                  fieldType="file"
                  fieldStyle={"grow ml-1"}
                  onChange={(e) =>
                    setFieldValue("profilePicture", e.currentTarget.files[0])
                  }
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
          isDisabled={isLoading || !formIsValid}
          isLoading={isLoading}
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

export default ProfileModal;
