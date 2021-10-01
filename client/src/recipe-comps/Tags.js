import React, { useState, useEffect } from "react";

const GetTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/recipe/tags")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTags(tags);
          console.log(data, "tags");
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="grid">
      <div className="main-content">
        <h2>Sort your recipes by tags</h2>
      </div>
    </div>
  );
};

export default GetTags;
