const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

//establishing connection to mongoDB.
mongoose.connect("mongodb://localhost/infoAssignment", {
  useNewUrlParser: true,
});
mongoose.connection
  .once("open", () => console.log("connection successful"))
  .on("error", (error) => console.log("There was a connection error " + error));

// using middleware - bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to use middle-ware with HTTP requests, supposed to use app.use(), defining accordingly.
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Options"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

// Define EndPoints ->
app.use("/", userRoutes);

const corsOptions = {
  origin: "http://localhost:8000",
  credentials: true,
  optionSuccessStatus: 200,
};

//Define CORS ->
app.use(cors());

//Start the server
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
