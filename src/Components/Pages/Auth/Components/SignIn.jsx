import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import MainButton from "../../../Common/Main_Button/MainButton";
import Google from "/Icons/Google.svg";
import { signInSchema } from "../ValidationSchema";
const SignIn = () => {
  return (
    <section className="flex p-1">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signInSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className="w-full flex flex-col gap-1.5 h-full">
          {/* Fields */}

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
            fieldPlaceHolder={"Enter your password"}
          />

          {/* Buttons */}
          <MainButton
            buttonLabel={"Sign-in"}
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

export default SignIn;
