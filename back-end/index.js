const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Configure your application
const app = express();
const port = process.env.PORT || 3100;
const connectionURL = process.env.MONGO_URI;

//Middlewares (convert to json)
app.use(express.json());

app.use(Cors());

//DB Config
mongoose
  .connect(connectionURL)
  .then(() => app.listen(port, () => console.log("Running on port: ", port)))
  .catch((err) => {
    console.log(err);
  });
