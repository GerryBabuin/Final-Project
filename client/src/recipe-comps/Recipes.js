import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Pagination from "./Pagination";

export default function Recipes() {
  const [totalRecipes, setTotalRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(2);

  const params = useParams();
  const _id = params._id;

  const history = useHistory();

  useEffect(() => {
    const path = "/recipes/me";
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setTotalRecipes(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = totalRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const handleClick = (e, _id) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/recipes/me/${_id}`);
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Get your creative juices flowing</h2>
        {totalRecipes && (
          <div>
            {totalRecipes.map((recipe) => {
              return (
                <div
                  key={recipe._id}
                  onClick={(e) => handleClick(e, recipe._id)}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="list-recipe-image"
                  />
                  <h3 className="list-recipe-name">{recipe.name}</h3>
                  <p className="list-recipe-description">
                    {recipe.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={totalRecipes}
        />
      </div>
    </div>
  );
}
