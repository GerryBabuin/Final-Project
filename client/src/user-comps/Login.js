import React, { useState } from "react";
import { useHistory } from "react-router";
import Tomato from "../images/mockup-graphics-lDhhUl3Gp3Q-unsplash.png";

const SignIn = ({ getUserData }) => {
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const data = {
      username: formData.username,
      password: formData.password,
    };

    fetch("user/me", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        getUserData().then(() => history.push("/"));
      } else {
        alert("Username or password is incorrect.");
      }
    });
  };

  let readyToSubmit = false;

  if (formData.username !== "" && formData.password !== "") {
    readyToSubmit = true;
  }

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are we cooking today?</h2>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(ev) => {
              setFormData({ ...formData, username: ev.target.value });
            }}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(ev) => {
              setFormData({ ...formData, password: ev.target.value });
            }}
          />

          <div>
            {readyToSubmit ? (
              <button className="home-login-button" type="submit">
                SIGNIN
              </button>
            ) : (
              <button className="home-login-button" type="submit" disabled>
                SIGN IN
              </button>
            )}
          </div>
        </form>
        <img src={Tomato} className="login-pic" />
      </div>
    </div>
  );
};

export default SignIn;
