import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const params = useParams();
  const id = params.id;
  const resetValue = () => {
    setQuery("");
  };
  useEffect(() => {
    const path = `/users/recipes/${id}`;
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setQuery(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setQuery([]);
  }, []);

  const handleSelect = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form>
          <button type="reset" onClick={resetValue} className="clear-button">
            Clear
          </button>
          <input
            type="text"
            placeholder={"Search..."}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(e.target.value);
              }
            }}
          />

          {query.length < 3 ? (
            <ul style={{ display: "none" }}></ul>
          ) : (
            <ul style={{ display: "block" }} tabindex="-1">
              {query.map((recipe) => {
                return (
                  <li
                    key={recipe.id}
                    onClick={() => handleSelect(recipe.title)}
                  >
                    <span>
                      {recipe.name.slice(0, query.length)}
                      <span>{recipe.name.slice(query.length)}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </form>
      </div>
    </div>
  );
}
