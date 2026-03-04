import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./router/posts.js";

// initiate Express Server
const app = express();

//Implement router for backend for posts page
app.use("/posts", postsRouter);

app.use(cors());

// Middleware to parse json bodies
// body-parser is an Express.js middleware used to read and parse
//      the body of incoming HTTP requests and make that data available in req.body.
// In simple words 👉 it helps your backend understand data sent from the client (like form data or JSON).
app.use(bodyParser.json({ limit: "30mb", extended: true })); //used for REST APIs
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //Used for HTML forms

// Connect Server with Database
const CONNECTION_URL = `mongodb+srv://veerustackcraft_db_user:pJryFEhH8ekg009c@memoriescluster.ku42tgl.mongodb.net/`;

const PORT = process.env.PORT || 5000;
// const PORT = 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(5000, () => console.log(`Server Running on PORT ${PORT}`)),
  )
  .catch((error) => console.log(error.message));
