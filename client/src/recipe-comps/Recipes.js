import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import Pagination from "./Pagination";

export default function Recipes() {
  const [totalRecipes, setTotalRecipes] = useState([]);

  const params = useParams();
  const id = params._id;

  const history = useHistory();

  useEffect(() => {
    const path = "users/recipes/:id";
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

  const handleClick = (e, _id) => {
    e.preventDefault();
    e.stopPropagation();
    // history.push(`users/me/recipes/${_id}`);
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
        {/* <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={totalRecipes}
        /> */}
      </div>
    </div>
  );
}
