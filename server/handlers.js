"use strict";

const { v4: uuidv4 } = require("uuid");
const recipeScraper = require("recipe-scraper");
const bcrypt = require("bcrypt");

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = req.app.locals.client.db("Recipe-App");

    const user = await db.collection("Users").findOne({ username });

    if (!user) {
      res.status(400).json({ status: 400, message: "User not found" });
      return;
    }

    if (user.password !== password) {
      res.status(400).json({ status: 400, message: "Incorrect Password" });
    } else {
      res.status(200).json({ status: 200, data: user.username });
    }
  } catch {
    res.status(400).json({ status: 400, data: "Login Failed" });
  }
};

const userSignUp = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { firstname, lastname, username, email, password } = req.body;

  try {
    const query = { _id: req.body.email };

    const userCheck = await db.collection("Users").findOne(query);

    if (!userCheck) {
      const newUser = {
        _id: uuidv4(),
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        recipes: [],
      };

      await db.collection("Users").insertOne(newUser);

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

const getAllRecipes = async (req, res) => {
  const id = req.params.id;

  const db = req.app.locals.client.db("Recipe-App");

  const user = await db.collection("Users").findOne({ username: id });

  // const recipes = await db.collection("Users").find().toArray();

  if (user) {
    res.status(200).json({ status: 200, data: user });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

const getOneRecipe = async (req, res) => {
  const { userId, recipeId } = req.params;

  const db = req.app.locals.client.db("Recipe-App");

  let singleRecipe;

  // search for user
  const user = await db.collection("Users").findOne({ username: userId });

  user.recipes.forEach((recipe) => {
    if (recipe.id === recipeId) {
      singleRecipe = recipe;
    }
  });

  if (singleRecipe) {
    res.status(200).json({ status: 200, data: singleRecipe });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

const editRecipe = async (req, res) => {
  const id = req.params.id;
  console.log("Backend Req", req.params);
  const db = req.app.locals.client.db("Recipe-App");

  const user = await db.collection("Users").findOne({ username: id });

  const recipes = await db.collection("Recipes").find().toArray();

  if (recipes.length) {
    res.status(200).json({ status: 200, data: recipes });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

const deleteRecipe = async (req, res) => {
  const id = req.params.id;
  console.log("Backend Req", req.params);
  const db = req.app.locals.client.db("Recipe-App");

  const user = await db.collection("Users").findOne({ username: id });

  const recipes = await db.collection("Recipes").find().toArray();

  if (recipes.length) {
    res.status(200).json({ status: 200, data: recipes });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

const findRecipes = async (req, res) => {
  const id = req.params.id;
  const query = req.params.query;

  const db = req.app.locals.client.db("Recipe-App");

  const user = await db.collection("Users").findOne({ username: id });

  const foundRecipes = await db.collection("Recipes").find({ query }).toArray();

  if (recipes.length) {
    res.status(200).json({ status: 200, data: foundRecipes });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

// SCRAPER - enter a supported recipe url as a parameter - returns a promise
const getUrl = async (req, res) => {
  try {
    const { url } = req.body;
    let recipe = await recipeScraper(url);
    // console.log(recipe);
    res.status(200).json({ status: 200, data: recipe });
  } catch (error) {
    res.status(400).json({ status: 400, data: "Import failed" });
  }
};

const newRecipe = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { recipe } = req.body;

  if (recipe) {
    const addRecipe = {
      id: uuidv4(),
      image: recipe.image,
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      tags: recipe.tags,
      prep: recipe.prep,
      total: recipe.total,
      servings: recipe.servings,
    };

    await db
      .collection("Users")
      .updateOne(
        { username: req.body.userId },
        { $push: { recipes: addRecipe } }
      );

    res.status(200).json({
      status: 200,
      data: req.body,
      message: "Recipe added",
    });
  } else {
    res.status(400).json({ status: 400, data: "Recipe not added" });
  }
};

module.exports = {
  getAllRecipes,
  signIn,
  getUrl,
  userSignUp,
  newRecipe,
  findRecipes,
  getOneRecipe,
  editRecipe,
  deleteRecipe,
};
