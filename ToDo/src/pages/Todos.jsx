import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import * as todoService from "@/services/todo.service";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TodoDetails from "@/components/TodoDetails";
import Footer from "@/components/Footer";

export default function Todos() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadTodos = async () => {
    const data = await todoService.getTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar todos={todos} onSelect={setSelected} />
        <TodoDetails todo={selected} refresh={loadTodos} />
      </div>
      <Footer />
    </div>
  );
}
