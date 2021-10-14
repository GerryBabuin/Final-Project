import React from "react";
import { Link } from "react-router-dom";
import Pepper from "../images/mockup-graphics-XxaIHwP5lsE-unsplash.png";

const Confirmation = () => {
  const user = sessionStorage.getItem("user");
   
  return (
    <div className="grid">
      <div className="main-content">
      <img src={Pepper} className="import-pic" alt="hot pepper" />
    <p>Recipe successfully deleted</p>
    <Link to={`/recipes/${user}`}>
      <button className="clear-button">My Recipes</button>
      </Link>
      </div>
      </div>
  );
};

export default Confirmation;
