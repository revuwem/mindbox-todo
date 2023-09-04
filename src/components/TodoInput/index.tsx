import { TextField } from "@mui/material";

const TodoInput = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("form submitted");
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="todo-input"
        variant="outlined"
        fullWidth
        aria-label="New todo item"
        placeholder="What are your plans for today?"
      />
    </form>
  );
};

export default TodoInput;
