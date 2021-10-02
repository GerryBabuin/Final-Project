import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Pepper from "../images/mockup-graphics-nZUQgW0FVnc-unsplash.png";
import NewRecipe from "./NewRecipe";

const Import = () => {
  const [url, setUrl] = useState();
  const [recipeData, setRecipeData] = useState(null);

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    fetch("/recipes/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data.data);
        console.log("IU Recipe Data", data.data);
      });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are we cooking today?</h2>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Paste recipe address here"
            name="url"
            onChange={(ev) => {
              setUrl(ev.target.value);
            }}
          />
          <button className="home-login-button" type="import">
            Import
          </button>
        </form>
        <NewRecipe recipeData={recipeData} />
        <img src={Pepper} className="import-pic" />
      </div>
    </div>
  );
};

export default Import;
