export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <div className="w-64 border-r p-4 space-y-2 bg-gray-50">
      <h2 className="font-semibold mb-3">Your Todos</h2>

      {todos.length === 0 && (
        <p className="text-sm text-gray-500">
          No todos yet
        </p>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => onSelect(todo)}
          className={`p-2 rounded cursor-pointer ${
            selectedId === todo.id
              ? "bg-blue-100"
              : "hover:bg-gray-100"
          }`}
        >
          <span
            className={
              todo.completed
                ? "line-through text-gray-500"
                : ""
            }
          >
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  );
}
