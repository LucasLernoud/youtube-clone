const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.PASSWORDDB)
    .then(() => {
      console.log('connected to db');
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
