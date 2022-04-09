import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <h3>Please Log In to Continue</h3>
      <button onClick={() => signInWithGoogle()}>Google Sign In</button>
      <form>
        <input type="email" name="" id="" placeholder="Type Your Email" />
        <br />
        <input type="password" name="" placeholder="Your Password" id="" />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default Login;
