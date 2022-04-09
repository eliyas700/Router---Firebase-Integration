import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h4>Hey Dude This is your Home</h4>
      <p>
        It's Me your Bro :{" "}
        <h5>{user ? user.displayName : "Vooooooooooooot"}</h5>
      </p>
    </div>
  );
};

export default Home;
