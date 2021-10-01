import React, { useState, useEffect } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    const path = "/recipes";
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setRecipes([]);
  }, []);
  return (
    <div className="grid">
      <div className="main-content">
        <h2>Find something great to make</h2>
        {recipes && (
          <div>
            {recipes.map((recipe) => {
              return (
                <li>
                  {recipe.name}
                  {recipe.description}
                  {recipe.ingredients}
                  {recipe.instructions}
                  {recipe.tags}
                  {recipe.time.prep}
                  {recipe.time.cook}
                  {recipe.time.active}
                  {recipe.time.inactive}
                  {recipe.time.ready}
                  {recipe.time.total}
                  {recipe.serving}
                  {recipe.image}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
