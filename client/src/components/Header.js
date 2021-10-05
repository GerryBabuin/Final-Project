import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = sessionStorage.getItem("user");

  return (
    <div className="header">
      <NavLink exact to="/" className="header-menu-links">
        home
      </NavLink>

      <div>
        {user ? (
          <p className="header-menu-p">
            happy cooking <span className="username">{user}</span>
          </p>
        ) : (
          <NavLink to="/signin" className="header-menu-links">
            sign in
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
