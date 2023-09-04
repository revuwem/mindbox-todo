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
        padding: "1.5rem 1rem",
      }}
    >
      <Grid item xs="auto" md={2}>
        <Typography component="p" noWrap>
          {activeCount} items left
        </Typography>
      </Grid>
      <Grid item>
        <TodoStatusFilter
          activeStatus={activeStatus}
          onChangeStatus={onChangeStatus}
        />
      </Grid>
      <Grid item xs="auto" md={1.5}>
        <TodoClear onDeleteCompleted={onDeleteCompleted} />
      </Grid>
    </Grid>
  );
};

export default TodoFooter;
