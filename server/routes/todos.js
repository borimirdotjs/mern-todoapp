const express = require("express");
const {
  getTodos,
  newTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

//GET Todos
router.get("/", getTodos);

//POST Todo
router.post("/", newTodo);

//DELETE Todo
router.delete("/:id", deleteTodo);

//UPDATE Todo
router.patch("/:id", updateTodo);

module.exports = router;
