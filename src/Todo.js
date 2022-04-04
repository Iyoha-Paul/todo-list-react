import Navigation from "./Navigation";
import TodoInput from "./TodoInput";
import TodoListBody from "./TodoListBody";
import React, { useState } from "react";

const Todo = () => {
  const [inputWord, setInputWord] = useState("");
  const [todos, setTodos] = useState([]);
  const resetTodoList = () => {
    setTodos([]);
  };
  return (
    <div className="container">
      <div className="todo">
        <div className="todo__header">
          <h1> </h1>
          <h2>What needs to be done?</h2>
          <button className="btn btn--refresh" onClick={resetTodoList}>
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
          <TodoInput
            todos={todos}
            setTodos={setTodos}
            setInputWord={setInputWord}
            inputWord={inputWord}
          />
          <Navigation />
        </div>
        <TodoListBody todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
