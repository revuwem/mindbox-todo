import { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "@/store/slice/todoSlice";

const TodoInput = () => {
  const [taskName, setTaskName] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTask(taskName));
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
