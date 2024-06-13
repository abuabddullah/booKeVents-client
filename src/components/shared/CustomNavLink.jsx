// src/components/NavLink.js
import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "glass mx-1" : "hover:underline mx-1"
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
