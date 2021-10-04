import React from "react";
// import Import from "./ImportUrl";

const NewRecipe = ({ recipeData }) => {
  console.log(recipeData, "NR RecipeData");
  return (
    <div className="grid">
      <div className="main-content">
        <h2>This looks yummy?</h2>
        {/* <div style={{ color: "white" }}>{name}</div> */}
      </div>
    </div>
  );
};

export default NewRecipe;
