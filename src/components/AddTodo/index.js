import React from "react";
import { Input } from "antd";
import { Button } from "antd";
import "./addInput.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const AddTodo = () => {
  const todoInput = useSelector((state) => state.todo.todoInput);
  const todos = useSelector((state) => state.todo.todolist);
  const dispatch = useDispatch();
  return (
    <div className="todo-input">
      <Input
        value={todoInput}
        size="large"
        placeholder="Add new Todo"
        style={{ height: 70 }}
        onChange={(event) => {
          dispatch({
            type: "SET_STATE",
            payload: { todoInput: event.target.value },
          });
        }}
      />
      <Button
        type="primary"
        style={{ height: 70 }}
        onClick={async () => {
          try {
            //API CALL
            if (todoInput) {
              const response = await axios.post("http://localhost:8080/todos", {
                todoBody: todoInput,
              });
              if (!response || response.status !== 201) {
                //ERROR
                return dispatch({
                  type: "SET_STATE",
                  payload: { error: "FAILED TO ADD TODO" },
                });
              }
              dispatch({
                type: "SET_STATE",
                payload: { todolist: [...todos, response.data.data] },
              });
            }
          } catch (err) {
            console.log(err.message);
            dispatch({
              type: "SET_STATE",
              payload: { error: "FAILED TO ADD TODO" },
            });
          }
        }}
      >
        New Todo
      </Button>
    </div>
  );
};

export default AddTodo;
