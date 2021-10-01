import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  return (
    <nav>
      <NavLink exact to="/">
        <img src="/assets/headerLogo.png" alt="Logo" />
      </NavLink>
      <NavLink exact to="/">
        Home
      </NavLink>

      {user ? (
        <>
          <NavLink to="/account">Account</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
