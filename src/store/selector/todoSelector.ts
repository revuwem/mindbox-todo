import { RootState } from "@/store";

export const todoListDisplayedItemsSelector = (state: RootState) => {
  switch (state.todoList.activeStatus) {
    case "all":
      return state.todoList.data;
    case "active":
      return state.todoList.data.filter((item) => !item.done);
    case "done":
      return state.todoList.data.filter((item) => item.done);
  }
};

export const isTodoListEmpty = (state: RootState) =>
  state.todoList.data.length === 0;

export const todoListActiveCount = (state: RootState) =>
  state.todoList.data.filter((item) => !item.done).length;

export const todoListActiveStatus = (state: RootState) =>
  state.todoList.activeStatus;
