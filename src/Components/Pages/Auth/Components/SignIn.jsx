import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import MainButton from "../../../Common/Main_Button/MainButton";
import Google from "/Icons/Google.svg";
import { signInSchema } from "../ValidationSchema";
import { SignInHandler } from "../../../../Context/Auth_Provider/AuthHandler";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/Auth_Provider/AuthProvider";
import useGoogleAuth from "../../../../Hooks/useGoogleAuth";

const SignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const { googleHandler } = useGoogleAuth();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <section className="flex p-1 flex-col">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signInSchema}
        onSubmit={(values, { resetForm }) => {
          setIsLoading(true);
          SignInHandler({
            email: values.email,
            password: values.password,
          })
            .then((response) => {
              if (response.user) {
                resetForm();
                toast.success(`Welcome back ${response.user?.displayName}`);
                setIsAuthenticated(true);
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

export default SignIn;
