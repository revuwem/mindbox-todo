import TodoListItem from "@/components/TodoListItem";
import TodoFooter from "@/components/TodoFooter";
import { Container, Box, Typography, List } from "@mui/material";
import TodoInput from "@/components/TodoInput";

const TodoList = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);

  const onAddTodoItem = (name: string) => {
    setTodoList([...todoList, { name, done: false }]);
  };
  return (
    <Container>
      <Typography variant="h4" component="h2" marginBottom={3}>
        Todo List
      </Typography>
      <Box>
        <TodoInput onSubmit={onAddTodoItem} />
        <TodoFooter />
        <List>
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </List>
      </Box>
    </Container>
  );
};

export default TodoList;
