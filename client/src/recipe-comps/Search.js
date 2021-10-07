import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search({ signedInUser }) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);
  const user = sessionStorage.getItem("user");

  const resetValue = () => {
    setQuery("");
  };

  const handleSelect = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/search/${user}/${query}`)
      .then((res) => res.json())
      .then((result) => {
        setRecipes(result.data);
        console.log(result);
      });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form onSubmit={handleSubmit}>
          <button type="reset" onClick={resetValue} className="clear-button">
            Clear
          </button>
          <input
            type="text"
            placeholder={"Search..."}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(e.target.value);
              }
            }}
          />
          <button type="submit" className="home-login-button">
            Submit
          </button>
        </form>
        <div>
          {!recipes ? (
            <p>Select an ingredient</p>
          ) : !recipes.length ? (
            <p>No receipes found</p>
          ) : (
            <ul>
              {recipes.map((recipe) => (
                <Link
                  to={`/users/recipes/${user}/${recipe.id}`}
                  className="recipe-link"
                  key={recipe.id}
                >
                  <li>{recipe.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
