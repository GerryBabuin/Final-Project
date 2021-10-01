const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const script = async (db) => {
  await db.collection("Recipes").insertMany(require("./test.json"));
  console.log("done");
};

const setup = async () => {
  const client = await new MongoClient(MONGO_URI, options);

  // connect to client
  await client.connect();

  if (!client) console.log(error);
  console.log("database is connected");

  return client.db("Recipe-App");
};

setup().then(script);
