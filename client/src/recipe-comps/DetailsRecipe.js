import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { useParams } from "react-router-dom";

const DetailsRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const user = sessionStorage.getItem("user");
  const params = useParams();
  const id = params.id;
  const history = useHistory();

  // create line breaks after commas
  // let formatIngredients = document.getElementById(`ingredients`);
  // let reFormatIngredients = replaceCommaLine(ingredients);
  // function replaceCommaLine(data) {
  //   //convert string to array and remove whitespace
  //   let dataToArray = data.split(",").map((item) => item.trim());
  //   //convert array to string replacing comma with new line
  //   return dataToArray.join("\n");
  // }

  useEffect(() => {
    fetch("/users/onerecipe/:id")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        console.log("Recipe Details", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!recipe) {
    return null;
  }

  const {
    name,
    description,
    ingredients,
    instructions,
    tags,
    image,
    prep,
    total,
    servings,
  } = recipe;

  return (
    <div className="grid">
      <div className="main-content-import">
        <img
          src={image}
          alt={name}
          className="import-recipe-image"
          className="list-recipe-image"
        />

        <h3 className="list-recipe-name">{name}</h3>
        <p className="list-recipe-description">{description}</p>
        <div>
          <div className="list-recipe-description">{prep}</div>
          <div className="list-recipe-description">{total}</div>
          <div className="list-recipe-description">{servings}</div>
        </div>
        <div id="ingredients" className="list-recipe-description">
          {ingredients}
        </div>
        <div id="instructions" className="list-recipe-description">
          {instructions}
        </div>
        <div id="tags" className="list-recipe-description">
          {tags}
        </div>

        <div className="details-buttons">
          <button className="edit-button">Edit</button>
          <button className="edit-button">Delete</button>
        </div>
        <button className="home-login-button">Back</button>
      </div>
    </div>
  );
};

export default DetailsRecipe;
