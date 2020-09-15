import React from "react";
import { Input } from "antd";
import { Button } from "antd";
import "./addInput.css";
import { useSelector, useDispatch } from "react-redux";

const AddTodo = () => {
  const todoInput = useSelector((state) => state.todo.todoInput);
  const dispatch = useDispatch();
  return (
    <div className="todo-input">
      <Input
        value={todoInput}
        size="large"
        placeholder="Add new Todo"
        style={{ height: 70 }}
        onChange={(event) => {
          dispatch({ type: "UPDATE_INPUT", payload: event.target.value });
        }}
      />
      <Button
        type="primary"
        style={{ height: 70 }}
        onClick={() => {
          if (todoInput) dispatch({ type: "ADD_TODO", payload: todoInput });

          dispatch({ type: "UPDATE_INPUT", payload: "" });
        }}
      >
        New Todo
      </Button>
    </div>
  );
};

export default AddTodo;
