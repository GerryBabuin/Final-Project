import React, { useState, useEffect } from "react";

const NewRecipe = () => {
  const [url, setUrl] = useState();
  const [formData, setFormData] = useState();

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    fetch("/recipe//recipes/update/:id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <div className="grid">
        <div className="main-content">
          <h2>What are we cooking today?</h2>
          <form onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(ev) => {
                setUrl({ ...formData, url: ev.target.value });
              }}
            />
            <input
              type="text"
              placeholder="description"
              name="description"
              onChange={(ev) => {
                setUrl({ ...formData, url: ev.target.value });
              }}
            />
            <input
              type="text"
              placeholder="ingredients"
              name="ingredients"
              onChange={(ev) => {
                setUrl({ ...formData, url: ev.target.value });
              }}
            />
            <input
              type="text"
              placeholder="instructions"
              name="instructions"
              onChange={(ev) => {
                setUrl({ ...formData, url: ev.target.value });
              }}
            />
            <button
              onClick={handleClick}
              className="home-login-button"
              type="post"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewRecipe;
