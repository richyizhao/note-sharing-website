import express from "express";
import mongoose from "mongoose";
import { postsRoutes } from "./server/routes/postsRoutes.js"
import { usersRoutes } from "./server/routes/usersRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initializing Express app
const app = express();

// Middleware to receive JSON
app.use(express.json());

// Adding the API end-points and the route handlers
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

// Use client app
app.use(express.static(path.join(__dirname, "/client/dist")));

// Render client for any path
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

// Connecting to MongoDB using Mongoose
mongoose.connect("mongodb://localhost:27017", { dbName: "demo_db" })
  .then(() => {
    console.log("connected to DB successfully");

    // Listening to requests if DB connection is successful
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
  })
  .catch((err) => console.log(err));