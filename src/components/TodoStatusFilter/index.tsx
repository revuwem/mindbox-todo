import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveStatus } from "@/store/slice/todoSlice";
import { todoListActiveStatus } from "@/store/selector/todoSelector";
import { type TodoListStatus, todoListStatus } from "@/store/slice/todoSlice";

const TodoStatusFilter = () => {
  const activeStatus = useSelector(todoListActiveStatus);
  const dispatch = useDispatch();

  const handleChangeStatus = (status: TodoListStatus) => {
    dispatch(changeActiveStatus(status));
  };

  const filterButtons = todoListStatus.map((item) => (
    <Button
      key={`btn-filter-${item}`}
      variant={activeStatus === item ? "contained" : "outlined"}
      onClick={() => handleChangeStatus(item)}
    >
      {item}
    </Button>
  ));

  return (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      {filterButtons}
    </ButtonGroup>
  );
};

export default TodoStatusFilter;
