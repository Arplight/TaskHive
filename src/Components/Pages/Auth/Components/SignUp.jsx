import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import MainButton from "../../../Common/Main_Button/MainButton";
import Google from "/Icons/Google.svg";
import { signUpSchema } from "../ValidationSchema";

const SignUp = () => {
  return (
    <section className="flex p-1">
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
          console.log(values);
          resetForm();
        }}
      >
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
          />
          <MainButton
            buttonLabel={"Login with google"}
            isPrimary={false}
            buttonIcon={Google}
          />
        </Form>
      </Formik>
    </section>
  );
};

export default SignUp;
