import React, { useState } from "react";
// import { useParams } from "react-router-dom";

export default function Search({ signedInUser }) {
  // const [query, setQuery] = useState("");
  // const [recipes, setRecipes] = useState([]);
  // const user = sessionStorage.getItem("user");
  // const params = useParams();
  // const { userId } = params;
  // const resetValue = () => {
  //   setQuery("");
  // };
  console.log("Search", signedInUser);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelect = (e) => {
    setSearchTerm(e.target.value);
  };

  // reset the value - clear button
  const resetValue = () => {
    setSearchTerm("");
  };

  // filter array for matchedSuggestions
  const matchedRecipes = signedInUser.filter(function (recipe) {
    return signedInUser.tags.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // <button type="submit" className="home-login-button">
  //           Submit
  //         </button>
  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form>
          <input
            tabindex="0"
            type="text"
            placeholder={"Search..."}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(e.target.value);
              }
            }}
          />
          <button type="reset" onClick={resetValue}>
            Clear
          </button>
          {searchTerm.length < 3 ? (
            <ul style={{ display: "none" }}></ul>
          ) : (
            <ul style={{ display: "block" }} tabindex="-1">
              {matchedRecipes.map((recipe) => {
                return (
                  <li key={recipe.id} onClick={() => handleSelect(recipe.name)}>
                    {recipe.name}
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
