import { Grid, Typography } from "@mui/material";
import TodoStatusFilter from "@/components/TodoStatusFilter";
import TodoClear from "@/components/TodoClear";
import { useSelector } from "react-redux";
import { todoListActiveCount } from "@/store/selector/todoSelector";

const TodoFooter = () => {
  const activeCount = useSelector(todoListActiveCount);

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
        <Typography component="p" noWrap>
          {activeCount} items left
        </Typography>
      </Grid>
      <Grid item>
        <TodoStatusFilter />
      </Grid>
      <Grid item xs="auto" md={1.5}>
        <TodoClear />
      </Grid>
    </Grid>
  );
};

export default TodoFooter;
