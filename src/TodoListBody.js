import React, { useState } from "react";

const TodoListBody = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id) => {
    const temp = todos.filter((id) => todos.id != id);
    setTodos(temp);
  };
  const [help, setHelp] = useState("");
  return (
    <div className="todo-list-body">
      <ul className="todo-list-body__list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed == false ? "" : "stroke"}>
            <i
              onClick={() => {
                todo.completed = false ? true : false;
                setTodos(todos);
              }}
              className={
                todo.completed == false
                  ? "fa-solid fa-circle clickable"
                  : "fa-solid fa-circle-check"
              }
            ></i>
            <p>{todo.Text}</p>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => handleDeleteTodo(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListBody;
