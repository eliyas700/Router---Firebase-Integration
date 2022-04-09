import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOutGoogle } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/products">Products</Link>
        <Link to="/register">Register</Link>
        <span> {user?.displayName && user.displayName} </span>
        {user?.uid ? (
          <Link onClick={handleSignOutGoogle} to="/login">
            Log out
          </Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
