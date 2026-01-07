import { Button } from "@/components/ui/button";
import UpdateTodoModal from "./UpdateTodoModal";
import * as todoService from "@/services/todo.service";

export default function TodoDetails({ todo, refresh }) {
  if (!todo) {
    return (
      <p className="text-gray-500 text-lg">
        👈 Select a todo from the left or add a new one
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">
        {todo.title}
      </h2>

      <p>
        Status:{" "}
        <span className="font-medium">
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </p>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={async () => {
            await todoService.toggleTodo(
              todo.id,
              !todo.completed
            );
            refresh();
          }}
        >
          Toggle Status
        </Button>

        <UpdateTodoModal
          todo={todo}
          refresh={refresh}
        />

        <Button
          variant="destructive"
          onClick={async () => {
            await todoService.deleteTodo(todo.id);
            refresh();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
