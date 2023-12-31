const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todoRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");
const cors = require("cors");

//express
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//api routes
app.use("/api/todos", todoRoutes);
app.use("/api/user", userRoutes);

//db
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
