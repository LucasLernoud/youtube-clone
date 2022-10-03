import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"


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

app.use("/api/users", userRoutes)

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
