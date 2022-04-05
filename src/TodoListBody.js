import React, { useState } from "react";

const TodoListBody = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
    console.log(todos);
  };
  const handleToggleTodoCondition = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );

    console.log(todos);
  };
  return (
    <div className="todo-list-body">
      <ul className="todo-list-body__list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed == false ? "" : "stroke"}>
            <i
              onClick={() => {
                handleToggleTodoCondition(todo);
              }}
              className={
                todo.completed == false
                  ? "fa-solid fa-circle clickable"
                  : "fa-solid fa-circle-check"
              }
            ></i>
            <p className={todo.completed == false ? "" : "stroke"}>
              {todo.Text}
            </p>
            <i
              className={
                todo.completed == false
                  ? "fa-solid fa-trash-can"
                  : "fa-solid fa-trash-can stroke"
              }
              onClick={() => handleDeleteTodo(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListBody;
