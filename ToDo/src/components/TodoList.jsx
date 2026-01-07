import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import * as todoService from "@/services/todo.service";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TodoDetails from "./TodoDetails";
import Footer from "./Footer";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Todolist() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const data = await todoService.getTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ADD TODO BAR */}
      <div className="p-4 border-b bg-white">
        <div className="flex gap-2 max-w-xl">
          <Input
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            onClick={async () => {
              if (!newTodo.trim()) return;
              await todoService.createTodo(user.uid, newTodo);
              setNewTodo("");
              fetchTodos();
            }}
          >
            Add
          </Button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1">
        <Sidebar
          todos={todos}
          selectedId={selectedTodo?.id}
          onSelect={setSelectedTodo}
        />

        <div className="flex-1 p-6">
          <TodoDetails
            todo={selectedTodo}
            refresh={fetchTodos}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
