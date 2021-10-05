import React, { useState } from "react";

import { useHistory } from "react-router";

const SignUp = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      password2: formData.password2,
    };

    fetch("/users/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(data.data);
        history.push("/addnew");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // let readyToSubmit = false;

  if (
    formData.firstname !== "" &&
    formData.lastname !== "" &&
    formData.username !== "" &&
    formData.username.length > 5 &&
    formData.email !== "" &&
    formData.email.includes("@") &&
    formData.email.includes(".") &&
    formData.password !== "" &&
    formData.password.length > 8 &&
    // formData.password2 !== "" &&
    // formData.password2.length > 8 &&
    formData.password === formData.password2
  ) {
    // readyToSubmit = true;
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
            name="firstname"
            onChange={(ev) => {
              setFormData({ ...formData, firstname: ev.target.value });
            }}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={(ev) => {
              setFormData({ ...formData, lastname: ev.target.value });
            }}
            required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(ev) => {
              setFormData({ ...formData, username: ev.target.value });
            }}
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(ev) => {
              setFormData({ ...formData, email: ev.target.value });
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(ev) => {
              setFormData({ ...formData, password: ev.target.value });
            }}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={(ev) => {
              setFormData({ ...formData, password2: ev.target.value });
            }}
            required
          />

          <div>
            <button
              className="home-login-button"
              type="submit"
              // disabled={!readyToSubmit}
            >
              Sign UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
