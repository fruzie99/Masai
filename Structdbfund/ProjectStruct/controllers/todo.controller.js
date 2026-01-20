import { getAllTodos, saveTodos } from "../models/todo.model.js";

export const fetchTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = await getAllTodos();

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    todos.push(newTodo);
    await saveTodos(todos);

    res.status(201).json(newTodo);
  } catch {
    res.status(500).json({ message: "Failed to create todo" });
  }
};
