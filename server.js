import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import env from "process";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// configure env
dotenv.config();

// database config
connectDB();
// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to e commerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;
// run listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
