import React from "react";
import { useState, useContext } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  console.log(formFields);

  const signInWithGoogle = async () => {
    // const response =
    await signInWithGooglePopup();
    // In my opinion, if we don't use Firebase to automatically offer us the onAuthChange method
    // We should manually use useContext line by line to control how the authentication flow works
    // setCurrentUser(response.user);
    // await createUserDocumentFromAuth(response.user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
