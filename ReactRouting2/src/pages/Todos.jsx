import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <h2>Todos</h2>
      <button onClick={logout}>Logout</button>

      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => navigate(`/todos/${todo.id}`)}
          style={{ cursor: "pointer", margin: "10px 0" }}
        >
          {todo.title}
        </div>
      ))}
    </>
  );
};

export default Todos;
