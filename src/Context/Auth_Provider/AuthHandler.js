import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const SignUpHandler = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });

    return userCredential;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

export const SignInHandler = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response?.user;
    Cookies.set("userData", JSON.stringify(user));
    return response;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

export const GoogleSignIn = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response?.user;
    Cookies.set("userData", JSON.stringify(user));
    return response;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

export const LogOutHandler = () => {
  Cookies.remove("userData");
  window.location.reload();
};
