import React, { useState } from "react";
// import { useHistory } from "react-router";
import Cinnamon from "../images/mockup-graphics-XxaIHwP5lsE-unsplash.png";
import NewRecipe from "./NewRecipe";

const Import = () => {
  const [url, setUrl] = useState();
  const [recipeData, setRecipeData] = useState(null);

  const convertUrl = (e) => {
    const postUrl = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    };
    fetch("/recipes/url", postUrl)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data.data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    convertUrl();
  };

  return (
    <React.Fragment>
      <div className="grid">
        <div className="main-content">
          {recipeData ? (
            <NewRecipe {...recipeData} />
          ) : (
            <React.Fragment>
              <h2>What are we cooking today?</h2>
              <form onSubmit={handleClick}>
                <input
                  type="text"
                  placeholder="Paste recipe address here"
                  name="url"
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
                <button className="home-login-button" type="import">
                  Import
                </button>
              </form>

              <img src={Cinnamon} className="import-pic" alt="hot pepper" />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Import;
