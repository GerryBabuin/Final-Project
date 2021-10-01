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

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

const { getAllRecipes } = require("./handlers.js");

const app = express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  // get all Recipes endpoint
  .get("/recipes", getAllRecipes)

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

  // Node spins up our server and sets it to listen on port 8000.
  app.listen(8000, () => console.log(`Listening on port 8000`));
};

setup();
// app.listen(8000, () => console.log(`Listening on port 8000`));
