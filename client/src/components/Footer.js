import React from "react";
import Recipes from "./images/recipes.svg";
import Search from "./images/search.svg";
import Tags from "./images/tags.svg";
import AddNew from "./images/addNew.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer-left"> */}
      <Link to="/recipes">
        <button className="footer-button">
          <img src={Recipes} alt="" className="button-icons" />
          recipes
        </button>
      </Link>
      <Link to="/search">
        <button className="footer-button">
          <img src={Search} alt="" className="button-icons" />
          search
        </button>
      </Link>
      <Link>
        <button className="footer-button" style={{ marginRight: "3rem" }}>
          {/* <img src={Search} alt="" className="button-icons" />
          search */}
        </button>
      </Link>

      {/* </div> */}
      {/* <div className="footer-right"> */}
      <Link to="/tags">
        <button className="footer-button">
          <img src={Tags} alt="" className="button-icons" />
          tags
        </button>
      </Link>
      <Link to="/addnew">
        <button className="footer-button">
          <img src={AddNew} alt="" className="button-icons" />
          new
        </button>
      </Link>
    </div>
    // </div>
  );
};

export default Footer;
