import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetTags = ({ signedInUser }) => {
  const [tag, setTag] = useState("");
  const [recipes, setRecipes] = useState(null);
  const user = sessionStorage.getItem("user");

  function handleClick(tag) {
    // e.preventDefault();
    setTag(tag);
    sortRecipes();
  }
  const sortRecipes = (e) => {
    fetch(`/search/${user}/${tag}`)
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.data);
        console.log(result);
      });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are you looking to make?</h2>
        <div className="categories-container">
          <button onClick={() => handleClick("Beef")} className="categories">
            beef
          </button>
          <button onClick={() => handleClick("Chicken")} className="categories">
            chicken
          </button>
          <button onClick={() => handleClick("Pork")} className="categories">
            pork
          </button>
          <button onClick={() => handleClick("Seafood")} className="categories">
            seafood
          </button>
          <button onClick={() => handleClick("Vegan")} className="categories">
            vegan
          </button>
          <button
            onClick={() => handleClick("Under 30 mins")}
            className="categories"
          >
            Under 30 mins
          </button>
          <button
            onClick={() => handleClick("handleRandom")}
            className="categories"
          >
            Suprise Me
          </button>
        </div>
        <div>
          {!recipes ? (
            <p>click tags find recipes</p>
          ) : !recipes.length ? (
            <p>no recipes found</p>
          ) : (
            <ul>
              {recipes.map((recipe) => (
                <Link
                  to={`/users/recipes/${user}/${recipe.id}`}
                  className="recipe-link"
                  key={recipe.id}
                >
                  <li className="list-recipe-name">{recipe.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetTags;
