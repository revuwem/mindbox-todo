import { type StatusFilter } from "@/components/TodoList";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";

type Props = {
  activeStatus: StatusFilter;
  onChangeStatus: (s: StatusFilter) => void;
};

const TodoFooter: React.FC<Props> = ({ activeStatus, onChangeStatus }) => {
  const handleChangeStatus = (status: StatusFilter) => {
    onChangeStatus(status);
  };

  const getStatusButtonVariant = (status: StatusFilter) =>
    activeStatus === status ? "contained" : "outlined";

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      sx={{
        padding: "0.5rem 2rem",
      }}
    >
      <Grid item>
        <Typography component="p">2 items left</Typography>
      </Grid>
      <Grid item>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
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
      </Grid>
      <Grid item>
        <Button variant="text" color="error">
          Clear completed
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoFooter;
