import { useState } from "react";
import { TextField } from "@mui/material";

type Props = {
  onSubmit: (taskName: string) => void;
};

const TodoInput: React.FC<Props> = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="todo-input"
        variant="outlined"
        fullWidth
        aria-label="New todo item"
        placeholder="What are your plans for today?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
