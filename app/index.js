const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.SERVER_PORT || 500;

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  compression({
    filter: (req, res) =>
      (!req.headers["x-no-compression"] && compression.filter(req, res)) ||
      false,
  }),
);

app.use(cors());

app.use((req, res, next) => {
  req.db = require("./lib/db");
  next();
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
