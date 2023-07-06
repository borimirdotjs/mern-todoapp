const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todoRoutes = require("./routes/todos");

//express
const app = express();

//middleware
app.use(express.json());
//api routes
app.use("/api/todos", todoRoutes);

//db
mongoose.connect(process.env.MONGO_DB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});
