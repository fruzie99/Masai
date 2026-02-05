import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.userId;

  const { error } = await supabase.from("todos").insert([
    { title, userId }
  ]);

  if (error) return res.status(400).json({ message: error.message });
  res.status(201).json({ message: "Todo created" });
};

export const getTodos = async (req, res) => {
  const userId = req.user.userId;

  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== userId)
    return res.status(403).json({ message: "Forbidden" });

  await supabase
    .from("todos")
    .update(req.body)
    .eq("id", id);

  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== userId)
    return res.status(403).json({ message: "Forbidden" });

  await supabase.from("todos").delete().eq("id", id);
  res.json({ message: "Todo deleted" });
};
