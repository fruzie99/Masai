import { useState } from "react";
import StatusToggle from "./components/StatusToggle";
import ColorToggle from "./components/ColorToggle";
import TodoList from "./components/TodoList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <StatusToggle />
      <hr />

      <ColorToggle />
      <hr />

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodoList />}
    </div>
  );
}

export default App;
