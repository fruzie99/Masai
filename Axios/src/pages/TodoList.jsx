import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.slice(0, 20)); 
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            {todo.title}
          </Link>
          {" - "}
          {todo.completed ? " Completed" : " Pending"}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
