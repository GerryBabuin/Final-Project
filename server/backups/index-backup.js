"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json());

const {
  getAllRecipes,
  getOneRecipe,
  // getRecipesByTags,
  // getUrl,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  userSignUp,
  userSignIn,
  // userSignOut,
} = require("../handlers.js")
  // create a new recipe
  .post("/recipe/create", createRecipe)

  // get all existing recipes
  .get("/recipes", getAllRecipes)

  // get a specific recipe
  .get("/recipes/:id", getOneRecipe)

  // get a specific recipe
  .get("/recipes/tags", getRecipesByTags)

  // get all existing recipes by tags
  .get("/recipes/tags", getRecipesByTags)

  // get all existing recipes
  .get("/recipes/url", getUrl)

  // create a new recipe
  .put("/recipes/create", createRecipe)

  // update a specific recipe
  .put("/recipes/update/:id", updateRecipe)

  // delete a specific recipe
  .delete("/recipes/delete/:id", deleteRecipe)

  // create a new user
  .post("/users/signup", userSignUp)

  // user signin
  .post("/users/signin", userSignIn);

// user signout
// .post("/users/signout", userSignOut);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// config database connection
const setup = async () => {
  const client = await new MongoClient(MONGO_URI, options);

  // connect to client
  await client.connect();

  app.locals.client = client;

  // Node spins up our server and sets it to listen on port 3000.
  app.listen(3000, () => console.log(`Listening on port 3000`));
};

setup();
