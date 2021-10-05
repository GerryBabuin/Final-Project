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
      res.status(400).json({ status: 400, data: "User not found" });
      return;
    }

    if (user.password !== password) {
      res.status(400).json({ status: 400, data: "Incorrect Password" });
    } else {
      res.status(200).json({ status: 200, data: "Successful login" });
    }
  } catch {
    res.status(400).json({ status: 400, data: "Login Failed" });
  }
};

// const signIn = async (req, res) => {
//   const { username, password } = user;

//   const db = req.app.locals.client.db("Recipe-App");

//   const user = await db.collection("Users").findOne({ username });

//   if (!user) {
//     res.status(400).json({ status: 400, data: "User not found" });
//     return;
//   }

//   if (user.password !== password) {
//     res.status(400).json({ status: 400, data: "Incorrect Password" });
//   } else {
//     res.status(200).json({ status: 200, data: "Successful login" });
//   }
// };

const userSignUp = async (req, res) => {
  const db = req.app.locals.client.db("Recipe-App");

  const { firstname, lastname, username, email, password } = req.body;
  // const hashedPassword = await bcrypt.hash(req.body.password, 10);

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
  const db = req.app.locals.client.db("Recipe-App");

  const recipes = await db.collection("Recipes").find().toArray();

  if (recipes.length) {
    res.status(200).json({ status: 200, data: recipes });
  } else {
    res.status(400).json({ status: 400, data: "No recipes were found" });
  }
};

// SCRAPER - enter a supported recipe url as a parameter - returns a promise
const getUrl = async (req, res) => {
  try {
    const { url } = req.body;
    let recipe = await recipeScraper(url);
    console.log(recipe);
    res.status(200).json({ status: 200, data: recipe });
  } catch (error) {
    res.status(400).json({ status: 400, data: "Import failed" });
  }
};

const newRecipe = async (req, res) => {
  if (!recipe) {
    const addRecipe = {
      id: uuidv4(),
      name: name,
      description: description,
      ingredients: ingredients,
      instructions: instructions,
      tags: tags,
      prep: prep,
      total: total,
      servings: servings,
    };

    await db
      .collection("Users")
      .updateOne({ _id: userId }, { $push: addRecipe });

    res.status(200).json({
      status: 200,
      data: req.body,
      message: "User added",
    });
  } else {
    res.status(400).json({ status: 400, data: "User not added" });
  }
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({
  //     status: 500,
  //     data: err,
  //     message: "Something went wrong",
  //   });
  // }
};

module.exports = {
  getAllRecipes,
  signIn,
  getUrl,
  userSignUp,
  newRecipe,
};
