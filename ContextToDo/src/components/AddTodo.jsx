import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTodo;
