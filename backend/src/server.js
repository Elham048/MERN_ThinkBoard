import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//this entire code stucture is made smaller by giving parts of it to the notesRoutes.js and notesController.js files

/*
app.get("/api/notes", (req, res) => {
  res.status(200).send("You just fetched notes");
});
*/

//middleware
//we used this just before our routes so that we can access the request body in our routes
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


//this is done to ensure that the databse connected first before the server starts listening to requests
//if the database is not connected, the server will not start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});
