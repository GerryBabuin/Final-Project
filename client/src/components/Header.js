import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div className="header">
      <NavLink exact to="/" className="header-menu-links">
        Home
      </NavLink>

      <NavLink to="/signin" className="header-menu-links">
        Sign In
      </NavLink>
    </div>
  );
};

export default Header;
