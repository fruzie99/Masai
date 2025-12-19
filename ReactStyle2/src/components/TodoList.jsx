import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 15)));

    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h1>Q3: Todo List</h1>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
