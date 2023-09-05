import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const todoListStatus = ["all", "active", "done"] as const;
export type TodoListStatus = (typeof todoListStatus)[number];

export interface TodoListState {
  data: Task[];
  activeStatus: TodoListStatus;
}

const initialState: TodoListState = {
  data: [],
  activeStatus: "all",
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task["name"]>) => {
      state.data.push({
        uuid: new Date().getTime(),
        name: action.payload,
        done: false,
      });
    },
    changeTaskStatus: (state, action: PayloadAction<Task["uuid"]>) => {
      const taskIdx = state.data.findIndex(
        (item) => item.uuid === action.payload
      );

      state.data[taskIdx].done = !state.data[taskIdx].done;
    },
    changeActiveStatus: (
      state,
      action: PayloadAction<TodoListState["activeStatus"]>
    ) => {
      state.activeStatus = action.payload;
    },
    deleteCompletedTask: (state) => {
      state.data = state.data.filter((item) => !item.done);
    },
  },
});

export const {
  addTask,
  changeTaskStatus,
  changeActiveStatus,
  deleteCompletedTask,
} = todoListSlice.actions;

export default todoListSlice.reducer;
