import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const { handleSignInGoogle } = useFirebase();
  return (
    <div>
      <h3>Please Log In to Continue</h3>
      <button onClick={handleSignInGoogle}>Google Sign In</button>
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
