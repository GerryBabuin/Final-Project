import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Tomato from "../images/mockup-graphics-lDhhUl3Gp3Q-unsplash.png";

const SignIn = ({ setSignedInUser }) => {
  // set state from the event input
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  // retrieving the user data from session storage
  const user = sessionStorage.getItem("user");

  // retrieving the user data from session storage
  const history = useHistory();

  // doesn't allow user to go the signin page after logging in
  useEffect(() => {
    if (user) {
    }
  }, [history, user]);

  // submits/posts the info to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    fetch("/users/signin", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setSignedInUser(data.data);
          window.sessionStorage.setItem("user", data.data.username);
          history.push(`/recipes/${data.data.username}`);
        } else {
          alert("User doesn't exist");
        }
      });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are we cooking today?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            required
          />

          <div>
            {/* {readyToSubmit ? ( */}
            <button className="home-login-button" type="submit">
              SIGNIN
            </button>
            {/* ) : (
              <button className="home-login-button" type="submit" disabled>
                SIGN IN
              </button>
            )} */}
          </div>
        </form>
        <img src={Tomato} className="login-pic" alt="tomatoes" />
      </div>
    </div>
  );
};

export default SignIn;
