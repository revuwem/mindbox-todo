import { type StatusFilter } from "@/components/TodoList";
import { Button, ButtonGroup } from "@mui/material";

type Props = {
  activeStatus: StatusFilter;
  onChangeStatus: (s: StatusFilter) => void;
};

const TodoStatusFilter: React.FC<Props> = ({
  activeStatus,
  onChangeStatus,
}) => {
  const handleChangeStatus = (status: StatusFilter) => {
    onChangeStatus(status);
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
