import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import cookieParser from "cookie-parser";


const app = express();
const port = 3000;
dotenv.config();


const connect = () => {
  mongoose
    .connect(process.env.PASSWORDDB)
    .then(() => {
      console.log('connected to database');
    })
    .catch((err) => {
      throw err;
    });
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)


app.use((err, req,res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
