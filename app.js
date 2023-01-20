const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

const app = express();

// conenction to mongodb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("Database Connection Sucessfully"); })
  .catch(() => { console.log("Not connected To database"); });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

const PORT = process.env.PORT || 3000;

// server configurations....
app.listen(PORT, () => console.log("Server started listening on port:", PORT));