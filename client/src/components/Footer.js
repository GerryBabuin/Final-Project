import React from "react";
import Recipes from "./images/recipes.svg";
import Search from "./images/search.svg";
import Categories from "./images/categories.svg";
import AddNew from "./images/addNew.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/recipes/:id">
            <button className="footer-button">
              <img src={Recipes} alt="Recipes" className="button-icons" />
              recipes
            </button>
          </Link>
          <Link to="/search">
            <button className="footer-button">
              <img src={Search} alt="Search" className="button-icons" />
              search
            </button>
          </Link>
        </div>
        <div className="footer-right">
          <Link to="/tags">
            <button className="footer-button">
              <img src={Categories} alt="Tags" className="button-icons" />
              find
            </button>
          </Link>
          <Link to="/addnew">
            <button className="footer-button">
              <img src={AddNew} alt="Add New" className="button-icons" />
              new
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
