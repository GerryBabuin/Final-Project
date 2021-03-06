import React, { useState } from "react";
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
        
      });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form onSubmit={handleSubmit}>
          <button type="reset" onClick={resetValue} className="clear-form">
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
            <p>enter an ingredient</p>
          ) : !recipes.length ? (
            <p>no receipes found</p>
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
}
