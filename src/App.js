import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todos");
        if (!response || response.status !== 200)
          return dispatch({ type: "SET_STATE", payload: { todolist: [] } });
        dispatch({
          type: "SET_STATE",
          payload: { todolist: response.data.data },
        });
      } catch (err) {
        console.log(err.message);
        return dispatch({ type: "SET_STATE", payload: { todolist: [] } });
      }
    };
    fetchData();
  }, [dispatch]);
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
