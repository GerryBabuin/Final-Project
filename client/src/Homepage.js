import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import MainPic from "./images/cinnamon-orange.jpg";
import Logo from "./components/images/logo.svg";

const HomePage = () => {
  return (
    <div className="grid">
      <div className="main-content">
        <img
          className="logo"
          src={Logo}
          height="72rem"
          width="auto"
          alt="cinnamon logo"
        />
        <img
          className="home-image"
          src={MainPic}
          width="80%"
          height="auto"
          alt=""
        />
        <h1>welcome</h1>
        <p>a home for your family treasures</p>
        <p>
          not a part of our family?
          <Link to="/signup" className="join-link">
            <button className="home-login-button">join us</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
