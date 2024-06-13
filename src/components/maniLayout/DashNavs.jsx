import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomNavLink from "../shared/CustomNavLink";

const DashNavs = () => {
  return (
    <>
      <li>
        <Link to="/" className="mx-1">Home</Link>
      </li>
      <li>
        <CustomNavLink to="/login">Login</CustomNavLink>
      </li>
    </>
  );
};

export default DashNavs;
