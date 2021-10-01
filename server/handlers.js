"use strict";

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

module.exports = {
  getAllRecipes,
};
