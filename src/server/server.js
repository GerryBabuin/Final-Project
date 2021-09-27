"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())

  // create a new recipe
  .post("/recipe/create", (req, res) => {
    res.json({ status: 200, data: "recipe created" });
  })

  // get all existing recipes
  .get("/recipe/recipes", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // get a specific recipe
  .get("/recipe/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // update a specific recipe
  .put("/recipe/update/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // delete a specific recipe
  .delete("/recipe/delete/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // create a new user
  .post("/user/create", (req, res) => {
    res.json({ status: 200, data: "recipe created" });
  })

  // get all existing users
  .get("/user/users", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // get a specific user
  .get("/user/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // update a specific recipe
  .put("/user/update/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  // delete a specific recipe
  .delete("/user/delete/:id", (req, res) => {
    res.json({ status: 200, data: data });
  })

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
