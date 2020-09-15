import React from "react";
import { useSelector } from "react-redux";
import "./todos.css";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todolist);
  return (
    <div className="todo-container">
      {todos.map((todo, i) => {
        return (
          <div className="todo-item" key={i}>
            {todo}
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
