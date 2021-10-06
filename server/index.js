"use strict";
const path = require("path");

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const express = require("express");
const morgan = require("morgan");

const {
  signIn,
  userSignUp,
  getAllRecipes,
  getUrl,
  newRecipe,
  findRecipes,
  getOneRecipe,
  editRecipe,
  deleteRecipe,
} = require("./handlers.js");

const app = express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  // USER SECTION

  // create a new user
  .post("/users/signup", userSignUp)

  // user login endpoint
  .post("/users/signin", signIn)

  // RECIPE SECTION

  // get all user recipes
  .get("/users/recipes/:id", getAllRecipes)

  // get individual user recipe
  .get("/users/onerecipe/:id", getOneRecipe)

  // edit individual user recipe
  .delete("/users/onerecipe/:id", editRecipe)

  // delete individual user recipe
  .delete("/users/onerecipe/:id", deleteRecipe)

  // get url for scraping
  .post("/recipes/url", getUrl)

  // get add new recipe
  .post("/users/recipes", newRecipe)

  // get add new recipe
  .post("/search", findRecipes)

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "Something went wrong.",
    });
  });

// config database connection
const setup = async () => {
  const client = await new MongoClient(MONGO_URI, options);

  // connect to client
  await client.connect();

  app.locals.client = client;

  if (!client) console.log(error);
  console.log("database is connected");

  // Node spins up our server and sets it to listen on port 8000.
  app.listen(8000, () => console.log(`Listening on port 8000`));
};

setup();
