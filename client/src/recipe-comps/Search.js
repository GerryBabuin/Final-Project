import React, { useState, useEffect } from "react";

export default function Search({ suggestion, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  // const [filteredRecipes, setFilteredRecipes] = useState([]);
  // const [value, setValue] = React.useState("");

  const resetValue = () => {
    setSearchTerm("");
  };
  useEffect(() => {
    const path = "/recipes/me";
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setRecipes([]);
  }, []);

  const handleSelect = (e) => {
    setSearchTerm(e.target.value);
  };

  // filter array for matchedSuggestions
  const matchedSuggestions = recipes.filter(function (suggestions) {
    return suggestions.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(e.target.value);
              }
            }}
          />

          {searchTerm.length < 3 ? (
            <ul style={{ display: "none" }}></ul>
          ) : (
            <ul style={{ display: "block" }} tabindex="-1">
              {matchedSuggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion.id}
                    onClick={() => handleSelect(suggestion.title)}
                  >
                    <span>
                      {suggestion.name.slice(0, searchTerm.length)}
                      <span>{suggestion.name.slice(searchTerm.length)}</span>
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
