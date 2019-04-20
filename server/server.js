const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getSchema } = require("./schemaController");
const { checkCache, cacheSchema } = require("./cacheController");

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/bundle.js"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.post(
  "/api/schema",
  checkCache,
  getSchema,
  cacheSchema,
  (req, res, next) => {
    res
      .status(200)
      .type("application/json")
      .send(res.locals);
  }
);

app.listen(PORT, err => {
  console.log(`Listening on port ${PORT}....`);
});
