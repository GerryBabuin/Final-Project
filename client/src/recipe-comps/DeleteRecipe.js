import React, { useState} from "react";
import { useHistory } from "react-router";
import { useParams} from "react-router-dom";

export const DeleteRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const user = sessionStorage.getItem("user");
  const params = useParams();
  const { userId, recipeId } = params;
  const history = useHistory();

  const deleteRecipe = (e) => {
    const removeRecipe = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId }),
    };
    fetch(`/users/recipes/${user}/${recipeId}`, removeRecipe)
      .then((res) => res.json())
      .then((data) => {
        history.push("/confirmation");
      });
  };
  

  return (
    
      <button onClick={deleteRecipe} className="clear-button">Delete</button>
    
  );
};

export default DeleteRecipe;
