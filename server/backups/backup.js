"use strict";

const recipeScraper = require("recipe-scraper");
const { v4: uuidv4 } = require("uuid");

const getAllRecipes = async (req, res) => {
  const Recipes = [];

  const db = req.app.locals.client.db("Recipe-App");

  const recipes = await db.collection("Recipes").find().toArray();

  recipes.forEach((recipe) => {
    recipes.push(recipe._id);
  });

  if (recipe.length) {
    res.status(200).json({ status: 200, data: recipes });
  } else {
    res.status(400).json({ status: 200, data: "No recipes were found" });
  }
};

const getOneRecipe = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { id } = req.params;

  const oneRecipe = await db.collection("Recipes").findOne({ _id: id });

  if (oneRecipe) {
    res.status(200).json({ status: 200, data: oneRecipe });
  } else {
    res.status(400).json({ status: 200, data: "That recipe was not found" });
  }
};

const createRecipe = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  try {

      res.status(200).json({
        status: 200,
        data: req.body,
        message: "Success",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, data: "Not working" });
    }
  } catch (err) {

    res.status(500).json({
      status: 500,
      data: err,
      message: "Ouch, that didn't work "500",
    });
};

const deleteRecipe = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { id } = req.params;

  const oneRecipe = await db.collection("Recipes").findOne({ _id: id });

  if (oneRecipe) {
    res.status(200).json({ status: 200, data: oneRecipe });
  } else {
    res.status(400).json({ status: 200, data: "That recipe was not found" });
  }
};

// SCRAPER - enter a supported recipe url as a parameter - returns a promise
const getUrl = async (req, res) => {
  async function someAsyncFunc() {
    // ...
    let recipe = await recipeScraper("some.recipe.url");
    // ...
  }

  // using Promise chaining
  recipeScraper("some.recipe.url")
    .then((recipe) => {
      // do something with recipe
    })
    .catch((error) => {
      // do something with error
    });
};

//
// SECTION USER SECTION
//

const userSignUp = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { firstName, lastName, username, email, password, confirmedPassword } =
    req.body;

  try {
    const query = { _id: req.body.email };

    const userCheck = await db.collection("Recipes").findOne(query);

    if (!userCheck) {
      const newUser = {
        _id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        recipes: [],
      };

      await db.collection("reservations").insertOne(newUser);

      res.status(200).json({
        status: 200,
        data: req.body,
        message: "User added",
      });
    } else {
      res.status(400).json({ status: 400, data: "User not added" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: err,
      message: "Something went wrong",
    });
  }
};

// const signIn = async (req, res) => {
//   const { username, password } = req.body;

//   if (!username || !password) {
//     res.status(404).json({
//       status: 404,
//       message: "Both username and password are required!",
//     });
//   }

//   res.status(400).json({
//     status: 400,
//     message: "Failed to login, please check your username and password",
//   });
// };

module.exports = {
  getAllRecipes,
  getOneRecipe,
  // getRecipesByTags,
  getUrl,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  userSignUp,
  userSignIn,
  userSignOut,
};
