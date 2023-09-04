import { Button, ButtonGroup, Grid, Typography } from "@mui/material";

const TodoFooter = () => {
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
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Done</Button>
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
