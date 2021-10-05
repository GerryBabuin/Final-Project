import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = sessionStorage.getItem("user");

  return (
    <div className="header">
      <NavLink exact to="/" className="header-menu-links">
        Home
      </NavLink>

      <div>
        {user ? (
          <div className="header-menu-links">Welcome back {user}</div>
        ) : (
          <NavLink to="/signin" className="header-menu-links">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
