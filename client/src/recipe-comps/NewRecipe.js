import React, { useState, useEffect } from "react";

const NewRecipe = ({ recipeData }) => {
  console.log(recipeData, "NR RecipeData");
  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are we cooking today?</h2>
      </div>
    </div>
  );
};

export default NewRecipe;
