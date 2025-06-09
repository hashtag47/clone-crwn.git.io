// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
//signInWithGoogleRedirect has some issues which I couldn't solve at this stage
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
