import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.config";
import CustomNavLink from "../shared/CustomNavLink";

const DashNavs = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogOut = async () => {
    const success = await signOut();
    if (success) {
      toast.success("You are Successfully sign out!");
      // and remove token from the local storage
      localStorage.removeItem("token");
    }
  };
  return (
    <>
      <li>
        <Link to="/" className="mx-1">
          Home
        </Link>
      </li>

      {user && (
        <li>
          <CustomNavLink to="/my-events">My events</CustomNavLink>
        </li>
      )}
      {user ? (
        <li
          onClick={handleLogOut}
          className="glass mx-1 hover:underline hover:cursor-pointer btn"
        >
          Logout
        </li>
      ) : (
        <li>
          <CustomNavLink to="/login">Login</CustomNavLink>
        </li>
      )}
    </>
  );
};

export default DashNavs;
