import React, { useState, useEffect } from "react";

const Import = () => {
  const [url, setUrl] = useState();

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    fetch("/recipes/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
  };

  return (
    <div className="grid">
      <div className="main-content">
        <h2>What are we cooking today?</h2>
        <form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Paste recipe address here"
            name="url"
            onChange={(ev) => {
              setUrl(ev.target.value);
            }}
          />
          <button className="home-login-button" type="import">
            Import
          </button>
        </form>
      </div>
    </div>
  );
};

export default Import;
