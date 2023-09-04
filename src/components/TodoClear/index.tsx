import { Button } from "@mui/material";
import { useState } from "react";

type Props = {
  onDeleteCompleted: () => void;
};

const TodoClear: React.FC<Props> = ({ onDeleteCompleted }) => {
  const [isDeleteRequested, setIsDeleteRequested] = useState<boolean>(false);

  const handleDeleteCompleted = () => {
    if (isDeleteRequested) {
      onDeleteCompleted();
      setIsDeleteRequested(false);
    } else {
      setIsDeleteRequested(true);
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

export default TodoClear;
