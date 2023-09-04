import { Grid, Typography } from "@mui/material";
import { type StatusFilter } from "@/components/TodoList";
import TodoStatusFilter from "@/components/TodoStatusFilter";
import TodoClear from "@/components/TodoClear";

type Props = {
  activeStatus: StatusFilter;
  onChangeStatus: (s: StatusFilter) => void;
  onDeleteCompleted: () => void;
  activeCount: number;
};

const TodoFooter: React.FC<Props> = ({
  activeStatus,
  onChangeStatus,
  onDeleteCompleted,
  activeCount,
}) => {
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
      <Grid item xs={2}>
        {activeCount > 0 && (
          <Typography component="p">{activeCount} items left</Typography>
        )}
      </Grid>
      <Grid item>
        <TodoStatusFilter
          activeStatus={activeStatus}
          onChangeStatus={onChangeStatus}
        />
      </Grid>
      <Grid container item xs={2} justifyContent="end">
        <TodoClear onDeleteCompleted={onDeleteCompleted} />
      </Grid>
    </Grid>
  );
};

export default TodoFooter;
