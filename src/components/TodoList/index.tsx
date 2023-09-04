import { useMemo, useState } from "react";
import { Container, Box, Typography, List } from "@mui/material";
import TodoInput from "@/components/TodoInput";
import TodoListItem from "@/components/TodoListItem";
import TodoFooter from "@/components/TodoFooter";

export type StatusFilter = "all" | "active" | "done";

const TodoList = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("all");

  const displayedItems = useMemo(() => {
    switch (activeStatus) {
      case "all":
        return todoList;
      case "active":
        return todoList.filter((item) => !item.done);
      case "done":
        return todoList.filter((item) => item.done);
    }
  }, [todoList, activeStatus]);

  const activeCount = useMemo(() => {
    return todoList.filter((item) => !item.done).length;
  }, [todoList]);

  const onAddTodoItem = (name: string) => {
    setTodoList([...todoList, { name, done: false }]);
  };

  const onChangeTodoStatus = (name: string) => {
    const newTodoList = [...todoList];

    const task = newTodoList.findIndex((item) => item.name === name);
    newTodoList[task].done = !newTodoList[task].done;

    setTodoList(newTodoList);
  };

  const onDeleteCompleted = () => {
    const newTodoList = [...todoList].filter((item) => !item.done);
    setTodoList(newTodoList);
  };

  const isListEmpty = todoList.length === 0;
  const isNoItemsFound = todoList.length > 0 && displayedItems.length === 0;

  return (
    <Container>
      <Typography variant="h4" component="h2" marginBottom={3}>
        Todo List
      </Typography>
      <Box>
        <TodoInput onSubmit={onAddTodoItem} />
        <TodoFooter
          activeStatus={activeStatus}
          onChangeStatus={setActiveStatus}
          onDeleteCompleted={onDeleteCompleted}
          activeCount={activeCount}
        />
        {isListEmpty && (
          <Typography component="p">Your list is empty</Typography>
        )}
        {isNoItemsFound && (
          <Typography component="p">No items found</Typography>
        )}
        {!isNoItemsFound && (
          <List>
            {displayedItems.map((item) => (
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
