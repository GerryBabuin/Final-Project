import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetTags = ({ signedInUser }) => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [time, setTime] = useState([]);

  function handleClick(tags) {
    setTags(tags);
  }
  // function handleRandom(tags) {
  //   const randomItem = recipes[Math.floor(Math.random() * recipes.length)];
  //   setTags(randomItem);
  // }

  useEffect(() => {
    const path = tags ? `/search?tags=${tags}` : "/search";
    console.log("path", path);
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log("Tags", tags);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTags([]);
  }, []);

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are you looking to make?</h2>
        <div className="categories-container">
          <button onClick={() => handleClick("Beef")} className="categories">
            beef
          </button>
          <button onClick={() => handleClick("Chicken")} className="categories">
            chicken
          </button>
          <button onClick={() => handleClick("Pork")} className="categories">
            pork
          </button>
          <button onClick={() => handleClick("Seafood")} className="categories">
            seafood
          </button>
          <button onClick={() => handleClick("Vegan")} className="categories">
            vegan
          </button>
          <button
            onClick={() => handleClick("Under 30 mins")}
            className="categories"
          >
            Under 30 mins
          </button>
          <button
            onClick={() => handleClick("handleRandom")}
            className="categories"
          >
            Suprise Me
          </button>
          {/* <Link to="/search">
            <button className="categories">Search</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default GetTags;
