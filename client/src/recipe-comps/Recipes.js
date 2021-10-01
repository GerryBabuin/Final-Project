import React, { useState, useEffect } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    const path = "/recipes/me";
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="grid">
      <div className="main-content">
        <h2>Find something great to make</h2>
        {recipes && (
          <div>
            {recipes.map((recipe) => {
              return (
                <div>
                  <div className="list-recipe-name">{recipe.name}</div>
                  <div className="list-recipe-description">
                    {recipe.description}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
