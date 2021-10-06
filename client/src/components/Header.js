import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const user = sessionStorage.getItem("user");

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    sessionStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <div className="header">
      <div>
        {user ? (
          <div className="header-menu-links" onClick={handleClick}>
            log out
          </div>
        ) : (
          <NavLink to="/" className="header-menu-links">
            home
          </NavLink>
        )}
      </div>

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
