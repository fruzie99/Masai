import express from "express";
import { fetchTodos, createTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", fetchTodos);
router.post("/", createTodo);

export default router;
