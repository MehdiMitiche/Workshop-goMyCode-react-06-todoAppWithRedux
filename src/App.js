import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="container">
      <div className="content">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
