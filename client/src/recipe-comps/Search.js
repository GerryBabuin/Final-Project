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
    const path = `/search`;
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
  const handelClick = (e) => {};
  return (
    <div className="grid">
      <div className="main-content">
        <h2>Search your recipes</h2>
        <form onclick={handelClick}>
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
