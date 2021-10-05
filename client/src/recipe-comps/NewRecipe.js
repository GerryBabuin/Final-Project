import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TextareaAutosize from "react-textarea-autosize";

const NewRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log(props);
    setRecipe({ ...props, ...props.time });
  }, []);

  const history = useHistory();

  const saveRecipe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const postRecipe = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    };
    fetch("/recipes/new", saveRecipe)
      .then((res) => res.json())
      .then((data) => {
        // if (res.ok) {
        //   history.push("/recipes/:id");
        // } else {
        //   alert("Recipe did not save.");
        // }
      });
    postRecipe();
  };

  // POST "/user/:userId/receipes"
  // updateOne({ _id: userId }, { $push: { recipes: req.body } })

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
        <form className="editRecipe">
          <img src={image} alt={name} className="import-recipe-image" />
          <label for="name">Name:</label>
          <input
            type="text"
            id="Name"
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
                id="Prep"
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
                id="Total"
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
                id="Servings"
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
            id="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setRecipe({ ...recipe, description: e.target.value });
            }}
          />
          <label for="ingredients">Ingredients:</label>
          <TextareaAutosize
            autoSize={true}
            rows={2}
            id="Ingredients"
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
            id="Instructions"
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => {
              setRecipe({ ...recipe, instructions: e.target.value });
            }}
          />
          <label for="tags">Tags:</label>
          <input
            type="text"
            id="Tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => {
              setRecipe({ ...recipe, tags: e.target.value });
            }}
          />
          <button onClick={saveRecipe} className="home-login-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipe;
