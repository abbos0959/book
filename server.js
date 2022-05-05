const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

app.use("/api/book", require("./Routes/KitobRoutes"));

const PORT = process.env.PORT || 1000;

app.listen(PORT, `127.0.0.2`, console.log("server ishladi"));
