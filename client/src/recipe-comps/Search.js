import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Search({ signedInUser }) {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const user = sessionStorage.getItem("user");
  const params = useParams();
  const { userId } = params;
  const resetValue = () => {
    setQuery("");
  };
  console.log("Search", query);
  useEffect(() => {
    fetch(`/search/${userId}/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.data);
      });
  }, [query]);

  // const search = (e) => {
  //   const postQuery = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ query }),
  //   };
  //   fetch("/search", postQuery)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuery(data.data);
  //       console.log("Search", query);
  //     });
  // };
  // search();
  const handleSelect = (e) => {
    setQuery(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form onClick={handleClick}>
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
          <button type="submit" className="home-login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
