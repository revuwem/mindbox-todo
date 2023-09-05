import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCompletedTask } from "@/store/slice/todoSlice";

const TodoClearCompleted = () => {
  const [isDeleteRequested, setIsDeleteRequested] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDeleteCompleted = () => {
    if (isDeleteRequested) {
      dispatch(deleteCompletedTask());
      setIsDeleteRequested(false);
    } else {
      setIsDeleteRequested(true);
      setTimeout(() => setIsDeleteRequested(false), 5000);
    }
  };

  return (
    <Button
      variant={isDeleteRequested ? "contained" : "text"}
      color="error"
      onClick={handleDeleteCompleted}
      sx={{
        whiteSpace: "nowrap",
      }}
    >
      {isDeleteRequested ? "Submit clear" : "Clear completed"}
    </Button>
  );
};

export default TodoClearCompleted;
