import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import TextareaAutosize from "react-textarea-autosize";

const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);
  const user = sessionStorage.getItem("user");
  const params = useParams();
  const { recipeId } = params;
 console.log( "NewRecipe", props)
  useEffect(() => {
    setRecipe({ ...props, ...props.time });
  }, []);

  const history = useHistory();

  const saveRecipe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const postRecipe = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipe, userId: user }),
    };
    fetch("/users/recipes", postRecipe)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          history.push(`/recipes/${user}`);
        } else {
          alert("Recipe did not save.");
        }
      });
  };

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
        <form className="editRecipe" onSubmit={saveRecipe}>
          <div className="list-image-container">
            <img src={image} alt={name} className="import-recipe-image" />
          </div>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setRecipe({ ...recipe, name: e.target.value });
            }}
          />
          <div className="time">
            <div>
              <label for="prep">Prep Time:</label>
              <input
                className="time"
                type="text"
                name="prep"
                placeholder="Prep"
                value={prep}
                onChange={(e) => {
                  setRecipe({ ...recipe, prep: e.target.value });
                }}
              />
            </div>
            <div>
              <label for="total">Total Time:</label>
              <input
                className="time"
                type="text"
                name="total"
                placeholder="Total"
                value={total}
                onChange={(e) => {
                  setRecipe({ ...recipe, total: e.target.value });
                }}
              />
            </div>
            <div>
              <label for="servings">Servings:</label>
              <input
                className="time"
                type="text"
                name="servings"
                placeholder="Servings"
                value={servings}
                onChange={(e) => {
                  setRecipe({ ...recipe, total: e.target.value });
                }}
              />
            </div>
          </div>
          <label for="description">Description:</label>
          <TextareaAutosize
            autoSize={true}
            rows={2}
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setRecipe({ ...recipe, description: e.target.value });
            }}
          />
          <label id="ingredients" for="ingredients">
            Ingredients:
          </label>
          <TextareaAutosize
            autoSize={true}
            rows={2}
            name="ingredients"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => {
              setRecipe({ ...recipe, ingredients: e.target.value });
            }}
          />
          <label for="instructions">Instructions:</label>
          <TextareaAutosize
            autoSize={true}
            rows={2}
            name="instructions"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => {
              setRecipe({ ...recipe, instructions: e.target.value });
            }}
          />
          <label for="tags">Tags:</label>
          <input
            type="text"
            name="tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => {
              setRecipe({ ...recipe, tags: e.target.value });
            }}
          />
          <button type="submit" className="home-login-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
