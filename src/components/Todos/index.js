import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./todos.css";
import { Button } from "antd";
import axios from "axios";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todolist);
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/todos/${id}`);
      if (!response || response.status !== 200)
        return dispatch({
          type: "SET_STATE",
          payload: { error: "FAILED TO DELETE" },
        });
      dispatch({
        type: "SET_STATE",
        payload: { todolist: todos.filter((elem) => elem._id !== id) },
      });
    } catch (err) {
      dispatch({ type: "SET_STATE", payload: { error: "FAILED TO DELETE" } });
    }
  };
  return (
    <div className="todo-container">
      {todos.map((todo, i) => {
        return (
          <div className="todo-item" key={i}>
            {todo.todoBody}
            <Button type="primary" onClick={() => deleteTodo(todo._id)}>
              DELETE
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
