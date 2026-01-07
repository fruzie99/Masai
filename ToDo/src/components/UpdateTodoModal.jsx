import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as todoService from "@/services/todo.service";

export default function UpdateTodoModal({ todo, refresh }) {
  const [title, setTitle] = useState(todo.title);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <DialogFooter>
          <Button
            onClick={async () => {
              await todoService.updateTodo(
                todo.id,
                title
              );
              refresh();
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
