import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { todoListActiveCount } from "@/store/selector/todoSelector";

const TodoActiveCount = () => {
  const activeCount = useSelector(todoListActiveCount);

  return (
    <Typography component="p" noWrap>
      {activeCount} items left
    </Typography>
  );
};

export default TodoActiveCount;
