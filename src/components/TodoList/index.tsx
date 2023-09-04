import { useState } from "react";
import { Container, Box, Typography, List } from "@mui/material";
import TodoInput from "@/components/TodoInput";
import TodoListItem from "@/components/TodoListItem";
import TodoFooter from "@/components/TodoFooter";

const TodoList = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);

  const onAddTodoItem = (name: string) => {
    setTodoList([...todoList, { name, done: false }]);
  };

  const onChangeTodoStatus = (name: string) => {
    const newTodoList = [...todoList];

    const task = newTodoList.findIndex((item) => item.name === name);
    newTodoList[task].done = !newTodoList[task].done;

    setTodoList(newTodoList);
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" marginBottom={3}>
        Todo List
      </Typography>
      <Box>
        <TodoInput onSubmit={onAddTodoItem} />
        <TodoFooter />
        {todoList.length < 1 && (
          <Typography component="p">Your list is empty</Typography>
        )}
        {todoList && todoList.length > 0 && (
          <List>
            {todoList.map((item) => (
              <TodoListItem
                key={item.name}
                item={item}
                onChangeStatus={onChangeTodoStatus}
              />
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default TodoList;
