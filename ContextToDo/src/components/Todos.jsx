import TodoProvider from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;
