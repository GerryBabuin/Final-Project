import React, { useState, useEffect } from "react";

const ImportUrl = () => {
  const [url, setUrl] = useState();
  const [formData, setFormData] = useState();

  const handleClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    fetch("/recipe/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
              setUrl({ ...formData, url: ev.target.value });
            }}
          />
          <button
            onClick={handleClick}
            className="home-login-button"
            type="import"
          >
            Import
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImportUrl;
