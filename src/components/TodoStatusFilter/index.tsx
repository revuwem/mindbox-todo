import { type StatusFilter } from "@/components/TodoList";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveStatus } from "@/store/slice/todoSlice";
import { todoListActiveStatus } from "@/store/selector/todoSelector";

const TodoStatusFilter = () => {
  const activeStatus = useSelector(todoListActiveStatus);
  const dispatch = useDispatch();

  const handleChangeStatus = (status: StatusFilter) => {
    dispatch(changeActiveStatus(status));
  };

  const getStatusButtonVariant = (status: StatusFilter) =>
    activeStatus === status ? "contained" : "outlined";

  return (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Button
        variant={getStatusButtonVariant("all")}
        onClick={() => handleChangeStatus("all")}
      >
        All
      </Button>
      <Button
        variant={getStatusButtonVariant("active")}
        onClick={() => handleChangeStatus("active")}
      >
        Active
      </Button>
      <Button
        variant={getStatusButtonVariant("done")}
        onClick={() => handleChangeStatus("done")}
      >
        Done
      </Button>
    </ButtonGroup>
  );
};

export default TodoStatusFilter;
