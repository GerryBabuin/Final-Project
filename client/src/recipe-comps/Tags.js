import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetTags = () => {
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    const path = tags ? `/recipes/me?tags=${tags}` : "/recipes/me";
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
          <button className="categories">Tags</button>
          <button className="categories">Time</button>
          <button className="categories">Suprise</button>
          <Link to="/search">
            <button className="categories">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetTags;
