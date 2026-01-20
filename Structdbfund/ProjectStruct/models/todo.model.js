import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("data/todos.json");

export const getAllTodos = async () => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const saveTodos = async (todos) => {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2));
};
