import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//this entire code stucture is made smaller by giving parts of it to the notesRoutes.js and notesController.js files

/*
app.get("/api/notes", (req, res) => {
  res.status(200).send("You just fetched notes");
});
*/

if (process.env.NODE_ENV !== "process") {
  //middleware
  //we used this just before our routes so that we can access the request body in our routes
  app.use(cors({ origin: "http://localhost:5173" })); // Enable CORS for the frontend URL
}

app.use(express.json());

app.use(rateLimiter); // Apply the rate limiter middleware

//this middleware logs the request method and URL for every incoming request
//it is useful for debugging and monitoring purposes
app.use((req, res, next) => {
  console.log("Middleware is running");
  console.log(`Resquest method is ${req.method} and request URL is ${req.url}`);
  next(); // Call the next middleware or route handler
});

//this part is imported from notesRoutes.js
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  //Goes one up then under frontend and then under dist folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

//this is done to ensure that the databse connected first before the server starts listening to requests
//if the database is not connected, the server will not start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});
