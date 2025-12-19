function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
      <p><b>User:</b> {userId}</p>
      <p><b>Title:</b> {title}</p>
      <p><b>Status:</b> {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoCard;
