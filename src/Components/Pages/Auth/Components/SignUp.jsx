import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import MainButton from "../../../Common/Main_Button/MainButton";
import Google from "/Icons/Google.svg";
import { signUpSchema } from "../ValidationSchema";
import { SignUpHandler } from "../../../../Context/Auth_Provider/AuthHandler";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import useGoogleAuth from "../../../../Hooks/useGoogleAuth";
import { useState } from "react";
const SignUp = ({ setCurrentForm }) => {
  const { googleHandler } = useGoogleAuth();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="flex p-1 flex-col">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);
          SignUpHandler({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          })
            .then((response) => {
              if (response.user) {
                toast.success("Account created successfully");
                resetForm();
                setCurrentForm("Sign-In");
              }
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        {({ isValid, dirty }) => {
          return (
            <Form className="w-full flex flex-col gap-1.5 h-full">
              {/* Fields */}
              <FormInput
                inputType={"text"}
                fieldId={"firstName"}
                fieldName={"firstName"}
                fieldPlaceHolder={"First name"}
              />
              <FormInput
                inputType={"text"}
                fieldId={"lastName"}
                fieldName={"lastName"}
                fieldPlaceHolder={"Last name"}
              />
              <FormInput
                inputType={"email"}
                fieldId={"email"}
                fieldName={"email"}
                fieldPlaceHolder={"Enter your email"}
              />
              <FormInput
                inputType={"password"}
                fieldId={"password"}
                fieldName={"password"}
                fieldPlaceHolder={"Create password"}
              />
              <FormInput
                inputType={"password"}
                fieldId={"passwordConfirmation"}
                fieldName={"passwordConfirmation"}
                fieldPlaceHolder={"Confirm password"}
              />
              {/* Buttons */}
              <MainButton
                buttonLabel={"Sign-up"}
                isPrimary={true}
                buttonStyle={"mt-2"}
                buttonRole={"submit"}
                isDisabled={!isValid || !dirty}
                isLoading={isLoading}
              />
            </Form>
          );
        }}
      </Formik>
      <MainButton
        buttonLabel={"Login with google"}
        isPrimary={false}
        buttonIcon={Google}
        onClick={googleHandler}
        buttonStyle={"mt-1"}
      />
    </section>
  );
};

export default SignUp;
SignUp.propTypes = {
  setCurrentForm: PropTypes.func,
};
