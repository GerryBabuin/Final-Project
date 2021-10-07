import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { useParams, Link } from "react-router-dom";

const DetailsRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const user = sessionStorage.getItem("user");
  const params = useParams();
  const { userId, recipeId } = params;
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
    fetch(`/users/recipes/${userId}/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.data);
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
        <div className="list-image-container">
          <img
            src={image}
            alt={name}
            className="import-recipe-image"
            // className="list-recipe-image"
          />
        </div>

        <h3 className="list-recipe-name">{name}</h3>
        <p className="edit-recipe-description">{description}</p>
        <div className="time-serving-container">
          <div className="edit-recipe-time">
            <div className="edit-recipe-label">Prep</div>
            {prep}
          </div>
          <div className="edit-recipe-time">
            <div className="edit-recipe-label">Total</div>
            {total}
          </div>
          <div className="edit-recipe-time">
            <div className="edit-recipe-label">Servings</div>
            {servings}
          </div>
        </div>
        <div id="ingredients" className="edit-recipe-description">
          {ingredients}
        </div>
        <div id="instructions" className="edit-recipe-description">
          {instructions}
        </div>
        <div id="tags" className="edit-recipe-description">
          {tags}
        </div>

        <div className="details-buttons">
          <Link to={`/edit/recipe/${userId}/${recipeId}`}>
            <button className="clear-button">Edit</button>
          </Link>
          <button className="clear-button">Delete</button>
        </div>
        <button onClick={() => history.goBack()}>Back</button>
        <div style={{ display: "block", height: "50px" }}></div>
      </div>
    </div>
  );
};

export default DetailsRecipe;
