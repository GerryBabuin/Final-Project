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

const { signIn, getAllRecipes, getUrl } = require("./handlers.js");

const app = express()
  .use(morgan("tiny"))
  .use(express.json())

  .use(express.static("public"))

  // get all user recipes endpoint
  .get("/recipes/me", getAllRecipes)

  // get url for scraping
  .post("/recipes/url", getUrl)

  // user login endpoint
  .get("/user/me", signIn)

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
// app.listen(8000, () => console.log(`Listening on port 8000`));
