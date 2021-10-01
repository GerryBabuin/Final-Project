import React, { useState } from "react";

import { useHistory } from "react-router";

const SignUp = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    fetch("/users/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem("username", formData.username);
        } else {
          alert("Sorry, that username has been taken.");
        }
      });

    history.push("/recipes");
  };

  let readyToSubmit = false;

  if (
    formData.firstName !== "" &&
    formData.lastName !== "" &&
    formData.username !== "" &&
    formData.username.length > 5 &&
    formData.email !== "" &&
    formData.email.includes("@") &&
    formData.email.includes(".") &&
    formData.password !== "" &&
    formData.password.length > 7 &&
    formData.confirmPassword !== "" &&
    formData.confirmPassword.length > 7 &&
    formData.password === formData.confirmPassword
  ) {
    readyToSubmit = true;
  }

  return (
    <div className="grid">
      <div className="main-content">
        <h2>We are very happy you've decided to join our family</h2>
        <p>Please provide the following info:</p>
        <form onSubmit={handleClick}>
          <button className="clear-button" type="reset">
            Clear Form
          </button>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(ev) => {
              setFormData({ ...formData, firstName: ev.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(ev) => {
              setFormData({ ...formData, lastName: ev.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Username"
            name="userName"
            onChange={(ev) => {
              setFormData({ ...formData, userName: ev.target.value });
            }}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(ev) => {
              setFormData({ ...formData, email: ev.target.value });
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

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            onChange={(ev) => {
              setFormData({ ...formData, confirmPassword: ev.target.value });
            }}
          />

          <div>
            {readyToSubmit ? (
              <button className="home-login-button" type="submit">
                Sign UP
              </button>
            ) : (
              <button className="home-login-button" type="submit" disabled>
                Sign UP
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
