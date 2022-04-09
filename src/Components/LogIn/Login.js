import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h3>Please Log In to Continue</h3>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
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
