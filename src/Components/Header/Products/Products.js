import { getAuth } from "firebase/auth";
import React from "react";
import app from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h4>{user && user.displayName}</h4>
    </div>
  );
};

export default Products;
