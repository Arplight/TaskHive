import * as Yup from "yup";

const emailValidation = Yup.string()
  .required("Email is required.")
  .email("Invalid email address")
  .trim();
const passwordValidation = Yup.string()
  .matches(/[a-z]/, "Password must contain at least 1 lower case letter")
  .matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
  .matches(/[0-9]/, "Password must contain at least 1 number")
  .min(8, "Password must contain at least 8 characters")
  .required("Password is required.")
  .trim();

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required.")
    .min(3, "First name should be at least 3 characters")
    .max(30, "First name should not exceed 30 characters.")
    .trim(),
  lastName: Yup.string()
    .required("Last name is required.")
    .min(3, "Last name should be at least 3 characters")
    .max(30, "Last name should not exceed 30 characters.")
    .trim(),
  email: emailValidation,
  password: passwordValidation,
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required."),
});

export const signInSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
