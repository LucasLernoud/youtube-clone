import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import nodemon from "nodemon";


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

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
