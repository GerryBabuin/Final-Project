import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { useParams, Link } from "react-router-dom";
import DeleteRecipe from "./DeleteRecipe";
// import NewRecipe from "./NewRecipe";

const DetailsRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const user = sessionStorage.getItem("user");
  const params = useParams();
  const { userId, recipeId} = params;
  const history = useHistory();

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
        <div className="list-image-container" key = { recipe.id }>
          <img src={image} alt={name} className="list-recipe-image" />
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
        <div className="edit-recipe-ingredients">
          {ingredients.map((ingredient) => (
            <div className="ingredients">{ingredient}</div>
          ))}
        </div>
        <div id="instructions" className="edit-recipe-description">
          {instructions.map((instruction) => (
            <div className="instructions">{instruction}</div>
          ))}
        </div>
        <div>
          <div className="edit-recipe-tags">{tags}</div>
        </div>
        <div className="details-buttons">
          <button onClick={() => history.goBack()} className="clear-button">
            Back
          </button>
          <Link to={`/edit/recipe/${userId}/${recipeId}`}>
            <button className="clear-button">Edit</button>
          </Link>
          <DeleteRecipe userId={userId} recipeId={recipeId} />
        </div>

        <div style={{ display: "block", height: "50px" }}></div>
      </div>
    </div>
  );
};

export default DetailsRecipe;