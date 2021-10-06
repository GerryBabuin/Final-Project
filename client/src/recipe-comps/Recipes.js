import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Recipes() {
  const [totalRecipes, setTotalRecipes] = useState([]);
  // const [recipeId, setRecipeId] = useState([]);
  const user = sessionStorage.getItem("user");
  const params = useParams();
  const userId = params.id;
  console.log("id", userId);
  // const history = useHistory();

  useEffect(() => {
    const path = `/users/recipes/${user}`;

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setTotalRecipes(data.data.recipes);
        // setRecipeId(data.data.recipes.id);
        console.log("Recipes page", data.data.recipes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Get your creative juices flowing</h2>
        {totalRecipes && (
          <div>
            {totalRecipes.map((recipe) => {
              return (
                <Link
                  to={`/users/recipes/${userId}/${recipe.id}`}
                  className="recipe-link"
                  key={recipe.id}
                >
                  <div className="list-image-container">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="list-recipe-image"
                    />
                  </div>
                  <h3 className="list-recipe-name">{recipe.name}</h3>
                  <p className="list-recipe-description">
                    {recipe.description}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
        {/* <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={totalRecipes}
        /> */}
      </div>
    </div>
  );
}
