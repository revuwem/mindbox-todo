import { Grid } from "@mui/material";
import TodoStatusFilter from "@/components/TodoStatusFilter";
import TodoClearCompleted from "@/components/TodoClearCompleted";
import TodoActiveCount from "@/components/TodoActiveCount";

const TodoControls = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      sx={{
        padding: "1.5rem 1rem",
      }}
    >
      <Grid item xs="auto" md={2}>
        <TodoActiveCount />
      </Grid>
      <Grid item>
        <TodoStatusFilter />
      </Grid>
      <Grid item xs="auto" md={1.5}>
        <TodoClearCompleted />
      </Grid>
    </Grid>
  );
};

export default TodoControls;
