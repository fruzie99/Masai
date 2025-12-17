function MessageCard({ title, message }) {
  return (
    <div style={{ border: "1px solid #000", padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
