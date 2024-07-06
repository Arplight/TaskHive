import { useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const Auth = () => {
  const [currentForm, setCurrentForm] = useState("Sign-In");
  return (
    <div className="page-container w-full lg:w-1/2 ">
      <div className="flex  font-primary border-b-2 border-[#517ff6] mb-1">
        {["Sign-In", "Sign-Up"].map((button, index) => (
          <button
            className={`text-large w-1/2 p-1 duration-300 rounded-t-sm ${
              currentForm === button && "button-primary"
            }`}
            key={index}
            onClick={() => setCurrentForm(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div>{currentForm === "Sign-In" ? <SignIn /> : <SignUp />}</div>
    </div>
  );
};

export default Auth;
