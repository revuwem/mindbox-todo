import { Container, Box, Typography, List } from "@mui/material";
import TodoInput from "@/components/TodoInput";
import TodoListItem from "@/components/TodoListItem";
import TodoControls from "@/components/TodoControls";
import TodoUIMessage from "@/components/TodoUIMessage";
import { useSelector } from "react-redux";
import {
  isTodoListEmpty,
  todoListDisplayedItemsSelector,
} from "@/store/selector/todoSelector";

export type StatusFilter = "all" | "active" | "done";

const TodoList = () => {
  const displayedItems = useSelector(todoListDisplayedItemsSelector);
  const isListEmpty = useSelector(isTodoListEmpty);
  const isNoItemsFound = !isListEmpty && displayedItems.length === 0;

  return (
    <Container>
      <Box paddingTop={7} paddingBottom={2}>
        <Typography variant="h4" component="h2" marginBottom={3}>
          Todo List
        </Typography>
        <Box>
          <TodoInput />
          <TodoControls />
          {isListEmpty && (
            <TodoUIMessage>Add a new task to start with</TodoUIMessage>
          )}
          {isNoItemsFound && <TodoUIMessage>No items found</TodoUIMessage>}
          {!isNoItemsFound && (
            <List disablePadding>
              {displayedItems.map((item) => (
                <TodoListItem key={"todo-" + item.uuid} item={item} />
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default TodoList;
