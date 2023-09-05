import { describe, it } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithStore } from "@/helpers/tests/renderWithStore";
import TodoList from "@/components/TodoList";
import { TodoListState } from "@/store/slice/todoSlice";

const initialTodos: TodoListState["data"] = [
  {
    uuid: 1,
    name: "active task",
    done: false,
  },
  {
    uuid: 2,
    name: "completed task",
    done: true,
  },
];

describe("TodoList", () => {
  it("should render", () => {
    renderWithStore(<TodoList />);

    const taskInput = screen.getByTestId("todo-input");
    const activeCount = screen.getByText(/items left/i);
    const statusFilterBtnAll = screen.getByText("all");
    const statusFilterBtnActive = screen.getByText("active");
    const statusFilterBtnDone = screen.getByText("done");
    const clearCompletedBtn = screen.getByText(/clear completed/i);
    const todoList = screen.getByText(/add a new task/i);

    expect(taskInput).toBeInTheDocument();
    expect(activeCount).toBeInTheDocument();
    expect(statusFilterBtnAll).toBeInTheDocument();
    expect(statusFilterBtnActive).toBeInTheDocument();
    expect(statusFilterBtnDone).toBeInTheDocument();
    expect(clearCompletedBtn).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
  });

  it("should add new task", () => {
    renderWithStore(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "new task" } });
    fireEvent.submit(form);

    const newTask = screen.getByText("new task");
    expect(newTask).toBeInTheDocument();
  });

  it("should filter list by status", () => {
    renderWithStore(<TodoList />, {
      preloadedState: {
        todoList: { data: initialTodos, activeStatus: "all" },
      },
    });

    // status "active" button
    const statusFilterBtnActive = screen.getByText("active");
    fireEvent.click(statusFilterBtnActive);
    expect(screen.getByText(/active task/i)).toBeInTheDocument();
    expect(screen.queryByText(/completed task/i)).not.toBeInTheDocument();

    // status "done" button
    const statusFilterBtnDone = screen.getByText("done");
    fireEvent.click(statusFilterBtnDone);
    expect(screen.getByText("completed task")).toBeInTheDocument();
    expect(screen.queryByText("active task")).not.toBeInTheDocument();

    // status "active" button
    const statusFilterBtnAll = screen.getByText("all");
    fireEvent.click(statusFilterBtnAll);
    expect(screen.getByText("active task")).toBeInTheDocument();
    expect(screen.getByText("completed task")).toBeInTheDocument();
  });

  it("should remove completed tasks", () => {
    renderWithStore(<TodoList />, {
      preloadedState: {
        todoList: { data: initialTodos, activeStatus: "all" },
      },
    });

    const clearButton = screen.getByText(/clear completed/i);
    fireEvent.click(clearButton);

    const submitClearButton = screen.getByText(/submit clear/i);
    fireEvent.click(submitClearButton);

    expect(screen.queryByText("completed task")).not.toBeInTheDocument();
  });

  it("should display the number of active tasks", () => {
    renderWithStore(<TodoList />, {
      preloadedState: {
        todoList: { data: initialTodos, activeStatus: "all" },
      },
    });

    const activeCount = screen.queryByText("1 items left");
    const falseActiveCount = screen.queryByText("2 items left");

    expect(activeCount).toBeInTheDocument();
    expect(falseActiveCount).not.toBeInTheDocument();
  });
});
