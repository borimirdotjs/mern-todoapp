const Todo = require("../models/todoModel");

const mongoose = require("mongoose");

//Get all Todos

const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

//Get a single todo
//Post a new todo

const newTodo = async (req, res) => {
  const { title, todo } = req.body;
  try {
    const todoItem = await Todo.create({ title, todo });
    res.status(200).json(todoItem);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//Delete todo

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  const deleted = await Todo.findByIdAndDelete({ _id: id });
  if (!deleted) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(deleted);
};

//Update todo

const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(400).json({ error: "No such todo" });
    }

    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();

    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

module.exports = {
  getTodos,
  newTodo,
  deleteTodo,
  updateTodo,
};
